import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { getColorScheme } from "./services/colorApi";
import type { ColorAPIColor } from "./types/theme";
import { SiteTemplate } from "./components/templates/site/Site";
import { Home } from './pages/home/Home';
import { About } from "./pages/about/About";
import { ConfigTheme } from "./components/organisms/configTheme/ConfigTheme";

export default function App() {

  const [paleta, setPaleta] = useState<ColorAPIColor[]>([]);
  
  useEffect(() => {
    getColorScheme('4ed4e4').then(setPaleta);
    console.log('Tema carregado')
  }, []);
  
  if (!paleta.length) return <p>Carregando tema...</p>;

  return (
    <ThemeProvider paleta={paleta}>
      <SiteTemplate>
        <ConfigTheme/>
        <Home />
        <About />
      </SiteTemplate>
    </ThemeProvider>
  );
}
