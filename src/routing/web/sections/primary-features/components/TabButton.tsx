import { Tab } from '@headlessui/react';
import clsx from 'clsx';

type TabButtonProps = {
  title: string;
  description: string;
  isSelected: boolean;
};

export const TabButton = ({
  title,
  description,
  isSelected,
}: TabButtonProps) => {
  return (
    <Tab
      className={clsx(
        'group rounded-lg lg:rounded-l-xl lg:rounded-r-none px-4 py-2 lg:p-6 text-left border-b border-transparent lg:border-none',
        isSelected
          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
          : 'hover:bg-white/10 lg:hover:bg-white/5 border-white'
      )}
    >
      <h3>
        <span
          className={clsx(
            'font-display text-lg ui-not-focus-visible:outline-none',
            isSelected
              ? 'text-primary lg:text-white'
              : 'text-blue-100 hover:text-white lg:text-white'
          )}
        >
          {title}
        </span>
      </h3>
      <p
        className={clsx(
          'mt-2 hidden text-sm lg:block',
          isSelected ? 'text-white' : 'text-blue-100 group-hover:text-white'
        )}
      >
        {description}
      </p>
    </Tab>
  );
};
