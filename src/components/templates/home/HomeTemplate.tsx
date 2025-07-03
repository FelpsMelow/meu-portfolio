import type { ReactNode } from "react"
import { useTheme } from "../../../hooks/usetheme"
import { DotMatrixPattern } from "../../molecules/dotMatrixPattern/DotMatrixPattern";
import { AvatarPlayCard } from '../../molecules/AvatarPlayCard/AvatarPlayCard';
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { Heading } from "../../atoms/heading/Heading";
import { Button } from "../../atoms/button";
import ParticlesBackground from '../../atoms/background/ParticlesBackground';
import './HomeTemplate.scss'

type HomeTemplate = {
    particlesBackground: ReactNode,
    playCard: ReactNode,
    content: ReactNode,
    followMe: ReactNode,
    colorPicker: ReactNode
}

export const HomeTemplate = () => {

    const { paletaSelecionada } = useTheme()

    return (
        <div
            className="home-template"
            style={{backgroundImage: `linear-gradient(90deg, ${paletaSelecionada.background.hex.value}, ${paletaSelecionada.primary.hex.value})`}}
        >
            <div
                className="left"
            >
                {/* TODO - Mudar a forma comoo eu estou organizando esse teamplate */}
                <div className="container-play-card">
                    <AvatarPlayCard/>
                </div>

                <div className="container-particle">
                    <ParticlesBackground id="teste" backgroundColor={paletaSelecionada.primary.hex.value}/>
                </div>
                
            </div>
            <div className="right">
                <div className="container-dot-matrix">
                    <DotMatrixPattern rows={15} columns={3}/>
                </div>

                <div className="presentation">
                    <section className="text-presentation">
                        <Heading level={1}>
                            <h1>
                                Eu sou um
                                <br />
                                Desenvolvedor Fullstack
                            </h1>
                        </Heading>
                        <br />
                        <Paragraph variant="body">
                            Crio aplicações web, faço integrações de APIs e busco soluções simples e eficientes.
                        </Paragraph>
                    </section>
                    <div className="container-buttons">
                        <Button variant="primary" className="btn-border">
                            Entre em contato
                        </Button>
                        <Button variant="secondary">
                            Ver projetos
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}