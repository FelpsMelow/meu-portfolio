// TODO - Mudar paraum nome que faça mais sentido
export type Theme = {
  theme: 'monochrome-light' | 'monochrome-dark' | 'analogic'
}

export type ColorAPIColor = {
  hex: { value: string }
  contrast: { value: string }
}

// TODO - Preciso revisar isso (deixar mais parecido com uma estrutura de paleta de cores)
export type Palette = {
  background: ColorAPIColor
  primary: ColorAPIColor
  secondary: ColorAPIColor
  accent: ColorAPIColor
}
