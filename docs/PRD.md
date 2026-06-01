# Fingora Product Requirements Document (PRD)

**Version:** 1.0
**Date:** June 2026
**Owner:** Bin Ye

---

# 1. Product Overview

## Product Name

Fingora

## Vision

Fingora is an AI-powered piano learning platform that transforms sheet music into an interactive piano tutoring experience.

Users can upload PDF sheet music and instantly receive:

* Automatic sheet music recognition
* Interactive keyboard guidance
* AI-generated fingering suggestions
* Virtual hand demonstrations
* Real-time performance feedback using the device microphone

The goal is to make any piano score instantly learnable without requiring a human tutor.

---

# 2. Problem Statement

Learning piano from traditional sheet music is difficult because:

* Beginners cannot easily identify notes.
* Most sheet music does not include fingering.
* Users do not know if they are playing correctly.
* Piano lessons are expensive.
* Existing apps offer limited music libraries.

Users often find sheet music online but have no efficient way to practice it interactively.

Fingora solves this by allowing users to upload any PDF score and convert it into an AI-guided learning experience.

---

# 3. Target Users

## Beginner Pianists

Users learning piano for the first time.

### Needs

* Note guidance
* Fingering assistance
* Slow practice mode

---

## Intermediate Pianists

Users capable of reading sheet music but seeking faster learning.

### Needs

* Fingering optimisation
* Mistake detection
* Practice tracking

---

## Piano Teachers

Teachers wanting to provide students with guided practice materials.

### Needs

* Shareable practice content
* Progress monitoring

---

# 4. Business Model

## Freemium

### Free Features

* Account registration
* Public tutorials
* Beginner lessons
* Limited practice features

### Paid Features

Users purchase Credits.

Credits are consumed when processing uploaded PDF scores.

### Example Packages

| Package  | Credits |
| -------- | ------- |
| Starter  | 5       |
| Standard | 10      |
| Premium  | 20      |

### Consumption

* 1 PDF Upload = 1 Credit

---

# 5. Navigation Structure

The application contains three main tabs.

## Public

Contains:

* Free tutorials
* Public piano lessons
* Premium song library

Users can:

* Browse songs
* Search songs
* Add songs to My List
* Practice songs

---

## Private

Contains:

* User uploaded PDF scores
* Generated practice content

Users can:

* Upload PDF
* Monitor processing status
* Open generated lessons
* Delete lessons

---

## My List

Personal collection of learning content.

Users can:

* Save Public content
* Save Private content
* Continue learning
* View progress

---

# 6. User Flow

## Public Content

Register

→ Browse Public Library

→ Select Tutorial

→ Practice

→ Add to My List

---

## Private Content

Register

→ Purchase Credits

→ Upload PDF

→ Consume 1 Credit

→ OMR Processing

→ Generate Practice Content

→ Add to Private Library

→ Practice

---

# 7. Core Features

## User Authentication

### Features

* Email registration
* Email verification
* Login
* Logout
* Password reset

### Technology

AWS Cognito

---

## PDF Upload

### Supported Formats

* PDF
* JPEG
* PNG

### Process

Upload

→ Validation

→ Credit deduction

→ Processing queue

→ OMR recognition

→ Lesson generation

---

## Credit System

Users purchase credits through in-app purchases.

Credits are required for:

* PDF processing

Users can view:

* Current balance
* Purchase history
* Credit consumption history

---

# 8. OMR Processing

## Objective

Convert uploaded sheet music into machine-readable music data.

## Technology

Audiveris

## Input

* PDF
* Scanned sheet music
* Images

## Output

* MusicXML
* MIDI

## Processing Pipeline

PDF Upload

→ S3 Storage

→ OMR Recognition

→ MusicXML Generation

→ Music Analysis

→ Lesson Generation

→ User Library

---

# 9. Practice Engine

## Sheet Music View

Features:

* Measure highlighting
* Current note indication
* Auto scrolling

---

## Piano Keyboard View

Features:

* Full keyboard
* Highlight active notes
* Chord display
* Tempo tracking

---

## Fingering Guidance

Display recommended fingers.

### Finger Numbers

| Finger        | Number |
| ------------- | ------ |
| Thumb         | 1      |
| Index         | 2      |
| Middle        | 3      |
| Ring          | 4      |
| Little Finger | 5      |

Supports:

* Left hand
* Right hand

---

## Virtual Hands

### Version 1

2D animated hands.

### Future Version

3D animated hands.

Functions:

* Hand position guidance
* Finger movement animation

---

## Audio Validation

### Technology

AVFoundation

### Features

* Detect played notes
* Detect wrong notes
* Detect missed notes
* Detect timing errors

### Output

* Accuracy score
* Error report
* Practice summary

---

# 10. Progress Tracking

Store:

* Practice time
* Completed lessons
* Accuracy score
* Best score
* Last played date

Display:

* Daily progress
* Weekly progress
* Learning streak

---

# 11. Non-Functional Requirements

## Performance

### PDF Processing

Target:

* Less than 60 seconds

### Lesson Loading

Target:

* Less than 3 seconds

---

## Security

### Authentication

AWS Cognito

### Storage

Private S3 buckets

### Communication

HTTPS only

---

## Scalability

Support:

* 10,000+ users
* 100,000+ scores
* Cloud-based processing

---

# 12. Technology Stack

## iOS

* Swift
* SwiftUI
* AVFoundation
* PDFKit

## Backend

* AWS API Gateway
* AWS Lambda
* DynamoDB
* S3
* Cognito

## OMR Service

* Audiveris
* Java

## Infrastructure

* AWS CDK
* TypeScript

---

# 13. MVP Scope

## Included

* Login
* Public Library
* Private Library
* My List
* PDF Upload
* Credit System
* OMR Processing
* Piano Keyboard Practice
* Audio Validation

## Excluded

* Social Features
* Teacher Dashboard
* AI Chat Tutor
* Multi-Instrument Support
* Marketplace

---

# 14. Future Roadmap

## Version 2

* Advanced AI fingering generation
* Teacher portal
* Performance analytics
* Cloud sync

## Version 3

* Guitar support
* Violin support
* AI practice coach
* Community features
* Music marketplace

---

# 15. Success Metrics

## Business Metrics

* User registration rate
* Credit purchase rate
* PDF upload conversion rate
* Revenue per user

## Product Metrics

* Daily active users
* Weekly active users
* Practice completion rate
* User retention rate

## Technical Metrics

* OMR success rate
* Processing time
* App crash rate
* API response time
