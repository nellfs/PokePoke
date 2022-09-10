import React, { createContext, ReactNode, useCallback, useState } from "react";
import { DefaultTheme } from "styled-components";
import dark from "../styles/themes/dark";

import light from "../styles/themes/light";

export interface IThemeContextData {
  theme: DefaultTheme;
  toggleTheme(): void;
}

export const ThemeContext = createContext<IThemeContextData>({theme: light, toggleTheme: () => {}});

export const CustomThemeProvider = (children: ReactNode) => {
  const [theme, setTheme] = useState<DefaultTheme>(light); //Using light as default

  const toggleTheme = useCallback(() => {
    setTheme(theme === light ? dark : light);
  }, [theme]);

  return (
  );
};
