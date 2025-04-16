'use client';
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react';
import clsx from 'clsx';

import { useNavigate } from 'react-router-dom';

import { Button } from '../../../components/Button.tsx';
import { Logo } from '../components/Logo.tsx';
import {
  LocalNavLink,
  LocalNavLinkProps,
} from '../components/LocalNavLink.tsx';
import { routes } from '../../../router/routes.ts';
import { PhoneIcon, UserIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';
import { Container } from '../../../components/Container.tsx';

const MobileNavLink = ({
  href,
  children,
  onClick,
  className,
}: LocalNavLinkProps) => {
  return (
    <PopoverButton as="div" className="block w-full cursor-pointer">
      <a
        className={twMerge('block p-2 rounded-md hover:bg-gray-50', className)}
        href={href}
        onClick={onClick}
      >
        {children}
      </a>
    </PopoverButton>
  );
};

const MobileNavIcon = ({ open }: { open: boolean }) => {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  );
};

const MobileNavigation = () => {
  const navigate = useNavigate();

  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex gap-2 origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MobileNavLink href="#features">Features</MobileNavLink>
        <MobileNavLink href="#benefits">Benefits</MobileNavLink>
        <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
        <MobileNavLink href="#faq">FAQ</MobileNavLink>
        <MobileNavLink href="#features">Contact us</MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
        <MobileNavLink
          href="tel:8559708419"
          className="flex items-center gap-2"
        >
          <PhoneIcon width={'1.5rem'} className={'fill-text-slate-700'} />
          855 970 8419
        </MobileNavLink>
        <MobileNavLink
          onClick={() => navigate(routes.auth.login)}
          className="flex items-center gap-2"
        >
          <UserIcon width={'1.5rem'} className={'text-slate-700'} /> Log in
        </MobileNavLink>
      </PopoverPanel>
    </Popover>
  );
};

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <LocalNavLink
              href="#hero"
              aria-label="Home"
              className="flex-shrink-0 p-0"
            >
              <Logo />
            </LocalNavLink>
            <div className="hidden lg:flex lg:gap-x-6">
              <LocalNavLink href="#features">Features</LocalNavLink>
              <LocalNavLink href="#benefits">Benefits</LocalNavLink>
              <LocalNavLink href="#testimonials">Testimonials</LocalNavLink>
              <LocalNavLink href="#faq">FAQ</LocalNavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 lg::gap-x-6">
            <LocalNavLink
              href="tel:8559708419"
              className="hidden lg:flex items-center gap-1.5"
            >
              <PhoneIcon width={'1.5rem'} className={'fill-text-slate-700'} />
              855 970 8419
            </LocalNavLink>
            <LocalNavLink
              onClick={() => navigate(routes.auth.login)}
              className="hidden lg:flex items-center gap-1.5"
            >
              <UserIcon width={'1.5rem'} className={'fill-text-slate-700'} />
              Log in
            </LocalNavLink>
            <Button
              onClick={() => navigate(routes.auth.register)}
              size={'small'}
              rounded={'full'}
            >
              Get started today
            </Button>
            <div className="-mr-1 lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
