# Async workers (Step Functions)

| Worker | Role |
|--------|------|
| `omr/` | PDF/image → MusicXML / MIDI |
| `program-generator/` | Sections, fingering, demo audio, manifest JSON |

Triggered after upload confirmation; updates `UploadJob` in DynamoDB.
