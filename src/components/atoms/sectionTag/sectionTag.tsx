import { type ReactNode } from 'react'
import './sectionTag.scss'
import { useTheme } from '../../../hooks/usetheme'

type SectionTagProps = {
    children: ReactNode
}

export const SectionTag = ({children}: SectionTagProps) => {

    const { paletaSelecionada } = useTheme()

    return (
        // TODO - Inplementar o estilo do tema
        <div 
            className='section-tag'
            style={{
                background: paletaSelecionada.primary.hex.value,
                color: paletaSelecionada.background.contrast.value
            }}
        >
            {children}
        </div>
    )
}