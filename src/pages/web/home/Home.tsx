import { CallToAction } from './sections/call-to-action/CallToAction';
import { Faqs } from './sections/faqs/Faqs';
import { Hero } from './sections/hero/Hero';
import { PrimaryFeatures } from './sections/primary-features/PrimaryFeatures';
import { SecondaryFeatures } from './sections/secondary-features/SecondaryFeatures';
import { Testimonials } from './sections/testimonials/Testimonials';

export const Home = () => {
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
};
