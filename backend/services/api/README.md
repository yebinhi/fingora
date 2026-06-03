# API Lambda handlers

One folder per domain (maps to API Gateway routes):

| Folder | Routes |
|--------|--------|
| `catalog/` | `GET /catalog/programs`, `GET /catalog/programs/{id}` |
| `library/` | Owned programs, My List |
| `uploads/` | Presign, job status |
| `purchases/` | Checkout, history |
| `progress/` | Section completion, aggregates |
| `users/` | Profile, credits |

Each handler: validate JWT claims → DynamoDB / S3 → JSON response per `shared/api/openapi.yaml`.
