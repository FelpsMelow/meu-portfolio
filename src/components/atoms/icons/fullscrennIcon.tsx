import { useTheme } from "../../../hooks/usetheme"

export const FullscreenIcon = () => {
    
    const { paletaSelecionada } = useTheme()

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 8.5V4.5C3.5 3.39543 4.39543 2.5 5.5 2.5H18.5C19.6046 2.5 20.5 3.39543 20.5 4.5V18.5C20.5 19.6046 19.6046 20.5 18.5 20.5H14.5" stroke={paletaSelecionada.background.hex.value} stroke-linecap="round"/>
            <path d="M14.5 9.5V9H15V9.5H14.5ZM9.85355 14.8536L9.5 15.2071L8.79289 14.5L9.14645 14.1464L9.85355 14.8536ZM14 15V9.5H15V15H14ZM14.5 10H9V9H14.5V10ZM14.8536 9.85355L9.85355 14.8536L9.14645 14.1464L14.1464 9.14645L14.8536 9.85355Z" fill={paletaSelecionada.background.hex.value}/>
            <rect x="3.5" y="14.5" width="6" height="6" rx="1.5" stroke={paletaSelecionada.background.hex.value} stroke-linecap="round"/>
        </svg>
    )
}