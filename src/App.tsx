import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { getColorScheme } from "./services/colorApi";
import { Button } from "./components/atoms/button";
import { AvatarPlayCard } from "./components/molecules/AvatarPlayCard/AvatarPlayCard";
import { Header } from "./components/organisms/header/Header";
import type { ColorAPIColor } from "./types/theme";

export default function App() {
  const [paleta, setPaleta] = useState<ColorAPIColor[]>([]);

  const avatarImg = "/images/Group 96.png";

  useEffect(() => {
    getColorScheme("74323ad").then(setPaleta);
  }, []);

  if (!paleta.length) return <p>Carregando tema...</p>;

  return (
    <ThemeProvider paleta={paleta}>
      <Header></Header>
      <Button>teste de botão</Button>
      <AvatarPlayCard perfilImg={avatarImg}></AvatarPlayCard>
    </ThemeProvider>
  );
}
