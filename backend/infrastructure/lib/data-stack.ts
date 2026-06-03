import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

/** DynamoDB tables + S3 buckets — not yet implemented. */
export class DataStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // TODO: programs, uploads, purchases, progress tables; assets bucket
  }
}
