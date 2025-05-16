import React from "react";
import clsx from "clsx";
import { useTheme } from "../../../hooks/usetheme";
import './Button.scss'


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}) => {
  const classes = clsx("btn", `btn--${variant}`, `btn--${size}`, className);
  const {primary, text} = useTheme()

  return (
    <button type={type} className={classes} {...props} style={{backgroundColor:primary, color:text}}>
      {children}
    </button>
  );
};
