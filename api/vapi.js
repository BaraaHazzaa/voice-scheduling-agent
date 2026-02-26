export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const body = req.body;

  console.log("Vapi webhook received:", body);

  // Handle tool calls
  if (body.message?.type === "tool-calls") {
    const toolCall = body.message.toolCallList[0];
    const args = toolCall.function.arguments;

    const { title, start_time, end_time, description } = args;

    // TODO: Call Google Calendar here

    return res.status(200).json({
      results: [
        {
          toolCallId: toolCall.id,
          result: "✅ Appointment scheduled successfully."
        }
      ]
    });
  }

  return res.status(200).json({ ok: true });
}