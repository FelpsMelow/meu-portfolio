import { useTheme } from '../../../hooks/usetheme'
import { ProjectCard } from '../../organisms/projectCard/ProjectCard'
import './PortfolioTemplate.scss'

export const PortfolioTemplate = () => {

    const { paletaSelecionada } = useTheme()

    return (
        <div
            className='portfolio-template'
            style={{backgroundImage: `linear-gradient(135deg, ${paletaSelecionada.background.hex.value}, ${paletaSelecionada.primary.hex.value})`}}
        >
            <ProjectCard name='teste' role='teste da role' image='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg'></ProjectCard>
        </div>
    )
}