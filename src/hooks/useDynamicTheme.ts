import { useMemo } from "react";

type HSL = {
  h: number;
  s: number;
  l: number;
};

type ColorAPIColor = {
  hex: { value: string };
  hsl: HSL;
  contrast: { value: string };
};

type DynamicTheme = {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  accent: string;
};

export function useDynamicTheme(paleta: ColorAPIColor[]): DynamicTheme {
  return useMemo(() => {
    let background: ColorAPIColor | null = null;
    let primary: ColorAPIColor | null = null;
    let secondary: ColorAPIColor | null = null;
    let accent: ColorAPIColor | null = null;

    for (const cor of paleta) {
      const { hsl } = cor;

      // Fundo: maior luminosidade
      if (!background || hsl.l > background.hsl.l) {
        background = cor;
      }

      // Botão principal: média luminosidade + alta saturação
      if (
        !primary ||
        (hsl.s > primary.hsl.s && hsl.l >= 0.35 && hsl.l <= 0.75)
      ) {
        primary = cor;
      }

      // Botão secundário: intermediário
      if (
        !secondary &&
        hsl.l >= 0.4 &&
        hsl.l <= 0.7 &&
        cor.hex.value !== primary?.hex.value
      ) {
        secondary = cor;
      }

      // Destaque: mais saturada
      if (!accent || hsl.s > accent.hsl.s) {
        accent = cor;
      }
    }

    return {
      background: background?.hex.value ?? "#ffffff",
      text: background?.contrast.value ?? "#000000",
      primary: primary?.hex.value ?? "#000000",
      secondary: secondary?.hex.value ?? primary?.hex.value ?? "#444444",
      accent: accent?.hex.value ?? primary?.hex.value ?? "#ff0000",
    };
  }, [paleta]);
}
