import type { ReactNode } from "react"
import { useTheme } from "../../../hooks/usetheme"
import styles from './Paragraph.module.scss'

type ParagraphProps = {
  children: ReactNode
  className?: string
  variant?: "body" | "caption" | "lead"
}

export const Paragraph = ({
  children,
  className = "",
  variant = "body"
}: ParagraphProps) => {
  const { paletaSelecionada } = useTheme()

  const baseClass = {
    body: styles.paragraph,
    caption: `${styles.paragraph} ${styles["paragraph--caption"]}`,
    lead: `${styles.paragraph} ${styles["paragraph--lead"]}`
  }

  return (
    <p
      className={`${baseClass[variant]} ${className}`}
      style={{
        color: variant === "caption"
          ? paletaSelecionada.accent.contrast.value
          : paletaSelecionada.background.contrast.value
      }}
    >
      {children}
    </p>
  )
}
