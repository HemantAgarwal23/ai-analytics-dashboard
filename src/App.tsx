import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Router>
        <header className="p-4 flex justify-between items-center shadow-md">
          <h1 className="text-xl font-bold">AI Analytics Dashboard</h1>
          <DarkModeToggle />
        </header>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
