import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { LocalNavLink } from '../components/LocalNavLink';
import { FacebookIcon } from '../../../components/iconography/FacebookIcon';
import { InstagramIcon } from '../../../components/iconography/InstagramIcon';
import { LinkedinIcon } from '../../../components/iconography/LinkedinIcon';
import { PhoneIcon } from '@heroicons/react/24/outline';
import { Container } from '../../../components/Container';

export const Footer = () => {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <div className="flex items-center justify-between">
            <Logo />
            <LocalNavLink
              href="tel:8559708419"
              className="flex items-center gap-1.5"
            >
              <PhoneIcon width={'1.5rem'} className={'fill-text-slate-700'} />
              855 970 8419
            </LocalNavLink>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="flex items-center flex-wrap gap-2">
              <LocalNavLink href="#features">Features</LocalNavLink>
              <LocalNavLink href="#benefits">Benefits</LocalNavLink>
              <LocalNavLink href="#testimonials">Testimonials</LocalNavLink>
              <LocalNavLink href="#faq">FAQ</LocalNavLink>
              <LocalNavLink href="#faq">Contact us</LocalNavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              to="http://facebook.com/moverlead"
              target="_blank"
              className="group w-6 h-6 text-slate-500 hover:text-slate-700"
              aria-label="Moverlead facebook profile"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </Link>
            <Link
              to="https://www.instagram.com/mover_lead/"
              target="_blank"
              className="group w-6 h-6 text-slate-500 hover:text-slate-700"
              aria-label="Moverlead facebook profile"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </Link>
            <Link
              to="https://www.linkedin.com/company/mover-lead/?viewAsMember=true"
              target="_blank"
              className="group w-6 h-6 text-slate-500 hover:text-slate-700"
              aria-label="Moverlead facebook profile"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </Link>
          </div>
          <p className="mt-6 text-sm text-center text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} MoverLead.com. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
