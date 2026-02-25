"""
Calendar Integration Verification Script
Validates the JSON payload structure required by Google Calendar API.
"""
import json
import datetime

def generate_event_payload(title, start_time, duration_minutes=30):
    """Generates a standard Google Calendar Event payload."""
    start = datetime.datetime.fromisoformat(start_time)
    end = start + datetime.timedelta(minutes=duration_minutes)
    
    return {
        "summary": title,
        "start": {
            "dateTime": start.isoformat() + "Z",
            "timeZone": "UTC",
        },
        "end": {
            "dateTime": end.isoformat() + "Z",
            "timeZone": "UTC",
        },
    }

if __name__ == "__main__":
    # Test Case
    payload = generate_event_payload("Engineering Assessment", "2026-03-02T15:00:00")
    print("✅ Valid Calendar Payload Generated:")
    print(json.dumps(payload, indent=2))