import axios from "axios";
import type { ColorAPIColor } from "../types/theme";

type ColorSchemeResponse = {
  mode: string;
  count: string;
  colors: ColorAPIColor[];
  seed: unknown;
  image: unknown;
};

export async function getColorScheme(
  hex: string,
  mode: string = "analogic",
  count: number = 14
): Promise<ColorAPIColor[]> {
  const url = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=${count}`;

  try {
    const response = await axios.get<ColorSchemeResponse>(url);
    console.log(response)
    return response.data.colors;
  } catch (error) {
    console.error("Erro ao buscar paleta de cores:", error);
    return [];
  }
}
