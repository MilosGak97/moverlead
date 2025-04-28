import { PhoneIcon } from '@heroicons/react/24/outline';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container } from '../../../components/Container';
import { LocalNavLink } from '../home/components/LocalNavLink';
import { routes } from '../../../router/routes';
import { SocialNetworkLinks } from '../home/components/SocialNetworkLinks';
import { Logo } from '../../../components/Logo';

export const Footer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <div className="flex items-center justify-between">
            <LocalNavLink href="#hero" className="flex-shrink-0">
              <Logo />
            </LocalNavLink>
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
              <LocalNavLink hashLink href="/#features">
                Features
              </LocalNavLink>
              <LocalNavLink hashLink href="/#benefits">
                Benefits
              </LocalNavLink>
              <LocalNavLink hashLink href="/#testimonials">
                Testimonials
              </LocalNavLink>
              <LocalNavLink hashLink href="/#faq">
                FAQ
              </LocalNavLink>
              <LocalNavLink
                onClick={() => navigate(routes.web.blogs.root)}
                isActive={pathname === routes.web.blogs.root}
              >
                Blogs
              </LocalNavLink>
              <LocalNavLink
                onClick={() => navigate(routes.web.contactUs)}
                isActive={pathname === routes.web.contactUs}
              >
                Contact us
              </LocalNavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <SocialNetworkLinks />
          <p className="mt-6 text-sm text-center text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} MoverLead.com. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
