import * as cdk from "aws-cdk-lib";
import * as apigwv2 from "aws-cdk-lib/aws-apigatewayv2";
import * as apigwIntegrations from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as apigwAuthorizers from "aws-cdk-lib/aws-apigatewayv2-authorizers";
import * as cognito from "aws-cdk-lib/aws-cognito";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as nodejs from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import * as path from "path";

export interface ApiStackProps extends cdk.StackProps {
  stageName: string;
  userPool: cognito.IUserPool;
  userPoolClient: cognito.IUserPoolClient;
  table: dynamodb.ITable;
}

export class ApiStack extends cdk.Stack {
  readonly httpApi: apigwv2.HttpApi;

  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    const prefix = `fingora-${props.stageName}`;
    const servicesRoot = path.join(__dirname, "..", "..", "..", "services", "api");

    const healthFn = new nodejs.NodejsFunction(this, "HealthFn", {
      functionName: `${prefix}-health`,
      entry: path.join(servicesRoot, "health", "handler.ts"),
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_20_X,
      timeout: cdk.Duration.seconds(10),
      environment: {
        STAGE: props.stageName,
        TABLE_NAME: props.table.tableName,
      },
      bundling: { minify: true },
    });

    const meFn = new nodejs.NodejsFunction(this, "MeFn", {
      functionName: `${prefix}-me`,
      entry: path.join(servicesRoot, "users", "me-handler.ts"),
      handler: "handler",
      runtime: lambda.Runtime.NODEJS_20_X,
      timeout: cdk.Duration.seconds(10),
      environment: { STAGE: props.stageName },
      bundling: { minify: true },
    });

    props.table.grantReadData(healthFn);

    const issuer = `https://cognito-idp.${cdk.Stack.of(this).region}.amazonaws.com/${props.userPool.userPoolId}`;

    const jwtAuthorizer = new apigwAuthorizers.HttpJwtAuthorizer(
      "CognitoAuthorizer",
      issuer,
      {
        jwtAudience: [props.userPoolClient.userPoolClientId],
      }
    );

    this.httpApi = new apigwv2.HttpApi(this, "HttpApi", {
      apiName: `${prefix}-api`,
      description: `Fingora ${props.stageName} HTTP API`,
      corsPreflight: {
        allowHeaders: ["Authorization", "Content-Type"],
        allowMethods: [
          apigwv2.CorsHttpMethod.GET,
          apigwv2.CorsHttpMethod.POST,
          apigwv2.CorsHttpMethod.PUT,
          apigwv2.CorsHttpMethod.PATCH,
          apigwv2.CorsHttpMethod.DELETE,
          apigwv2.CorsHttpMethod.OPTIONS,
        ],
        allowOrigins: ["*"],
        maxAge: cdk.Duration.days(1),
      },
    });

    this.httpApi.addRoutes({
      path: "/health",
      methods: [apigwv2.HttpMethod.GET],
      integration: new apigwIntegrations.HttpLambdaIntegration(
        "HealthIntegration",
        healthFn
      ),
    });

    this.httpApi.addRoutes({
      path: "/users/me",
      methods: [apigwv2.HttpMethod.GET],
      integration: new apigwIntegrations.HttpLambdaIntegration(
        "MeIntegration",
        meFn
      ),
      authorizer: jwtAuthorizer,
    });

    new cdk.CfnOutput(this, "ApiEndpoint", {
      value: this.httpApi.apiEndpoint,
      exportName: `${prefix}-api-endpoint`,
    });

    new cdk.CfnOutput(this, "JwtIssuer", {
      value: issuer,
      description: "Cognito JWT issuer URL for the iOS app",
    });
  }
}
