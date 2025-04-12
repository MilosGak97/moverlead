'use client';

import { useEffect, useState } from 'react';
import { TabGroup, TabList, TabPanels } from '@headlessui/react';
import { features } from './data/features';

import { Container } from '../../components/Container';
import backgroundImage from '../../images/background-features.jpg';
import { SectionHeader } from '../../components/SectionHeader';
import { TabButton } from './components/TabButton';
import { TabContent } from './components/TabContent';

export const PrimaryFeatures = () => {
  const [tabOrientation, setTabOrientation] = useState<
    'horizontal' | 'vertical'
  >('horizontal');

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-primary pb-28 pt-20 sm:py-32"
    >
      <img
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        width={2245}
        height={1636}
      />
      <Container className="relative">
        <SectionHeader
          title="Focus your outreach on homes that matter"
          description=" With our advanced technology, easily analyze Zillow photos to
            determine if a home is furnished or empty."
          titleClassName="text-white"
          descriptionClassName="text-blue-100"
        />
        <TabGroup
          className="mt-16 grid items-center sm:gap-y-6 md:mt-20 lg:grid-cols-12"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="lg:col-span-5">
                <TabList className="relative z-10 flex flex-col gap-4 lg:gap-0">
                  {features.map(({ id, ...tabProps }, index) => (
                    <TabButton
                      key={id}
                      isSelected={selectedIndex === index}
                      {...tabProps}
                    />
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map(({ id, description, image }) => (
                  <TabContent
                    key={id}
                    description={description}
                    imageUrl={image}
                  />
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  );
};
