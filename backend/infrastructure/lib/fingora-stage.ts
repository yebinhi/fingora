import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { ApiStack } from "./api-stack";
import { AuthStack } from "./auth-stack";
import { DataStack } from "./data-stack";

export interface FingoraStageProps extends cdk.StageProps {
  stageName: string;
}

export class FingoraStage extends cdk.Stage {
  constructor(scope: Construct, id: string, props: FingoraStageProps) {
    super(scope, id, props);

    const stackEnv = { env: props.env };

    const auth = new AuthStack(this, "Auth", {
      ...stackEnv,
      stageName: props.stageName,
    });

    const data = new DataStack(this, "Data", {
      ...stackEnv,
      stageName: props.stageName,
    });

    const api = new ApiStack(this, "Api", {
      ...stackEnv,
      stageName: props.stageName,
      userPool: auth.userPool,
      userPoolClient: auth.userPoolClient,
      table: data.table,
    });

    api.addDependency(auth);
    api.addDependency(data);
  }
}
