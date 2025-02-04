import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { FunnelIcon } from '@heroicons/react/20/solid';
import { ComboSelect } from './ComboSelect.tsx';
import { OptionSelect } from './OptionSelect.tsx';
import { InputsSelect } from './InputsSelect.tsx';
import { FilteredStatus } from '../enums/filteredStatus.ts';
import { PropertyStatus } from '../enums/propertyStatus.ts';
import { useListingFilterContext } from '../pages/protected/listing/context/ListingFilterContext.tsx';

{
  /* FILTER LISTINGS */
}

const filtersListing = {
  filterStatus: {
    title: 'Filtered Status',
    options: [
      { value: FilteredStatus.FURNISHED, label: 'Furnished', checked: false },
      { value: FilteredStatus.EMPTY, label: 'Empty', checked: false },
      { value: FilteredStatus.NO_DATA, label: 'No Data', checked: false },
      {
        value: FilteredStatus.NOT_FILTERED,
        label: 'Not Filtered',
        checked: false,
      },
    ],
  },

  propertyStatus: {
    title: 'Status',
    options: [
      {
        value: PropertyStatus.COMING_SOON,
        label: 'Coming Soon',
        checked: false,
      },
      { value: PropertyStatus.FOR_SALE, label: 'For Sale', checked: false },
      { value: PropertyStatus.PENDING, label: 'Pending', checked: false },
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
  const { setFilteredStatus, setPropertyStatus } = useListingFilterContext();

  const handleFilteredStatusChange = (selectedOption: FilteredStatus) => {
    setFilteredStatus((prev) =>
      prev.includes(selectedOption)
        ? prev.filter((status) => status !== selectedOption)
        : [...prev, selectedOption]
    );
  };

  const handlePropertyStatusChange = (selectedOption: PropertyStatus) => {
    setPropertyStatus((prev) =>
      prev.includes(selectedOption)
        ? prev.filter((status) => status !== selectedOption)
        : [...prev, selectedOption]
    );
  };

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
                5 Filters
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
          <div className="grid grid-cols-4">
            <div className="grid grid-cols-4 col-span-3 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
              <ComboSelect />
              <div className="col-span-3">
                <InputsSelect />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <OptionSelect
                filterGroup={filtersListing.filterStatus}
                onOptionSelected={(selectedOption) =>
                  handleFilteredStatusChange(selectedOption)
                }
              />
              <OptionSelect
                filterGroup={filtersListing.propertyStatus}
                onOptionSelected={(selectedOption) =>
                  handlePropertyStatusChange(selectedOption)
                }
              />
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
              <OptionSelect
                filterGroup={filtersSubscription.price}
                onOptionSelected={(selectedOption) =>
                  console.log(selectedOption)
                }
              />
            </div>
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <OptionSelect
                filterGroup={filtersSubscription.price2}
                onOptionSelected={(selectedOption) =>
                  console.log(selectedOption)
                }
              />
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export { FilterListings, FilterSubscription };
