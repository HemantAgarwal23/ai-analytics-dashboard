import { Sun, Moon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <div className="bg-gray-900 dark:bg-gray-800 text-white p-4 shadow flex justify-between items-center">
      <h1 className="text-xl font-bold">AI Analytics Dashboard</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </div>
  );
}
