import { useTheme } from '../../../hooks/usetheme'
import { Button } from '../../atoms/button'
import { Heading } from '../../atoms/heading/Heading'
import { Paragraph } from '../../atoms/paragraph/Paragraph';
import { DotMatrixPattern } from '../../molecules/dotMatrixPattern/DotMatrixPattern';
import './AboutTemplate.scss'

export const AboutTemplate = () => {
    const  { paletaSelecionada } = useTheme()
    return (
        <div className="about-template" style={{backgroundImage: `linear-gradient(45deg, ${paletaSelecionada.background.hex.value}, ${paletaSelecionada.primary.hex.value})`}}>
            <section className='presentation'>
                <div className='presentation-text'>
                    {/* TODO - Preciso dar outro nome para essa parte do meu portifólio, pois não se trata de um botão */}
                    <Button variant='secondary' className='btn-context'>
                        Sobre mim
                    </Button>
                    <Heading level={1}>
                        Por que me contratar para o seu próximo projeto?
                    </Heading>
                    <>
                        <Paragraph>
                            Sou Desenvolvedor Fullstack e Arquiteto de Soluções, com experiência em Desenvolvimento Web, Automação de Processos (RPA) e Integrações de Sistemas. Tenho como foco criar soluções eficientes e escaláveis que simplificam processos complexos, otimizam operações e geram inteligência de negócio.
                        </Paragraph>
                        <Paragraph>
                            Meu objetivo é entregar sistemas funcionais, estáveis e de fácil manutenção, sempre com alta performance e um design limpo. De plataformas web a bots de automação, atuo com profundidade técnica e uma abordagem prática para garantir que seu sistema não apenas funcione, mas funcione melhor.
                        </Paragraph>
                    </>
                    <Button variant='secondary'>
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