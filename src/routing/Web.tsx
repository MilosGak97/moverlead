import { Header } from './web/sections/Header.tsx';
import { Hero } from './web/sections/Hero.tsx';
import { PrimaryFeatures } from './web/sections/primary-features/PrimaryFeatures.tsx';
import { SecondaryFeatures } from './web/components/SecondaryFeatures.tsx';
import { CallToAction } from './web/sections/CallToAction.tsx';
import { Testimonials } from './web/sections/Testimonials.tsx';
import { Faqs } from './web/sections/Faqs.tsx';
import { Footer } from './web/sections/Footer.tsx';

function Web() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}

export default Web;
