import type { ReactNode, AnchorHTMLAttributes } from "react";
import './NavItem.scss'

type NavItemProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
};

export const NavItem = ({ children, href, className = "", ...props }: NavItemProps) => {
  return (
    <a className={`nav-item ${className}`} href={href} {...props}>
      {children}
    </a>
  );
};
