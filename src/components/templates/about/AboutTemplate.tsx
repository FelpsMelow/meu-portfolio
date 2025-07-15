import { TECH_ICONS } from '../../../constants/icons';
import { useTheme } from '../../../hooks/usetheme'
import { scrollToSection } from '../../../utils/scrollToSection';
import { Button } from '../../atoms/button'
import { Heading } from '../../atoms/heading/Heading'
import { Paragraph } from '../../atoms/paragraph/Paragraph';
import { SectionTag } from '../../atoms/sectionTag/sectionTag';
import { DotMatrixPattern } from '../../molecules/dotMatrixPattern/DotMatrixPattern';
import { TechCarousel } from '../../organisms/techCarousel/TechCarousel';
import './AboutTemplate.scss'

export const AboutTemplate = () => {
    const  { paletaSelecionada } = useTheme()
    return (
        <div 
            className="about-template"
            style={{backgroundImage: `linear-gradient(45deg, ${paletaSelecionada.background.hex.value}, ${paletaSelecionada.primary.hex.value})`}}
        >
            <section className='presentation'>
                <div className='presentation-text'>
                    <SectionTag>
                        Sobre mim
                    </SectionTag>
                    <Heading level={2}>
                        Por que me contratar para o seu próximo projeto?
                    </Heading>
                    <>
                        <Paragraph>
                            Sou Desenvolvedor Fullstack e Arquiteto de Soluções com experiência em <strong>desenvolvimento web</strong>, <strong>automação de processos (RPA)</strong> e <strong>integrações de sistemas</strong>. Tenho me dedicado a criar aplicações que sejam práticas, bem estruturadas e que realmente ajudem a resolver problemas do dia a dia.
                        </Paragraph>


                        <Paragraph>
                            Gosto de entender o contexto do projeto, conversar com as pessoas envolvidas e buscar soluções que façam sentido tanto tecnicamente quanto para o negócio. Procuro sempre manter o código organizado, o design limpo e a comunicação clara durante todo o processo.
                        </Paragraph>
                    </>

                    <TechCarousel techIcons={TECH_ICONS}></TechCarousel>
                    <Button variant='secondary' onClick={() => scrollToSection('portfolio')}>
                        Ver projetos
                    </Button>
                </div>
                <div className='presentation-img'>
                    <img src="/images/IMG_5255.jpg" alt="imagem de um homem pensativo" />
                    <div className='container-dot-matrix'>
                        <DotMatrixPattern columns={3} rows={15}></DotMatrixPattern>
                    </div>
                </div>
            </section>
        </div>
    )
}