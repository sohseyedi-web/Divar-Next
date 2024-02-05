import { createContext, useContext } from "react";
import { ResponsiveProvider } from "./ResponsiveContext";
import { ThemeProvider } from "./ThemeContext";

const DivarContext = createContext();

export function DivarProvider({ children }) {
  return (
    <DivarContext.Provider>
      <ThemeProvider>
        <ResponsiveProvider>{children}</ResponsiveProvider>
      </ThemeProvider>
    </DivarContext.Provider>
  );
}

export const useDivar = () => useContext(DivarContext);
