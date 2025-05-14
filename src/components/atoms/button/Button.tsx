import React from "react";
import clsx from "clsx";

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

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
};
