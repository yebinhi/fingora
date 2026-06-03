import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

/** API Gateway HTTP API + Lambda integrations — not yet implemented. */
export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // TODO: HttpApi, JWT authorizer (Cognito), route handlers
  }
}
