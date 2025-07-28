import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import KPIWidget from "../components/KPIWidget";
import ChartPanel from "../components/ChartPanel";
import AIInsights from "../components/AIInsights";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
        <div className="w-1/5 bg-white dark:bg-gray-950 shadow-md">
          <Sidebar darkMode={darkMode} />
        </div>
        <div className="flex-1 flex flex-col">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <KPIWidget title="Total Users" value="1,234" />
            <KPIWidget title="Monthly Revenue" value="$23,000" />
            <ChartPanel darkMode={darkMode} />
            <AIInsights darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}