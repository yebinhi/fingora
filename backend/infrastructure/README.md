# Fingora CDK

Stacks wired in `FingoraDev` stage:

| Stack | Resources |
|-------|-----------|
| **Auth** | Cognito User Pool (email sign-up / verify), iOS app client |
| **Data** | DynamoDB single table (`PK` / `SK`) for MVP entities |
| **Api** | HTTP API, `GET /health`, `GET /users/me` (JWT) |

## Deploy

```bash
npm install
npx cdk synth
npx cdk deploy "FingoraDev/*"   # or deploy each stack
```

Outputs: API URL, User Pool ID, Client ID, table name, JWT issuer.

## Routes

| Method | Path | Auth |
|--------|------|------|
| GET | `/health` | None |
| GET | `/users/me` | Cognito JWT |
