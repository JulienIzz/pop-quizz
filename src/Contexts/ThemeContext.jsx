import React, { useState } from "react";
import { THEME_COLORFUL, Theme_Colorful } from "../colors";

export const ThemeContext = React.createContext();

export const ThemeContextComp = ({ children }) => {
  const [theme, setTheme] = useState(THEME_COLORFUL);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
