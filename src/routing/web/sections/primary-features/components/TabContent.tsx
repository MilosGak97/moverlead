import { TabPanel } from '@headlessui/react';

type TabContentProps = {
  description: string;
  imageUrl: string;
};

export const TabContent = ({ description, imageUrl }: TabContentProps) => {
  return (
    <TabPanel unmount={false}>
      <div className="relative lg:hidden mt-2 mb-6 text-left">
        <p className="text-white">{description}</p>
      </div>
      <div className="overflow-hidden rounded-xl bg-slate-50 shadow-xl lg:w-[67.5rem]">
        <img src={imageUrl} />
      </div>
    </TabPanel>
  );
};
