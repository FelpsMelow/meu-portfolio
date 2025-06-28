import { useTheme } from "../../../hooks/usetheme"
import './Dot.scss'

type DotProps = {
    key: number
}


export const Dot = ({key}: DotProps) => {
    const { paletaSelecionada } = useTheme()
    return (
        <div className="dot" key={key} style={{background: paletaSelecionada.accent.hex.value}}/>
    )
}