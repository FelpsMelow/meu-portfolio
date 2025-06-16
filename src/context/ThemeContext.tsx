import {
  createContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useDynamicTheme } from "../hooks/useDynamicTheme";
import type { ColorAPIColor, DynamicTheme } from "../types/theme";


type ThemeProviderProps = {
  paleta: ColorAPIColor[];
  children: ReactNode;
};

type ThemeContextValue = {
  theme: DynamicTheme;
  selectedColor: string
  setSelectedColor: (color: string) => void
  paletaSelecionada: ColorAPIColor[];
  setPaletaSelecionada: (paleta: ColorAPIColor[]) => void;
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ paleta, children }: ThemeProviderProps) {

  const [selectedColor, setSelectedColor] = useState<string>('4ed4e4')
  const [paletaSelecionada, setPaletaSelecionada] = useState<ColorAPIColor[]>(paleta);
  const [isLoading, setIsLoading] = useState(false);

  const theme = useDynamicTheme(paletaSelecionada);

  const value = useMemo(
    () => ({
      theme,
      selectedColor,
      setSelectedColor,
      paletaSelecionada,
      setPaletaSelecionada,
      isLoading,
      setIsLoading,
    }),
    [theme, selectedColor, paletaSelecionada, isLoading]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;
