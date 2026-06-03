#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { FingoraStage } from "../lib/fingora-stage";

const app = new cdk.App();

new FingoraStage(app, "FingoraDev", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION ?? "us-east-1",
  },
  stageName: "dev",
});
