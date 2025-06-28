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
  const { paletaSelecionada } = useTheme()

  const styleClass = `${styles.divider} ${styles[`divider--${variant}`]} ${styles[`divider--${orientation}`]} ${className}`

  return (
    <div
      className={styleClass}
      style={{
        borderColor: paletaSelecionada.accent.hex.value,
        backgroundColor: variant === "solid" ? paletaSelecionada.accent.hex.value : "transparent"
      }}
    />
  )
}
