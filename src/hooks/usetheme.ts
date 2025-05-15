import { useContext } from "react";
import type { DynamicTheme } from "../types/theme-types";
import ThemeContext from "../context/ThemeContext";

export const useTheme = (): DynamicTheme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
