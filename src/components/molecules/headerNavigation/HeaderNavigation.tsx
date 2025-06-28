import { Button } from '../../atoms/button/Button';
import { links } from '../../../constants/navigationLinks';
import { scrollToSection } from '../../../utils/scrollToSection';
import './HeaderNavigation.scss'
import { useTheme } from '../../../hooks/usetheme';

export const HeaderNavigation = () => {

    const { paletaSelecionada } = useTheme()

    return (
        <nav className="header-navigation">
            {
                links.map((link, index) => (
                    <div className='container-button'>
                        <Button onClick={() => scrollToSection(link.href)} key={index}>
                            {link.name}
                        </Button>
                        <div
                            className='divider'
                            style={{ background: paletaSelecionada.background.hex.value }}
                        />
                    </div>
                ))
            }
        </nav>
    )
}