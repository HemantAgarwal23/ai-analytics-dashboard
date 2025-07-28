import { useEffect, useState } from "react";
import { getInsightsFromOpenAI } from "../utils/aiHelper";

interface AIInsightsProps {
  darkMode: boolean;
}

export default function AIInsights({ darkMode }: AIInsightsProps) {
  const [insight, setInsight] = useState("Loading...");

  useEffect(() => {
    async function fetchInsights() {
      const dummyData = {
        revenue: [200, 450, 300, 500, 700],
        months: ["Jan", "Feb", "Mar", "Apr", "May"]
      };
      const result = await getInsightsFromOpenAI(dummyData);
      setInsight(result);
    }
    fetchInsights();
  }, []);

  return (
    <div
      className={`rounded-2xl shadow p-4 w-full ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">📌 AI Generated Insights</h2>
      <p className="text-sm whitespace-pre-wrap">{insight}</p>
    </div>
  );
}
