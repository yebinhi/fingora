# Fingora Product Requirements Document PRD

**Version:** 1.1  
**Date:** June 2026  
**Owner:** Bin Ye  

---

# 1. App Name

## Fingora

Fingora is an AI-powered piano practice app that turns sheet music into an interactive guided piano learning experience.

Users can either:

1. Buy ready-made piano practice programs from the Fingora library.
2. Upload their own sheet music and generate a personalised practice program.

The practice experience should be similar in style to Flowkey: the app plays a short section first, then the user practices the same section while the app listens through the microphone, checks correctness, gives feedback, and moves to the next section.

---

# 2. Goal

The goal of Fingora is to make piano practice easier, more interactive, and more personalised.

Many piano learners can find sheet music online, but they do not know how to practise it properly. They may struggle with note reading, rhythm, fingering, hand position, and recognising mistakes.

Fingora solves this by converting sheet music into a structured piano practice program with:

- Sheet music display
- Short section-by-section practice
- App playback before user practice
- Microphone-based correctness detection
- Virtual piano keyboard
- Highlighted keys
- Fingering suggestions
- Virtual hand guidance
- Progress tracking
- Paid practice programs
- User-generated lessons from uploaded sheet music

---

# 3. Target Users

## 3.1 Beginner Piano Learners

Users who are learning piano for the first time.

### Needs

- Easy note guidance
- Slow practice mode
- Highlighted piano keys
- Simple fingering suggestions
- Mistake detection
- Repeat-until-correct practice

---

## 3.2 Intermediate Piano Learners

Users who can already read some sheet music but want to learn pieces faster.

### Needs

- Section-by-section practice
- Fingering optimisation
- Timing feedback
- Wrong note detection
- Progress tracking
- Ability to upload their own music sheets

---

## 3.3 Piano Teachers

Teachers who want to provide structured practice materials to students.

### Needs

- Ready-made guided practice programs
- Ability to recommend practice pieces
- Future ability to create or assign practice programs
- Future student progress monitoring

---

## 3.4 Parents of Young Learners

Parents who want children to practise piano at home without always needing a teacher present.

### Needs

- Simple guided practice
- Clear correctness feedback
- Engaging visual piano keyboard
- Progress history
- Paid beginner courses

---

# 4. Problem Statement

Traditional piano learning has several problems:

- Sheet music is difficult for beginners to read.
- Most sheet music does not include detailed fingering.
- Users do not always know whether they are playing correctly.
- Practising a whole piece at once can feel overwhelming.
- Human piano lessons can be expensive.
- Existing piano apps usually only support their own music library.
- Users may already have their own sheet music but cannot easily turn it into an interactive lesson.

Fingora addresses these problems by transforming sheet music into guided, interactive, section-by-section piano practice.

---

# 5. Product Concept

Fingora has two main types of practice content.

## 5.1 Native Practice Programs

These are ready-made practice programs created by Fingora.

Users can:

- Browse the Fingora practice library
- Preview available practice programs
- Purchase individual courses or practice programs
- Download purchased programs to the app
- Practise offline where possible
- Save programs to My List

Examples:

- Beginner Piano Course Level 1
- Easy Classical Piano Pieces
- Children’s First Piano Songs
- Flowkey-style song practice program
- Left-hand and right-hand coordination exercises

---

## 5.2 User-Generated Practice Programs

Users can upload their own sheet music.

The app uploads the sheet music to the server. The server processes the file, recognises the notes, generates a structured practice program, and sends the generated content back to the app.

Users can upload:

- PDF sheet music
- Scanned sheet music images
- JPEG files
- PNG files

The generated practice program should include:

- Recognised music score
- MusicXML or MIDI representation
- Section-by-section lesson structure
- App playback audio
- Virtual piano key highlights
- Fingering suggestions
- Practice segments
- Microphone-based correctness checking

---

# 6. MVP Features

The MVP should focus on the smallest usable product.

## 6.1 Included in MVP

### User Account

- Email registration
- Email verification
- Login
- Logout
- Password reset

### Practice Library

- Browse public or free programs
- Browse paid practice programs
- View program details
- Purchase a practice program
- Download purchased practice program
- Add program to My List

### User Upload

- Upload PDF, JPEG, or PNG sheet music
- Server-side processing
- Generate practice program from uploaded music sheet
- Show processing status
- Add generated program to user’s private library

### Payment

- Purchase existing practice programs
- Pay for uploaded sheet music processing
- View purchase history
- View owned programs

### My List

