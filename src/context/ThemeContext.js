import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState("light");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark("dark");
    } else {
      setDark("light");
    }
  }, []);

  useEffect(() => {
    if (dark === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
