import React, { useEffect, useState, createContext, useContext } from "react";

// Create a context for dark mode
const DarkModeContext = createContext();


export const DarkModeProvider = ({ children }) => {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

 
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Toggle dark mode 
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
