# Data models (MVP)

Aligned with [PRD.md](./PRD.md) §9 and JSON schemas in `shared/schemas/`.

## Entities

| Entity | Store | Notes |
|--------|-------|-------|
| User | Cognito + DynamoDB profile | PRD §9.1; credits for upload processing |
| Program | DynamoDB + S3 manifest | Native catalog or generated |
| UserProgram | DynamoDB | Purchase / ownership entitlement |
| UploadJob | DynamoDB + S3 raw file | Status: pending → processing → complete / failed |
| Purchase | DynamoDB | Stripe payment id, amount, program or credits |
| MyListItem | DynamoDB | userId + programId, last position |
| PracticeProgress | DynamoDB | Per program: sections completed, accuracy |

## Program delivery

1. Client downloads **program manifest** + assets (audio, sheet references).
2. Practice Player runs offline using manifest `expectedNotes` per section.

See `shared/schemas/program-manifest.schema.json` for the bundle format.
