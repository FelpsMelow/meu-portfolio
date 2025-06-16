import { HeaderNavigation } from "../../molecules/headerNavigation/HeaderNavigation"
import { Button } from '../../atoms/button/Button';
import { Logo } from "../../molecules/Logo/Logo";
import { NavItem } from '../../atoms/navItem/NavItem';
import './Header.scss'

export const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <HeaderNavigation></HeaderNavigation>
            <Button variant="secondary">
                <NavItem href="/public/curriculo.pdf" download='FelipeMelo-CV.pdf'>
                    Baixar CV
                </NavItem>
            </Button>
        </header>
    )
}