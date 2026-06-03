import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

/** Step Functions OMR + program generation pipeline — not yet implemented. */
export class ProcessingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // TODO: State machine, OMR worker, program generator Lambda
  }
}
