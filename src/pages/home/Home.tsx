import { HomeTemplate } from '../../components/templates/home/HomeTemplate'
import { useTheme } from '../../hooks/usetheme'
import { ColorPaletteViewer } from '../../utils/devTools/ColorPaletteViewer'
import './Home.scss'

export const Home = () => {

    const theme = useTheme()

    return (
        <section id="home" className="home">
            <>
                {/* TODO - Exibir isso sõ quando estiver em dev. */}
                <ColorPaletteViewer theme={theme.theme}/>
                <HomeTemplate></HomeTemplate>
            </>
        </section>
    )
}