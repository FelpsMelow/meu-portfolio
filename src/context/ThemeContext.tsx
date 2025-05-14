import { createContext, useContext, type ReactNode } from "react";
import { useDynamicTheme } from "../hooks/useDynamicTheme";
// TODO - Separar os types e importalos nos scripts
import type { ColorAPIColor, DynamicTheme } from "../types/theme-types";

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

export const useTheme = (): DynamicTheme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
