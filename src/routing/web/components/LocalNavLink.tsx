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

sign in -> log in (and add user icon next to it)

hero sekcija second button schedule a meeting -> calendly-embeded

max date u listing filterima


get started today dodati dugmic

schedule a meeting 

add linkedin na u footer i link do profila

u listingu skloniti bold sa bedrooms, bathrooms, home type 

order checkout ne radi na mobilnoj verziji

*/
