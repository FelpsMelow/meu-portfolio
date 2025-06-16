import { useMemo } from "react";
import type { ColorAPIColor, DynamicTheme } from "../types/theme";

function getHueDistance(h1: number, h2: number): number {
  const d = Math.abs(h1 - h2);
  return d > 180 ? 360 - d : d;
}

export function useDynamicTheme(paleta: ColorAPIColor[]): DynamicTheme {
  return useMemo(() => {
    if (paleta.length < 4) {
      return {
        background: "#ffffff",
        text: "#000000",
        primary: "#000000",
        secondary: "#444444",
        accent: "#ff0000",
      };
    }

    const used = new Set<string>();

    // 1. Fundo claro
    const background = [...paleta].sort((a, b) => b.hsl.l - a.hsl.l)[0];
    used.add(background.hex.value);

    // 2. Primária: saturada, diferente do fundo
    const primary = paleta
      .filter(
        (c) =>
          !used.has(c.hex.value) &&
          c.hsl.s > 0.5 &&
          getHueDistance(c.hsl.h, background.hsl.h) > 30
      )
      .sort((a, b) => b.hsl.s - a.hsl.s)[0];
    if (primary) used.add(primary.hex.value);

    // 3. Secundária: matiz diferente da primária (60°+)
    const secondary = paleta
      .filter(
        (c) =>
          !used.has(c.hex.value) &&
          primary &&
          getHueDistance(c.hsl.h, primary.hsl.h) >= 60
      )
      .sort((a, b) => b.hsl.l - a.hsl.l)[0];
    if (secondary) used.add(secondary.hex.value);

    // 4. Accent: mais distante possível de tudo
    const accent = paleta
      .filter((c) => !used.has(c.hex.value))
      .map((c) => {
        const hueDistances = [
          getHueDistance(c.hsl.h, background.hsl.h),
          primary ? getHueDistance(c.hsl.h, primary.hsl.h) : 0,
          secondary ? getHueDistance(c.hsl.h, secondary.hsl.h) : 0,
        ];
        return {
          cor: c,
          minDist: Math.min(...hueDistances),
        };
      })
      .sort((a, b) => b.minDist - a.minDist)[0]?.cor;
    if (accent) used.add(accent.hex.value);

    return {
      background: background.hex.value,
      text: background.contrast.value,
      primary: primary?.hex.value ?? "#000000",
      secondary: secondary?.hex.value ?? primary?.hex.value ?? "#444444",
      accent: accent?.hex.value ?? secondary?.hex.value ?? "#ff0000",
    };
  }, [paleta]);
}
