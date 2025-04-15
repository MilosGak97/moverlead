import { Button } from '../../../components/Button';
import { Container } from '../components/Container';
import backgroundImage from '../images/background-call-to-action.jpg';
import { routes } from '../../../router/routes';
import { useNavigate } from 'react-router-dom';

export const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-primary py-32"
    >
      <img
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Sign up for a free account and start targeting the right moving
            leads instantly. Spend less time searching and more time booking
            high-value moves.
          </p>
          <div className="flex flex-col gap-6 mt-10 sm:max-w-56 mx-auto">
            <Button
              onClick={() => navigate(routes.auth.register)}
              color={'white'}
              rounded={'full'}
            >
              Create a Free Account
            </Button>
            <Button
              onClick={() =>
                window.open(
                  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                  '_target'
                )
              }
              rounded={'full'}
              className={'flex items-center justify-center border-white'}
              size={'small'}
            >
              <svg
                aria-hidden="true"
                className="h-3 w-3 flex-none fill-white group-active:fill-current"
              >
                <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
              </svg>
              <span className="ml-3">Schedule a meeting</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
