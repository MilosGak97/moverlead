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
import { PropertyStatusBedge } from './components/PropertyStatusBedge.tsx';
import { FilteredStatusBedge } from './components/FilteredStatusBedge.tsx';

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
        selectedListings.length > 0 && selectedListings.length < dataLength;
      setChecked(selectedListings.length === dataLength);
      setIndeterminate(isIndeterminate);
      checkbox.current.indeterminate = isIndeterminate; // Set indeterminate directly on the DOM element
    }
  }, [selectedListings]);

  function toggleAll() {
    if (selectedListings.length === dataLength) {
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
              className="block rounded-md bg-[#4379F2] px-3 py-1.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600"
            >
              Add More Leads
            </button>
          </div>
        </div>

        <FilterListings totalCount={data?.result.length || 0} />
        {isLoadingListing && <LoadingState />}
        {isErrorListing && <ErrorState onRefetchClick={refetchListing} />}
        {!isLoading && !isError && (
          <div className="mt-2 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="relative">
                  <table className="min-w-full h-80 table-fixed divide-y divide-gray-300">
                    <thead>
                      <tr className=" text-nowrap">
                        <th className="w-8"></th>

                        <th
                          scope="col"
                          className="relative px-7 sm:w-12 sm:px-6"
                        >
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 cursor-pointer"
                            ref={checkbox}
                            checked={checked}
                            onChange={toggleAll}
                          />
                          {selectedListings.length > 0 && (
                            <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                              <button
                                type="button"
                                className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                              >
                                Export
                              </button>
                            </div>
                          )}
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Address
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Owner
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Occupancy
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Property Value
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Badrooms
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Bathrooms
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Home Type
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Realtor
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Realtor Phone
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Brokerage
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Brokerage Phone
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {data?.result?.map((item, index) => {
                        const isPropertySelected = selectedListings.includes(
                          item.id || ''
                        );

                        return (
                          <tr
                            key={item?.id}
                            className={`cursor-pointer ${
                              isPropertySelected
                                ? 'bg-gray-100'
                                : 'hover:bg-gray-50'
                            }`}
                            onClick={() =>
                              toggleIndividual(
                                item.id || '',
                                !isPropertySelected
                              )
                            }
                          >
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {index + 1}
                            </td>
                            <td className="relative px-7 sm:w-12 sm:px-6">
                              <input
                                type="checkbox"
                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 cursor-pointer"
                                checked={isPropertySelected}
                                onChange={(e) =>
                                  toggleIndividual(
                                    item.id || '',
                                    e.target.checked
                                  )
                                }
                              />
                            </td>

                            <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
                              {item?.fullAddress || ''}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {/* TODO - instead of country use item.owner */}
                              To be updated
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <FilteredStatusBedge
                                status={item.filteredStatus}
                              />
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              ${item.price}
                            </td>
                            <th
                              scope="col"
                              className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                            >
                              {item.bedrooms}
                            </th>
                            <th
                              scope="col"
                              className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                            >
                              {item.bathrooms}
                            </th>
                            <th
                              scope="col"
                              className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 lowercase"
                            >
                              {item.homeType.replace('_', ' ')}
                            </th>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <PropertyStatusBedge
                                status={item.propertyStatus}
                              />
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {item.realtorName}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {item.realtorPhone}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {item.brokerageName}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              {item.brokeragePhone}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
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
