import './ProjectCard.scss';

type ProjectCardProps = {
    name: string;
    role: string;
    image: string;
    size?: 'small' | 'large';
    // Adicione outras props conforme necessário
};

// TODO - Ver como isso pode melhorar

export const ProjectCard = ({ name, role, image, size = 'large' }: ProjectCardProps) => {
    return (
        <div className={`project-card project-card-${size}`}>
            <img className="project-card-image" src={image} alt={name} />
            <div className="project-card-info">
                <span className="project-card-name">{name}</span>
                <span className="project-card-role">{role}</span>
            </div>
            {/* Adicione botões ou ícones aqui, se quiser */}
        </div>
    );
};