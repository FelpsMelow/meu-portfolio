import { useTheme } from "../../../hooks/usetheme";
import { FullscreenIcon } from "../../atoms/icons/fullscrennIcon";
import { Paragraph } from "../../atoms/paragraph/Paragraph";
import { hexToRgba } from '../../../utils/hexToRgba';
import "./ProjectCard.scss";
import { type ReactNode } from "react";

interface ProjectCardProps {
    title?: string;
    imageUrl: string;
    children: ReactNode
}

export const ProjectCard = ({ title = "Projeto", imageUrl, children }: ProjectCardProps) => {

    const { paletaSelecionada } = useTheme()

    return (
        <div className="hover-card">
            <img
                src={imageUrl}
                alt={title}
                className="hover-card-image"
            />
            <div
                className="hover-card-overlay"
                style={{
                    background: hexToRgba(paletaSelecionada.primary.hex.value, 0.7)
                }}
            >
                <div className="container-text">
                    <h3 className="hover-card-title">{title}</h3>
                    <Paragraph>
                        {children}
                    </Paragraph>
                </div>
                <div className="container-icon">
                    <FullscreenIcon/>
                </div>
            </div>
        </div>
    );
};
