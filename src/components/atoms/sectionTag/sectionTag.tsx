import { type ReactNode } from 'react'
import { useTheme } from '../../../hooks/usetheme'
import './sectionTag.scss'

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
                color: paletaSelecionada.accent.contrast.value
            }}
        >
            {children}
        </div>
    )
}