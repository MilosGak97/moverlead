import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { FacebookIcon } from '../../../../components/iconography/FacebookIcon';
import { InstagramIcon } from '../../../../components/iconography/InstagramIcon';
import { LinkedinIcon } from '../../../../components/iconography/LinkedinIcon';

type SocialNetworkLinksProps = {
  wrapperClassName?: string;
  iconsLinkClassName?: string;
};

export const SocialNetworkLinks = ({
  wrapperClassName,
  iconsLinkClassName,
}: SocialNetworkLinksProps) => {
  return (
    <div className={twMerge('flex gap-x-6', wrapperClassName)}>
      <Link
        to="https://facebook.com/moverlead"
        target="_blank"
        className={twMerge(
          'group w-6 h-6 text-slate-500 hover:text-slate-700',
          iconsLinkClassName
        )}
        aria-label="Moverlead facebook profile"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </Link>
      <Link
        to="https://www.instagram.com/mover_lead/"
        target="_blank"
        className={twMerge(
          'group w-6 h-6 text-slate-500 hover:text-slate-700',
          iconsLinkClassName
        )}
        aria-label="Moverlead facebook profile"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </Link>
      <Link
        to="https://www.linkedin.com/company/mover-lead/?viewAsMember=true"
        target="_blank"
        className={twMerge(
          'group w-6 h-6 text-slate-500 hover:text-slate-700',
          iconsLinkClassName
        )}
        aria-label="Moverlead facebook profile"
        rel="noopener noreferrer"
      >
        <LinkedinIcon />
      </Link>
    </div>
  );
};
