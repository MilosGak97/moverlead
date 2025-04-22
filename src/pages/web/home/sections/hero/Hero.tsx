import amExpress from './images/am_express_logo.png';
import ecoBins from './images/eco_bins_logo.png';
import vanExpress from './images/van_express_logo.png';
import viteMoving from './images/vite_moving_logo.png';
import transWorldMovers from './images/trans_world_movers.png';
import incomeImage from '../../../../../assets/images/income.png';
import { useNavigate } from 'react-router-dom';
import { CurvyLineIcon } from '../../../../../components/iconography/CurvyLineIcon';
import { Container } from '../../../../../components/Container';
import { Button } from '../../../../../components/Button';
import { routes } from '../../../../../router/routes';
import { CalendlyButton } from '../../components/CalendlyButton';

const trustedByCompanies = [
  { name: 'FakeMirage', logo: amExpress },
  { name: 'StaticKit', logo: ecoBins },
  { name: 'TransWorlMovers', logo: transWorldMovers },
  { name: 'Transistor', logo: vanExpress },
  { name: 'Tuple', logo: viteMoving },
];

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <main id="hero">
      <Container className="pb-16 pt-20 text-center lg:pt-32">
        <h1 className="mx-auto max-w-4xl font-display text-4xl xs:text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Filtered{' '}
          <span className="relative whitespace-nowrap text-primary">
            <div className="absolute left-0 top-2/3 w-full h-6 sm:h-11 text-primary opacity-30">
              <CurvyLineIcon />
            </div>
            <span className="relative">Property Listings</span>
          </span>{' '}
          for Moving Companies
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Maximize your outreach efficiency by targeting furnished, move-ready
          properties—saving time and cutting marketing costs.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            color={'black'}
            size={'small'}
            onClick={() => navigate(routes.auth.register)}
            rounded={'full'}
            className={'w-full sm:w-fit'}
          >
            Create an account
          </Button>
          <CalendlyButton className="w-full sm:w-auto bg-transparent text-slate-900 border-slate-200 hover:border-slate-300 hover:bg-transparent active:bg-slate-100" />
        </div>
        <div className="flex justify-center">
          <div className="sm:max-w-lg w-full my-12 sm:my-16 ">
            <img src={incomeImage} alt="Invoice" className="w-full" />
          </div>
        </div>
        <div>
          <p className="font-display text-base text-slate-900">
            Trusted by top moving companies nationwide
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center flex-wrap justify-around gap-4 md:gap-6"
          >
            {trustedByCompanies.map((company) => (
              <li key={company.name} className="flex justify-center h-20">
                <img src={company.logo} alt={company.name} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
};
