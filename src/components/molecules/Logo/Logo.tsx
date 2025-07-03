import { useTheme } from "../../../hooks/usetheme"
import { scrollToSection } from "../../../utils/scrollToSection"
import './Logo.scss'

export const Logo = () => {

    const { paletaSelecionada } = useTheme()

    return (
        <div className="logo-text" onClick={() => scrollToSection('home')}>
            <span
                className="logo-title"
                style={{
                    color: paletaSelecionada.background.contrast.value
                }}
            >
                FELIPE MELO
            </span>
            <br />
            <span
                className="logo-subtitle"
                style={{
                    color: paletaSelecionada.background.contrast.value
                }}
            >
                FULL-STACK DEVELOPER
            </span>
        </div>
    )
}