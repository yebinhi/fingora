\# Fingora Product Requirements Document (PRD)



Version: 1.1



Date: June 2026



Owner: Bin Ye



Status: Draft



\---



\# 1. Product Vision



Fingora is an AI-powered piano learning platform that transforms traditional sheet music into an interactive learning experience.



Users can:



\- Learn from free public tutorials

\- Purchase premium piano lessons

\- Upload their own PDF sheet music

\- Automatically generate fingering suggestions

\- Follow virtual hand demonstrations

\- Practice with real-time performance feedback

\- Track learning progress



The goal is to make any piano score instantly playable and teachable.



\---



\# 2. Core Value Proposition



Traditional piano learning requires:



\- Reading sheet music

\- Understanding rhythm

\- Determining fingering

\- Receiving teacher feedback



Fingora automates these tasks using AI.



Input:



PDF Sheet Music



Output:



Interactive Piano Lesson



Including:



\- Piano keyboard guidance

\- Fingering suggestions

\- Virtual hand animations

\- Audio validation

\- Progress tracking



\---



\# 3. User Types



\## Beginner



Needs:



\- Note guidance

\- Keyboard guidance

\- Fingering assistance



\## Intermediate



Needs:



\- Faster learning

\- Difficult piece practice

\- Error correction



\## Piano Teachers



Needs:



\- Assign practice materials

\- Monitor progress



Future feature.



\---



\# 4. Navigation Structure



Bottom Navigation Bar



1\. Public

2\. Private

3\. My List

4\. Profile



\---



\# 5. Public Tab



Purpose:



Provide free and commercial piano content.



\## Content Types



\### Free Tutorials



Examples:



\- Piano Basics

\- Reading Sheet Music

\- First Scale

\- First Song



\### Public Songs



Examples:



\- Fur Elise

\- Canon in D

\- Moonlight Sonata



\### Premium Lessons



Purchased using Credits.



\---



\## User Actions



\- Browse

\- Search

\- Filter by difficulty

\- Add to My List

\- Start Practice

\- Purchase Content



\---



\# 6. Private Tab



Purpose:



Manage user-generated content.



\---



\## Upload Flow



Upload PDF



↓



Validate File



↓



Check Credits



↓



Deduct Credits



↓



Create Processing Job



↓



OMR Processing



↓



Generate Lesson



↓



Available for Practice



\---



\## User Actions



\- Upload PDF

\- View processing status

\- View generated lessons

\- Delete lessons

\- Add to My List



\---



\# 7. My List



Purpose:



Centralised practice library.



Contains:



\- Saved Public Content

\- Saved Private Content



\---



\## User Actions



\- Start Practice

\- Remove Item

\- View Progress

\- Continue Learning



\---



\# 8. Profile



Contains:



\- User Profile

\- Credits Balance

\- Purchase History

\- Practice Statistics

\- Settings



\---



\# 9. Credits System



Credits are the platform currency.



\---



\## Purchase Packages



| Package | Credits |

|----------|----------|

| Starter | 5 |

| Standard | 10 |

| Premium | 20 |

| Professional | 50 |



\---



\## Credit Consumption



| Action | Cost |

|----------|----------|

| Upload PDF | 1 Credit |

| Premium Lesson | Configurable |



\---



\# 10. Lesson Processing Pipeline



PDF Upload



↓



Store in S3



↓



Create Job



↓



Audiveris OMR



↓



MusicXML



↓



Music Analysis



↓



Fingering Generation



↓



Practice Lesson Generation



↓



Store Results



↓



Ready For User



\---



\# 11. OMR Requirements



Technology:



Audiveris



\---



\## Inputs



\- PDF

\- PNG

\- JPG



\---



\## Outputs



\- MusicXML

\- MIDI



\---



\## Supported Music



Version 1:



\- Piano scores only

\- Treble clef

\- Bass clef

\- Multi-page PDF



\---



\# 12. Fingering Engine



Purpose:



Generate playable finger recommendations.



\---



\## Inputs



MusicXML



\---



\## Outputs



For each note:



\- Hand assignment

\- Finger number



Example:



C4 → Right Hand → Finger 1



E4 → Right Hand → Finger 3



\---



\## Future



AI-assisted fingering optimisation.



\---



\# 13. Practice Engine



Core feature of the platform.



\---



\## Sheet Music Panel



Displays:



\- Original score

\- Current measure

\- Current note

\- Auto-scroll



\---



\## Piano Keyboard Panel



Displays:



\- 88-key keyboard

\- Highlighted notes

\- Chords

\- Upcoming notes



\---



\## Fingering Overlay



Displays:



\- Left hand finger numbers

\- Right hand finger numbers



\---



\## Virtual Hands



Version 1:



2D hand animation



Displays:



\- Hand position

\- Finger placement



Future:



3D hand model



\---



\# 14. Audio Validation Engine



Purpose:



Determine whether the user plays correctly.



\---



\## Technology



AVFoundation



Pitch Detection



FFT Analysis



\---



\## Detect



\- Correct note

\- Wrong note

\- Missed note

\- Extra note

\- Early timing

\- Late timing



\---



\## Generate



Practice Score



Mistake Report



Accuracy Percentage



\---



\# 15. Practice Scoring



\## Accuracy Score



Based on:



\- Correct notes

\- Wrong notes

\- Missed notes



Range:



0 - 100



\---



\## Timing Score



Based on:



\- Rhythm accuracy

\- Timing consistency



Range:



0 - 100



\---



\## Overall Score



Weighted combination:



Accuracy



Timing



Completion



\---



\# 16. Progress Tracking



Track:



\- Total practice time

\- Lessons completed

\- Best scores

\- Last practice date

\- Consecutive practice days



\---



\# 17. User Notifications



Push notifications.



Examples:



\- Lesson processed

\- Credits low

\- Practice reminder



\---



\# 18. Technology Stack



\## Mobile



Swift



SwiftUI



AVFoundation



PDFKit



\---



\## Backend



AWS API Gateway



AWS Lambda



DynamoDB



S3



Cognito



\---



\## Processing



Audiveris



Java



Python



\---



\## Infrastructure



AWS CDK



TypeScript



\---



\# 19. Database Entities



\## Users



User profile.



\---



\## Credits



User credit balance.



\---



\## PublicLessons



Platform content.



\---



\## PrivateLessons



User generated lessons.



\---



\## UploadJobs



Processing jobs.



\---



\## MyList



Saved lessons.



\---



\## PracticeSessions



Practice records.



\---



\## Purchases



Credit purchases.



\---



\# 20. MVP Scope



\## Included



\- Email Login

\- Public Library

\- Private Library

\- My List

\- Credits System

\- PDF Upload

\- OMR Processing

\- Fingering Generation

\- Piano Keyboard

\- Virtual Hands (2D)

\- Audio Validation

\- Practice Scoring



\---



\## Excluded



\- Teacher Dashboard

\- Community Features

\- Multiplayer

\- Marketplace

\- AI Chat Teacher

\- Multi-Instrument Support



\---



\# 21. Future Roadmap



\## V2



\- AI Fingering Optimisation

\- Teacher Portal

\- Cloud Sync

\- Practice Analytics



\## V3



\- Guitar Support

\- Violin Support

\- AI Piano Coach

\- Music Marketplace

\- Social Features



\---



\# 22. Success Metrics



Business:



\- Registrations

\- Credit Purchases

\- Revenue



Product:



\- Daily Active Users

\- Weekly Active Users

\- Retention Rate

\- Practice Completion Rate



Technical:



\- OMR Success Rate

\- Average Processing Time

\- Crash-Free Sessions

\- API Response Time

