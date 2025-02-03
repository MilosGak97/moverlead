import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { FunnelIcon } from '@heroicons/react/20/solid';
import ComboSelect from './ComboSelect';
import OptionSelect from './OptionSelect.tsx';
{
  /* FILTER LISTINGS */
}
const filters = {
  price: {
    title: 'Occupancy',
    options: [
      { value: 'furnished', label: 'Furnished', checked: true },
      { value: 'empty', label: 'Empty', checked: false },
      { value: 'nodata', label: 'No Data', checked: false },
    ],
  },

  price2: {
    title: 'Status',
    options: [
      { value: 'comingsoon', label: 'Coming Soon', checked: false },
      { value: 'forsale', label: 'For Sale', checked: true },
      { value: 'pending', label: 'Pending', checked: false },
    ],
  },

  price3: {
    title: 'Property Value',
    options: [
      { value: '0', label: '$0 - $250,000', checked: true },
      { value: '25', label: '$250,001 - $500,000', checked: true },
      { value: '50', label: '$500,001 - $750,000', checked: true },
      { value: '75', label: '$750,000+', checked: true },
    ],
  },
};

{
  /* FILTER SUBSCRIPTION */
}

const filtersSubscription = {
  price: {
    title: 'Status',
    options: [
      { value: 'available', label: 'Available', checked: true },
      { value: 'subscribed', label: 'Subscribed', checked: false },
    ],
  },

  price2: {
    title: 'Tier',
    options: [
      { value: 'tier1', label: 'Tier 1', checked: false },
      { value: 'tier2', label: 'Tier 2', checked: true },
      { value: 'tier3', label: 'Tier 3', checked: false },
    ],
  },
};

const FilterListings = () => {
  return (
    <div className="mt-8 bg-white">
      {/* Filters */}
      <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        className="grid items-center border-b border-t border-gray-200"
      >
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>
        <div className="relative col-start-1 row-start-1 py-4">
          <div className="mx-auto flex w-full space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
            <div>
              <DisclosureButton className="group flex items-center font-medium text-gray-700">
                <FunnelIcon
                  aria-hidden="true"
                  className="mr-2 size-5 flex-none text-gray-400 group-hover:text-gray-500"
                />
                2 Filters
              </DisclosureButton>
            </div>
            <div className="pl-6">
              <button
                type="button"
                className="text-gray-500 hover:cursor-pointer"
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
        <DisclosurePanel className="border-t border-gray-200 py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <ComboSelect />
              <OptionSelect filterGroup={filters.price} />
            </div>
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <OptionSelect filterGroup={filters.price2} />

              <OptionSelect filterGroup={filters.price3} />
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

const FilterSubscription = () => {
  return (
    <div className="mt-8 bg-white">
      {/* Filters */}
      <Disclosure
        as="section"
        aria-labelledby="filter-heading"
        className="grid items-center border-b border-t border-gray-200"
      >
        <h2 id="filter-heading" className="sr-only">
          Filters
        </h2>
        <div className="relative col-start-1 row-start-1 py-4">
          <div className="mx-auto flex w-full space-x-6 divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
            <div>
              <DisclosureButton className="group flex items-center font-medium text-gray-700">
                <FunnelIcon
                  aria-hidden="true"
                  className="mr-2 size-5 flex-none text-gray-400 group-hover:text-gray-500"
                />
                2 Filters
              </DisclosureButton>
            </div>
            <div className="pl-6">
              <button
                type="button"
                className="text-gray-500 hover:cursor-pointer"
              >
                Clear all
              </button>
            </div>
          </div>
        </div>
        <DisclosurePanel className="border-t border-gray-200 py-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <ComboSelect />
              <OptionSelect filterGroup={filtersSubscription.price} />
            </div>
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <OptionSelect filterGroup={filtersSubscription.price2} />
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export { FilterListings, FilterSubscription };
