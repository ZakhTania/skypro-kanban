import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext(null);
export default function Theme({ children }) {
  const lightTheme = {
    body: "rgb(234, 238, 246)",
    head: "#ffffff",
    text: "#000000",
    border: "#D4DBE5",
    _orange: {
      background: "#ffe4c2",
      color: "#ff6d00",
    },
    _green: {
      background: "#b4fdd1",
      color: "#06B16E",
    },
    _purple: {
      background: "#e9d4ff",
      color: "#9A48F1",
    },
    _gray: {
      background: "#94a6be",
      color: "#FFFFFF",
    },
  };

  const darkTheme = {
    body: "#151419",
    head: "#20202C",
    text: "#ffffff",
    border: "#4E5566",
    _orange: {
      background: "#ff6d00",
      color: "#ffe4c2",
    },
    _green: {
      background: "#06B16E",
      color: "#b4fdd1",
    },
    _purple: {
      background: "#9A48F1",
      color: "#e9d4ff",
    },
    _gray: {
      background: "#94a6be",
      color: "#151419",
    },
  };
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme(localStorage.getItem("theme"));
    } else {
      localStorage.setItem("theme", "light");
      setTheme(localStorage.getItem("theme"));
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
