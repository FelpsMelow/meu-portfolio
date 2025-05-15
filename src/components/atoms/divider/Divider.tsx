import { useTheme } from "../../../hooks/usetheme"
import styles from "./Divider.module.scss"

type DividerProps = {
  variant?: "solid" | "dashed" | "dotted"
  orientation?: "horizontal" | "vertical"
  className?: string
}

export const Divider = ({
  variant = "solid",
  orientation = "horizontal",
  className = ""
}: DividerProps) => {
  const theme = useTheme()

  const styleClass = `${styles.divider} ${styles[`divider--${variant}`]} ${styles[`divider--${orientation}`]} ${className}`

  return (
    <div
      className={styleClass}
      style={{
        borderColor: theme.accent,
        backgroundColor: variant === "solid" ? theme.accent : "transparent"
      }}
    />
  )
}
