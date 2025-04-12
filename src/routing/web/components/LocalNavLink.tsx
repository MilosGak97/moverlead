import { ReactNode } from 'react';

type LocalNavLinkWithHref = {
  href: string;
  onClick?: never;
};

type LocalNavLinkWithClick = {
  href?: never;
  onClick: () => void;
};

type LocalNavLinkProps = {
  children: ReactNode;
} & (LocalNavLinkWithHref | LocalNavLinkWithClick);

export const LocalNavLink = ({
  href,
  onClick,
  children,
}: LocalNavLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </a>
  );
};
