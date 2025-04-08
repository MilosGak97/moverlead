import { useLayoutEffect, useRef, useState, useEffect } from 'react';

import { FilterListings } from '../../../components/FilterSelection.tsx';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../../api/api.ts';
import { QueryKeys } from '../../../enums/queryKeys.ts';
import {
  ListingFilterProvider,
  useListingFilterContext,
} from './context/ListingFilterContext.tsx';
import { LoadingState } from '../../../components/LoadingState.tsx';
import { ErrorState } from '../../../components/ErrorState.tsx';
import { ExportOptions } from './components/ExportOptions.tsx';
import { ListingTable } from './components/ListingTable.tsx';

const ListingsView = () => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedListings, setSelectedListings] = useState<string[]>([]);
  const {
    date,
    propertyValue,
    selectedStatesList,
    filteredStatus,
    propertyStatus,
  } = useListingFilterContext();

  const selectedListingCount = selectedListings.length;

  const {
    data,
    isLoading: isLoadingListing,
    isError: isErrorListing,
    refetch: refetchListing,
  } = useQuery({
    queryKey: [
      QueryKeys.LISTINGS,
      selectedStatesList,
      date,
      propertyValue,
      filteredStatus,
      propertyStatus,
    ],
    queryFn: () =>
      api.properties.propertiesControllerGetListings({
        state: selectedStatesList,
        dateTo: date.to || undefined,
        dateFrom: date.from || undefined,
        propertyValueTo: propertyValue.to || undefined,
        propertyValueFrom: propertyValue.from || undefined,
        propertyStatus,
        filteredStatus,
        limit: 10000,
        offset: 0,
      }),
  });

  const { isLoading: isLoadingStates, isError: isErrorStates } = useQuery({
    queryKey: [QueryKeys.STATES],
    queryFn: () => api.properties.propertiesControllerListStates(),
  });

  const dataLength = data?.result.length || 0;

  useLayoutEffect(() => {
    if (checkbox.current) {
      const isIndeterminate =
        selectedListingCount > 0 && selectedListingCount < dataLength;
      setChecked(selectedListingCount === dataLength);
      setIndeterminate(isIndeterminate);
      checkbox.current.indeterminate = isIndeterminate; // Set indeterminate directly on the DOM element
    }
  }, [selectedListings, selectedListingCount]);

  function toggleAll() {
    if (selectedListingCount === dataLength) {
      setSelectedListings([]); // Unselect all
    } else {
      setSelectedListings((data?.result || [])?.map((p) => p?.id || '')); // Select all
    }
  }
  useEffect(() => {
    if (checkbox.current) {
      checkbox.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  function toggleIndividual(id: string, isChecked: boolean) {
    setSelectedListings((prevSelected) =>
      isChecked ? [...prevSelected, id] : prevSelected.filter((e) => e !== id)
    );
  }

  const isLoading = isLoadingListing || isLoadingStates;
  const isError = isErrorListing || isErrorStates;

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">Listings</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all properties that are on the market in selected areas.
            </p>
          </div>

          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-[#4379F2] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
            >
              Add More Leads
            </button>
          </div>
        </div>

        <FilterListings
          totalCount={data?.result.length || 0}
          selectedItemsCount={selectedListingCount}
        />
        <ExportOptions selectedListings={selectedListings} />
        {isLoadingListing && <LoadingState />}
        {isErrorListing && <ErrorState onRefetchClick={refetchListing} />}
        {!isLoading && !isError && (
          <div className="mt-2 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="relative">
                  <ListingTable
                    checkbox={checkbox}
                    checked={checked}
                    toggleAll={toggleAll}
                    toggleIndividual={toggleIndividual}
                    selectedListings={selectedListings}
                    items={data?.result || []}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export const Listings = () => {
  return (
    <ListingFilterProvider>
      <ListingsView />
    </ListingFilterProvider>
  );
};
