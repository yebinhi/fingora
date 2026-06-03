# Fingora AWS Backend

Serverless backend: **API Gateway + Lambda**, **Cognito**, **DynamoDB**, **S3**, **Step Functions** for OMR/upload processing.

## Structure

```
infrastructure/     # AWS CDK app (stacks: auth, api, data, processing, cdn)
services/
  api/              # HTTP handlers grouped by domain
  workers/          # OMR + program generation (Step Functions tasks)
packages/
  shared/           # Types, validation, DynamoDB keys (TypeScript)
```

## Stacks (planned)

| Stack | Resources |
|-------|-----------|
| `FingoraAuthStack` | Cognito User Pool, app client |
| `FingoraDataStack` | DynamoDB tables, S3 buckets |
| `FingoraApiStack` | API Gateway, Lambda integrations |
| `FingoraProcessingStack` | Step Functions, OMR workers |
| `FingoraCdnStack` | CloudFront for program assets |

## Next steps

1. `cd infrastructure && npm install`
2. Implement CDK stacks and deploy to dev account
3. Fill `services/api` handlers; wire `shared/api` schemas
