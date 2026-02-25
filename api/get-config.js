export default function handler(req, res) {
  res.status(200).json({
    publicKey: process.env.VAPI_PUBLIC_KEY,
    agentId: process.env.VAPI_AGENT_ID
  });
}