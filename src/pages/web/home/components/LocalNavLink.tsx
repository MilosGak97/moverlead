import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { HashLink } from 'react-router-hash-link';

type LocalNavLinkWithHref = {
  href: string;
  hashLink?: boolean;
  onClick?: never;
};

type LocalNavLinkWithClick = {
  href?: never;
  hashLink?: never;
  onClick: () => void;
};

export type LocalNavLinkProps = {
  children: ReactNode;
  isActive?: boolean;
  className?: string;
} & (LocalNavLinkWithHref | LocalNavLinkWithClick);

export const LocalNavLink = ({
  href,
  onClick,
  children,
  className,
  hashLink,
  isActive = false,
}: LocalNavLinkProps) => {
  const baseClass = twMerge(
    `inline-block rounded-lg p-1 text-sm cursor-pointer ${
      isActive
        ? 'bg-slate-100 text-slate-900'
        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
    }`,
    className
  );

  if (hashLink && href) {
    return (
      <HashLink to={href} className={baseClass}>
        {children}
      </HashLink>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <span onClick={onClick} className={baseClass}>
      {children}
    </span>
  );
};
