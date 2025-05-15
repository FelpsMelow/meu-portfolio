import type { ReactNode, ElementType, JSX } from "react"
import styles from "./Heading.module.scss"
import { useTheme } from "../../../hooks/usetheme"

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
  className?: string
}

export const Heading = ({
  level = 1,
  children,
  className = ""
}: HeadingProps) => {
  const theme = useTheme()
  const Tag = (`h${level}` as keyof JSX.IntrinsicElements) as ElementType
  const variantClass = styles[`heading--h${level}`]

  return (
    <Tag
      className={`${styles.heading} ${variantClass} ${className}`}
      style={{ color: theme.text }}
    >
      {children}
    </Tag>
  )
}
