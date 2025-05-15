import { ThemeProvider } from "./context/ThemeContext"
import { getColorScheme } from "./services/colorApi"
import { useEffect, useState } from "react"
import { Button } from "./components/atoms/button"
import type { ColorAPIColor } from "./types/theme-types"

export default function App() {
  const [paleta, setPaleta] = useState<ColorAPIColor[]>([])

  useEffect(() => {
    getColorScheme("72e34dd").then(setPaleta)
  }, [])

  if (!paleta.length) return <p>Carregando tema...</p>

  return (
    <ThemeProvider paleta={paleta}>
      <Button>
        teste de botão
      </Button>
    </ThemeProvider>
  )
}
