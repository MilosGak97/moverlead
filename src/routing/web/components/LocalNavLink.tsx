import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type LocalNavLinkWithHref = {
  href: string;
  onClick?: never;
};

type LocalNavLinkWithClick = {
  href?: never;
  onClick: () => void;
};

export type LocalNavLinkProps = {
  children: ReactNode;
  className?: string;
} & (LocalNavLinkWithHref | LocalNavLinkWithClick);

export const LocalNavLink = ({
  href,
  onClick,
  children,
  className,
}: LocalNavLinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={twMerge(
        'inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer',
        className
      )}
    >
      {children}
    </a>
  );
};

/*
gledaj smartmoving.com

Na blog stranicama kreirati 

order checkout ne radi na mobilnoj verziji

*/
