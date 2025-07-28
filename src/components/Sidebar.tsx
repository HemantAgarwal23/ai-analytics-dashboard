// Sidebar.tsx

interface SidebarProps {
  darkMode: boolean;
}

export default function Sidebar({ darkMode }: SidebarProps) {
  return (
    <div
      className={`p-4 min-h-screen shadow-lg ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="font-semibold text-lg mb-2 flex items-center gap-2">
        <span>📊</span>
        Dashboard
      </div>
      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        Settings (coming soon)
      </p>
    </div>
  );
}
