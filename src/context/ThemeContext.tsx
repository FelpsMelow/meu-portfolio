import {
  createContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Palette } from "../types/theme";


type ThemeProviderProps = {
  paleta: Palette;
  children: ReactNode;
};

type ThemeContextValue = {
  selectedColor: string
  setSelectedColor: (color: string) => void
  paletaSelecionada: Palette;
  setPaletaSelecionada: (paleta: Palette) => void;
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ paleta, children }: ThemeProviderProps) {

  const [selectedColor, setSelectedColor] = useState<string>('4ed4e4')
  const [paletaSelecionada, setPaletaSelecionada] = useState<Palette>(paleta);
  const [isLoading, setIsLoading] = useState(false);


  const value = useMemo(
    () => ({
      selectedColor,
      setSelectedColor,
      paletaSelecionada,
      setPaletaSelecionada,
      isLoading,
      setIsLoading,
    }),
    [selectedColor, paletaSelecionada, isLoading]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;
