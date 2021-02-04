import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme-context";
import "../styles/ThemeContainer.css";

export default function ThemeContainer(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const mode = isDarkMode ? "dark" : "light";
  return <div className={`App  ${mode}`}>{props.children}</div>;
}
