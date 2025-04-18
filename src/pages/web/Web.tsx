import { SecondaryFeatures } from './components/SecondaryFeatures';
import { CallToAction } from './sections/CallToAction';
import { Faqs } from './sections/Faqs';
import { Hero } from './sections/Hero';
import { PrimaryFeatures } from './sections/primary-features/PrimaryFeatures';
import { Testimonials } from './sections/testimonials/Testimonials';

function Web() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Faqs />
      </div>
    </>
  );
}

export default Web;
