# 🎙️ Voice Scheduling Agent - Wellness Partners

A production-ready voice assistant for scheduling appointments, built for the AI Engineer assignment. Features a custom web interface, real-time voice orchestration, and native Google Calendar integration.

## 🌐 Live Application
**Web App:** [https://voice-scheduling-agent-rfl1mqs1o-baraahazzaas-projects.vercel.app/](https://voice-scheduling-agent-rfl1mqs1o-baraahazzaas-projects.vercel.app/)
*(Click "Start Call" to speak with Riley)*

## 🚀 How to Test the Agent
1. **Open the Live URL** above.
2. **Click "Start Call"** and grant microphone permissions.
3. **Talk to Riley:**
   - Provide your name when asked.
   - Request a time (e.g., "Can I book for next Tuesday at 2 PM?").
   - Confirm the details when Riley summarizes the appointment.
4. **Verification:** Riley will use the `google_calendar_check_availability_tool` to ensure no conflicts exist before using `google_calendar_tool` to finalize the booking.

## ✅ Assignment Requirements
- [x] **Initiates Conversation:** Custom web interface triggers the agent using VAPI Web SDK.
- [x] **Collects Details:** Captures Name, Date/Time, and Meeting Title one-by-one.
- [x] **Confirms Details:** Mandatory explicit confirmation loop before any API action.
- [x] **Creates Event:** Real-time Google Calendar event creation via Native VAPI Integration.
- [x] **Deployed:** Hosted on Vercel (Frontend/API) + VAPI Cloud (Voice Orchestration).

## 🛠️ Tech Stack
- **Frontend:** HTML5 + VAPI Web SDK (Deployed on Vercel)
- **Voice Orchestrator:** VAPI (STT, LLM, TTS)
- **LLM:** OpenAI GPT-4o
- **Calendar:** Native Google Calendar API Integration

## 🗓️ Calendar Integration
- **Mechanism:** Utilizes VAPI's native tool-calling schema to interact directly with the Google Calendar API.
- **Availability:** Implements `google_calendar_check_availability_tool` to provide real-time conflict detection during the call.
- **Reliability:** Uses ISO 8601 formatting and dynamic date injection (`{{now}}`) to ensure accuracy across years and timezones.

## 🧠 Engineering Decisions
### Why Check Availability?
To prevent **double-booking**, a critical failure in scheduling agents. 
1. **Data Integrity:** Prevents accidental calendar conflicts.
2. **User Trust:** Demonstrates the agent has actual "knowledge" of the calendar state.

### Fallback Safety
If the availability tool fails, the agent is instructed to ask the user if they wish to proceed anyway, ensuring the user is never blocked by a transient API error.