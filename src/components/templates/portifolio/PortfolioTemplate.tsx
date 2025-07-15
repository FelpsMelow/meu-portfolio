import { useTheme } from '../../../hooks/usetheme'
import { ProjectCard } from '../../organisms/projectCard/ProjectCard'
import { SectionTag } from '../../atoms/sectionTag/sectionTag';
import img from '../../../../public/images/Nossos serviços - mobile.svg'
import './PortfolioTemplate.scss'
import { Paragraph } from '../../atoms/paragraph/Paragraph';
import { DotMatrixPattern } from '../../molecules/dotMatrixPattern/DotMatrixPattern';

export const PortfolioTemplate = () => {

    const { paletaSelecionada } = useTheme()

    return (
        <div
            className='portfolio-template'
            style={{backgroundImage: `linear-gradient(135deg, ${paletaSelecionada.background.hex.value}, ${paletaSelecionada.primary.hex.value})`}}
        >
            <SectionTag>
                Meu portfólio
            </SectionTag>
            <section className='potfolio-presentation'>
                <Paragraph>
                    Aqui você encontra projetos que representam minha forma de pensar, desenvolver e entregar soluções.
                    Cada página, componente e funcionalidade foi construída com atenção aos detalhes, foco em performance e experiência do usuário
                    <br />
                    Mais do que código, esse portfólio reflete minha capacidade de transformar ideias em produtos funcionais, escaláveis e prontos para o mercado.
                </Paragraph>
            </section>
            <section className='project-cards'>
                <div className='left'>
                    <ProjectCard imageUrl={img} title='Portal de gestão'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum fuga labore hic excepturi quas voluptas dolorum recusandae deleniti consequuntur optio.
                    </ProjectCard>
                    <ProjectCard imageUrl={img} title='Portal de gestão'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum fuga labore hic excepturi quas voluptas dolorum recusandae deleniti consequuntur optio.
                    </ProjectCard>
                </div>
                <div className='right'>
                    <ProjectCard imageUrl={img} title='Portal de gestão'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum fuga labore hic excepturi quas voluptas dolorum recusandae deleniti consequuntur optio.
                    </ProjectCard>
                    <ProjectCard imageUrl={img} title='Portal de gestão'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum fuga labore hic excepturi quas voluptas dolorum recusandae deleniti consequuntur optio.
                    </ProjectCard>
                </div>
                <div className='container-dot-matrix'>
                    <DotMatrixPattern columns={3} rows={15}></DotMatrixPattern>
                </div>
            </section>
        </div>
    )
}