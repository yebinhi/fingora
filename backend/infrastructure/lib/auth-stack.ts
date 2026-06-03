import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

/** Amazon Cognito User Pool + app client — not yet implemented. */
export class AuthStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // TODO: UserPool, UserPoolClient, email verification
  }
}
