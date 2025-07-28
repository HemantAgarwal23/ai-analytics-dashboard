export async function getInsightsFromOpenAI(data: object): Promise<string> {
  const prompt = `Summarize this business data:\n${JSON.stringify(data)}`;
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5
    })
  });

  const json = await res.json();
  return json.choices?.[0]?.message?.content || "No insight generated.";
}
