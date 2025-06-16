import { useTheme } from "../../../hooks/usetheme"
import './Dot.scss'

type DotProps = {
    key: number
}


export const Dot = ({key}: DotProps) => {
    const { theme } = useTheme()
    return (
        <div className="dot" key={key} style={{background: theme.secondary}}/>
    )
}