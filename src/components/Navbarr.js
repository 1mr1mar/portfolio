import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "boxicons";

const Navbar = ({ darkMode, toggleDarkMode, activeSection }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 
      ${darkMode ? "bg-gray-800" : "bg-white"} 
      ${isScrolled ? "shadow-lg bg-opacity-90 backdrop-blur-md" : "shadow-md"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">
            <span className="text-blue-500">Mar</span>Portfolio
          </div>

          
          <div className="hidden md:flex space-x-6 items-center justify-end w-full">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize transition-colors hover:text-blue-500 ${
                  activeSection === item ? "text-blue-500" : ""
                }`}
              >
                {t(item)}
              </a>
            ))}

            
            <button
              onClick={changeLanguage}
              className="ml-6 p-2 rounded-full text-xl"
            >
              <box-icon
                name={i18n.language === "en" ? "flag-alt" : "flag"}
                type="solid"
                color={darkMode ? "white" : "black"}
              ></box-icon>
            </button>

            
            <button onClick={toggleDarkMode} className="ml-6 p-2 rounded-full">
              {darkMode ? "🌞" : "🌙"}
            </button>
          </div>

          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`py-4 px-2 space-y-3 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              {["home", "about", "projects", "skills", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`block capitalize py-2 px-4 transition-colors ${
                    activeSection === item ? "text-blue-500" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item)}
                </a>
              ))}

              
              <button
                onClick={changeLanguage}
                className="block w-full text-left py-2 px-4 flex items-center gap-2"
              >
                <box-icon
                  name={i18n.language === "en" ? "flag-alt" : "flag"}
                  type="solid"
                  color={darkMode ? "white" : "black"}
                ></box-icon>
                {i18n.language === "en" ? "Français" : "English"}
              </button>


              <button onClick={toggleDarkMode} className="block w-full text-left py-2 px-4">
                {darkMode ? t("light_mode") : t("dark_mode")}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
