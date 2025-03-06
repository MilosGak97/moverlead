import { Header } from './web/components/Header.tsx';
import { Testimonials } from './web/components/Testimonials.tsx';
import { Hero } from './web/components/Hero.tsx';
import { PrimaryFeatures } from './web/components/PrimaryFeatures.tsx';
import { SecondaryFeatures } from './web/components/SecondaryFeatures.tsx';
import { CallToAction } from './web/components/CallToAction.tsx';
import { Faqs } from './web/components/Faqs.tsx';
import { Footer } from './web/components/Footer.tsx';

function Web() {
  return (
    <>
      <Header />
      <main>
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
