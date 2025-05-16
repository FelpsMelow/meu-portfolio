import { NavItem } from '../../atoms/navItem/NavItem';
import { Button } from '../../atoms/button/Button';
import { links } from '../../../constants/navigationLinks';
import './HeaderNavigation.scss'

export const HeaderNavigation = () => {

    return (
        <nav className="header-navigation">

            {
                links.map((link, index) => (
                    <NavItem href={`#${link.href}`} key={index}>
                        <Button>
                            {link.name}
                        </Button>
                    </NavItem>
                ))
            }
        </nav>
    )
}