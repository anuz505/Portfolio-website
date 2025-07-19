import React from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { Sun, Moon } from "lucide-react";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
      }`}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun size={20} className="transition-transform duration-300 rotate-0" />
      ) : (
        <Moon
          size={20}
          className="transition-transform duration-300 rotate-0"
        />
      )}
    </button>
  );
};

export default DarkModeToggle;