- Save favourite programs
- Save generated programs
- Continue learning from last position
- Remove items from My List

### Practice Player

- Display sheet music
- Play a short section first
- Show highlighted piano keys
- Show fingering suggestions
- Show virtual hand or finger guidance
- Listen to user practice through microphone
- Detect correct and incorrect notes
- Repeat section if user plays incorrectly
- Move to next section after successful practice
- Track progress and accuracy

---

## 6.2 Excluded from MVP

These features should not be built in the first version:

- Teacher dashboard
- Student management
- Social features
- Public user profiles
- Community comments
- Full marketplace for third-party teachers
- Multi-instrument support
- Advanced 3D hand animation
- AI chat tutor
- Real-time multiplayer practice

---

# 7. User Flow

## 7.1 New User Registration Flow

Open app  
→ Register with email  
→ Verify email  
→ Login  
→ View onboarding tutorial  
→ Enter home screen  

---

## 7.2 Buy Existing Practice Program Flow

Open app  
→ Go to Practice Library  
→ Browse free and paid programs  
→ Select a program  
→ View program details  
→ Preview short demo  
→ Pay for the program  
→ Program is added to user account  
→ Download program to app  
→ Start practice  
→ Save to My List  

---

## 7.3 Upload Own Sheet Music Flow

Open app  
→ Go to Upload  
→ Select PDF, JPEG, or PNG  
→ Confirm upload cost  
→ Pay or use credit  
→ Upload file to server  
→ Server stores file  
→ Server starts OMR processing  
→ Server generates MusicXML and MIDI  
→ Server creates practice program  
→ App receives completed program  
→ Program appears in Private Library  
→ User starts practice  

---

## 7.4 Practice Flow

Open practice program  
→ App shows first short section  
→ App plays the section automatically  
→ Virtual keyboard highlights the notes  
→ Virtual hand shows suggested fingers  
→ User practises the same section  
→ App listens through microphone  
→ App detects notes and timing  
→ If correct, user moves to next section  
→ If wrong, app highlights the mistake and repeats the section  
→ User completes all sections  
→ App shows score and progress summary  

---

# 8. Pages and Screens

## 8.1 Authentication Screens

- Welcome screen
- Register screen
- Login screen
- Email verification screen
- Forgot password screen

---

## 8.2 Home Screen

The home screen should show:

- Continue practising
- Recommended programs
- Recently added programs
- User uploaded programs
- Featured paid courses

---

## 8.3 Practice Library Screen

The Practice Library contains Fingora’s native practice programs.

Features:

- Browse programs
- Search programs
- Filter by difficulty
- Filter by style
- Filter by free or paid
- View program details
- Purchase program
- Download program
- Add to My List

---

## 8.4 Program Detail Screen

Displays:

- Program title
- Description
- Difficulty level
- Number of lessons
- Estimated practice time
- Preview video or audio
- Price
- Purchase button
- Add to My List button

---

## 8.5 Upload Screen

Allows users to upload their own music sheets.

Features:

- Select file
- Preview file
- Confirm upload
- Show processing cost
- Start upload
- Show upload progress
- Show processing status

---

## 8.6 Private Library Screen

Contains user-generated practice programs.

Features:

- View uploaded files
- View generated programs
- Open program
- Delete program
- Reprocess failed upload
- Add to My List

---

## 8.7 My List Screen

A personal collection of saved practice content.

Users can save:

- Free programs
- Paid programs
- Uploaded/generated programs
- Favourite courses
- Continue-learning items

Features:

- Open saved item
- Remove saved item
- View progress
- Continue from last practice position

---

## 8.8 Practice Player Screen

This is the core screen of the app.

The screen should include:

- Sheet music viewer
- Current measure highlight
- Current note highlight
- Virtual piano keyboard
- Highlighted active keys
- Fingering numbers
- Virtual hand or finger guide
- Play button
- Pause button
- Slow mode
- Loop section button
- Microphone listening status
- Correct or incorrect feedback
- Progress bar

---

## 8.9 Progress Screen

Displays:

- Total practice time
- Completed programs
- Current learning streak
- Accuracy score
- Recent mistakes
- Best score
- Last practised date

---

## 8.10 Settings Screen

Includes:

- Account details
- Payment history
- Downloaded programs
- Storage management
- Microphone permission
- Notification settings
- Logout

---

# 9. Data Models

## 9.1 User

```json
{
  "userId": "string",
  "email": "string",
  "displayName": "string",
  "createdAt": "datetime",
  "subscriptionStatus": "free | paid",
  "creditBalance": "number"
}