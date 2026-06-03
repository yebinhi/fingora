import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
// Stacks will be split in later PRs:
// import { AuthStack } from "./auth-stack";
// import { DataStack } from "./data-stack";
// import { ApiStack } from "./api-stack";
// import { ProcessingStack } from "./processing-stack";

export interface FingoraStageProps extends cdk.StageProps {
  stageName: string;
}

/**
 * Top-level CDK stage — wires Auth, Data, API, Processing, CDN stacks.
 * Implementation intentionally deferred; synth validates project layout only.
 */
export class FingoraStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props: FingoraStageProps) {
    super(scope, id, props);

    new cdk.Stack(this, "PlaceholderStack", {
      description: `Fingora ${props.stageName} — replace with Auth/Data/API/Processing stacks`,
    });
  }
}
