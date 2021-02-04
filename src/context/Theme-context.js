import React, { createContext } from "react";
import useToggle from "../hookes/useToggle";

export const ThemeContext = createContext();
export function ThemeProvider(props) {
  const [isDarkMode, changeMode] = useToggle("theme", true);

  return (
    <ThemeContext.Provider value={{ isDarkMode, changeMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
