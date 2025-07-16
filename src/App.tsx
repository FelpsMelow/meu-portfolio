import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { getColorScheme } from "./services/colorApi";
import type { Palette } from "./types/theme";
import { SiteTemplate } from "./components/templates/site/Site";
import { Home } from './pages/home/Home';
import { About } from "./pages/about/About";
import { ConfigTheme } from "./components/organisms/configTheme/ConfigTheme";
import { mapColorsToPalette } from "./utils/mappers/colorMappers";
import { Portfolio } from "./pages/portfolio/Portfolio";

export default function App() {

  const [paleta, setPaleta] = useState<Palette | undefined>(undefined);
  
  useEffect(() => {
    getColorScheme('4ed4e4').then((res) => {
      // TODO - Fazer uma mapper
      setPaleta(mapColorsToPalette(res))
    });
    console.log('Tema carregado')
  }, []);
  
  if (!paleta) return <p>Carregando tema...</p>;

  return (

    <ThemeProvider paleta={paleta}>
      <Router>
        <Routes>
          <Route path="/" element={
            <SiteTemplate>
                <ConfigTheme/>
                <Home />
                <About />
                <Portfolio/>
              </SiteTemplate>
          }/>
          <Route path="/projeto" element={'teste'} />
          <Route path="*" element={<div><h1>404</h1></div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
