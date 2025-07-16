import { useTheme } from "../../../hooks/usetheme"

type LogoIconProps = {
    onClick?: () => void;
};


export const LogoIcon = ({ onClick }: LogoIconProps) => {
    
    const { paletaSelecionada } = useTheme()

    return (
        <svg width="50" height="50" viewBox="0 0 342 413" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <path d="M8.41443 111.22L171.361 10L333.165 111.22V303.189L171.361 402.954L8.41443 303.189V111.22Z" stroke={paletaSelecionada.secondary.hex.value} stroke-width="16.34"/>
            <path d="M10.23 301.208L167.183 185.918L332.127 301.208" stroke={paletaSelecionada.secondary.hex.value} stroke-width="16.34"/>
            <path d="M171.646 12.568V129.57" stroke={paletaSelecionada.secondary.hex.value} stroke-width="16.34"/>
            <path d="M263.866 135.5H77.9464L170.906 284.172L263.866 135.5Z" stroke={paletaSelecionada.primary.hex.value} stroke-width="16.34"/>
        </svg>
    )
}