import { useState } from "react";

export const useDarkTheme = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return { darkTheme, toggleTheme };
};
