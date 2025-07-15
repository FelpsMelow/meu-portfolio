import { useState } from 'react'
import { useTheme } from '../../../hooks/usetheme'
import { mapColorsToPalette } from '../../../utils/mappers/colorMappers';
import { getColorScheme } from '../../../services/colorApi'
import { ThemeColorPicker } from '../colorPicker/ColorPicker'
import { Button } from '../../atoms/button/Button';
import './ConfigTheme.scss'
import { ConfigIcon } from '../../atoms/icons/configIcon';

export const ConfigTheme = () => {

    const {setSelectedColor, setPaletaSelecionada, paletaSelecionada} = useTheme()
    const [color, setColor] = useState<string>('');
    const [isColapse, setIsColapse] = useState(true)
    
    function handleColorPicker(newColor: string) {
        setSelectedColor(newColor)
        getColorScheme(newColor).then( (res) => {setPaletaSelecionada(mapColorsToPalette(res))})
    }

    return (
        <div className="container-config-theme">
            <header
                className={`header-config-theme ${isColapse && "header-config-theme-colapse"}`}
                style={{
                    background: paletaSelecionada.secondary.hex.value,
                    color: paletaSelecionada.background.contrast.value
                }}
            >
                <div className="container-header-icon">
                    <div className='container-config-icon'>
                        <ConfigIcon onClick={() => setIsColapse(!isColapse)}/>
                    </div>
                </div>
                <hr 
                    style={{
                        border: `solid 1.5px ${paletaSelecionada.background.hex.value}`
                    }}
                />
                <div 
                    className={`header-text ${isColapse && 'header-text-colapse'}`}
                >
                    <h2>
                        {/* TODO - Trocar por um átomo de heading */}
                        Escolha uma cor
                    </h2>
                </div>
            </header>
            <div 
                className={`config-theme-color-picker ${isColapse && 'config-theme-color-picker-colapse'}`}
                style={{
                    background: paletaSelecionada.secondary.hex.value
                }}
            >
                <ThemeColorPicker onChange={setColor}/>
                <Button className='btn-config-theme' onClick={() => handleColorPicker(color)} variant='background'>
                    Aplicar cor
                </Button>
            </div>
        </div>
    )
}