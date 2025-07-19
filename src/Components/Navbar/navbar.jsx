import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useDarkMode } from "../../contexts/DarkModeContext";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useDarkMode();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <nav
      className={`shadow-lg fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
      style={{
        fontFamily: "Futura, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full">
        <div className="flex justify-between items-center h-16 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold cursor-pointer transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
              onClick={() => scrollToSection("Home")}
            >
              Anuj
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className={`px-3 py-2 text-sm lg:text-base font-light transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("works")}
                className={`px-3 py-2 text-sm lg:text-base font-light transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Works
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className={`px-3 py-2 text-sm lg:text-base font-light transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Contacts
              </button>
              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile menu button and dark mode toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={toggleMenu}
              className={`focus:outline-none transition-colors duration-300 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors duration-300 ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-gray-50 border-gray-200"
          }`}
        >
          <button
            onClick={() => scrollToSection("about")}
            className={`block px-3 py-2 text-base font-light w-full text-left transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("works")}
            className={`block px-3 py-2 text-base font-light w-full text-left transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Works
          </button>
          <button
            onClick={() => scrollToSection("contacts")}
            className={`block px-3 py-2 text-base font-light w-full text-left transition-colors duration-300 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Contacts
          </button>
        </div>
      </div>
    </nav>
  );
}
