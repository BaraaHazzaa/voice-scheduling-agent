# 🎙️ Voice Scheduling Agent

A production-ready voice assistant for scheduling appointments. Features a custom web interface, real-time voice orchestration, and Google Calendar integration.

## 🌐 Live Application
**Web App:** [https://voice-scheduler-assessment.vercel.app](https://your-vercel-url.vercel.app)  
*(Click "Start Call" to speak with Riley)*

## ✅ Assignment Requirements
- [x] **Initiates Conversation:** Custom web interface triggers the agent.
- [x] **Collects Details:** Name, Date/Time, Meeting Title.
- [x] **Confirms Details:** Explicit confirmation loop before booking.
- [x] **Creates Event:** Real Google Calendar event via API.
- [x] **Deployed:** Hosted on Vercel + VAPI Cloud.

## 🛠️ Tech Stack
- **Frontend:** HTML5 + VAPI Web SDK (Deployed on Vercel)
- **Voice Orchestrator:** VAPI (STT, LLM, TTS)
- **LLM:** OpenAI GPT-4o-mini
- **Calendar:** Google Calendar API (OAuth 2.0)

## 🗓️ Calendar Integration
- **Auth:** OAuth 2.0 via VAPI Integrations.
- **Verification:** A standalone Python script (`/scripts/verify_calendar.py`) is included to validate API payload structures independently of the voice layer.
- **Logic:** Events are created only after explicit user confirmation to prevent hallucinated bookings.

## 🧠 Engineering Decisions

### Why Check Availability?
Initially, this feature was excluded from the MVP to reduce latency. However, **double-booking is a critical failure mode** for a scheduling agent. After reviewing the user story, I decided to include it because:
1. **Data Integrity:** Prevents accidental calendar conflicts.
2. **User Trust:** Users expect the agent to know their schedule.
3. **Edge Case Handling:** Shows the agent can handle real-world scenarios.

### Risk Mitigation
To prevent tool failures from blocking bookings:
- **Fallback Logic:** If the availability check fails, the agent asks the user if they want to proceed anyway.
- **User Override:** Users can force a booking even if a conflict is detected (e.g., for overlapping meetings).
- **Timeout Handling:** The agent waits max 5 seconds for availability response before proceeding.

## 🎥 Demo
[Insert Loom Link]