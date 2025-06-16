// TODO - Deixar estilo dinamico com o meu tema

import { NavItem } from "../../atoms/navItem/NavItem"

export const Logo = () => {
    return (
        <NavItem href="#home">
            <div className="logo__text">
                <span className="logo__title">FELIPE MELO</span>
                <br />
                <span className="logo__subtitle">FULL-STACK DEVELOPER</span>
            </div>
        </NavItem>
    )
}