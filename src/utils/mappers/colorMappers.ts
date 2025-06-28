import type { ColorAPIColor, Palette } from "../../types/theme";

export function mapColorsToPalette(colors: ColorAPIColor[]): Palette {
    
    return {
        primary: colors[0] || { hex: { value: "#000000" }, contrast: { value: "#FFFFFF" } },
        secondary: colors[5] || { hex: { value: "#000000" }, contrast: { value: "#FFFFFF" } },
        accent: colors[8] || { hex: { value: "#000000" }, contrast: { value: "#FFFFFF" } },
        background: colors[12] || { hex: { value: "#000000" }, contrast: { value: "#FFFFFF" } },
    };
}
