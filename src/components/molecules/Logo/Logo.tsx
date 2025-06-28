import { NavItem } from "../../atoms/navItem/NavItem"
import { useTheme } from "../../../hooks/usetheme"
import './Logo.scss'

export const Logo = () => {

    const { paletaSelecionada } = useTheme()

    return (
        <NavItem href="#home">
            <div className="logo-text">
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
        </NavItem>
    )
}