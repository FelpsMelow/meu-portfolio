import { useState } from "react";
import ColorPicker from "react-pick-color";
import './ColorPicker.scss'
import { useTheme } from "../../../hooks/usetheme";

type ThemeColorPickerProps = {
  onChange: (hexSemHash: string) => void;
};

export const ThemeColorPicker = ({ onChange }: ThemeColorPickerProps) => {
  const [color, setColor] = useState("#fff");

  const { paletaSelecionada } = useTheme()

  const handleChange = (color: { hex: string }) => {
    setColor(color.hex);
    const hexSemHash = color.hex.replace("#", "");
    onChange(hexSemHash);
  };

  return (
    <div className="container-color-picker">
      <ColorPicker
        color={color}
        onChange={handleChange}
        // TODO - Mudar o tema de acordo com o estado da aplicação
        theme={{
          background: 'transparent',
          inputBackground: paletaSelecionada.background.hex.value,
          borderColor: 'none',
          borderRadius: '0',
          color: 'white',
          width: '320px',
          boxShadow: 'none'
        }}
      />
    </div>
  );
};
