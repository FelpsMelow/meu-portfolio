export type HSL = {
  h: number
  s: number
  l: number
}

export type ColorAPIColor = {
  hex: { value: string }
  hsl: HSL
  contrast: { value: string }
}

export type DynamicTheme = {
  background: string
  text: string
  primary: string
  secondary: string
  accent: string
}
