import type { ReactNode } from "react";

type NavItemProps = {
  children: ReactNode;
  href: string;
};

export const NavItem = ({ children, href }: NavItemProps) => {
  return (
    <a className="nav-item" href={href}>
      {children}
    </a>
  );
};
