import { createContext, type ReactNode } from "react";
import { useDynamicTheme } from "../hooks/useDynamicTheme";
import type { ColorAPIColor, DynamicTheme } from "../types/theme";

const ThemeContext = createContext<DynamicTheme | null>(null);

type ThemeProviderProps = {
  paleta: ColorAPIColor[];
  children: ReactNode;
};

export function ThemeProvider({ paleta, children }: ThemeProviderProps) {
  const theme = useDynamicTheme(paleta);
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;
