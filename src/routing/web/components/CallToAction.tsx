import { Button } from './Button';
import { Container } from './Container';
import backgroundImage from '../images/background-call-to-action.jpg';
import { routes } from '../../../router/routes';

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-[#4379F2] py-32"
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
          <Button href={routes.auth.register} color="white" className="mt-10">
            Create a Free Account
          </Button>
        </div>
      </Container>
    </section>
  );
}
