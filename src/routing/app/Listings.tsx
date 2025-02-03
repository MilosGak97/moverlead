import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import {
  BadgeBlue,
  BadgeGreen,
  BadgePink,
  BadgePurple,
  BadgeRed,
  BadgeYellow,
} from './components/Badges.tsx';
import { FilterListings } from './components/FilterSelection.tsx';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../api/api.ts';
import { QueryKeys } from '../../enums/queryKeys.ts';

const Listings = () => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedListings, setSelectedListings] = useState<string[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.LISTINGS],
    queryFn: () => api.properties.propertiesControllerListings({}),
  });

  const dataLength = data?.length || 0;

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
      setSelectedListings((data || [])?.map((p) => p?.zpid || '')); // Select all
    }
  }
  useEffect(() => {
    if (checkbox.current) {
      checkbox.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  function toggleIndividual(zpid: string, isChecked: boolean) {
    setSelectedListings((prevSelected) =>
      isChecked
        ? [...prevSelected, zpid]
        : prevSelected.filter((e) => e !== zpid)
    );
  }

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong!</div>;

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

        <FilterListings />
        <div className="mt-2 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="relative">
                {selectedListings.length > 0 && (
                  <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                    <button
                      type="button"
                      className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Bulk edit
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Delete all
                    </button>
                  </div>
                )}
                <table className="min-w-full table-fixed divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4"
                          ref={checkbox}
                          checked={checked}
                          onChange={toggleAll}
                        />
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
                        Brokerage
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Realtor Phone
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data?.map((item) => (
                      <tr
                        key={item.zpid}
                        className={
                          selectedListings.includes(item?.zpid || '')
                            ? 'bg-gray-50'
                            : undefined
                        }
                      >
                        <td className="relative px-7 sm:w-12 sm:px-6">
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4"
                            checked={selectedListings.includes(
                              item?.zpid || ''
                            )}
                            onChange={(e) =>
                              toggleIndividual(
                                item?.zpid || '',
                                e.target.checked
                              )
                            }
                          />
                        </td>
                        <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
                          {item?.street_address || ''}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {/* TODO - instead of country use item.owner */}
                          {item.county}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.filtered_status === 'Full' ? (
                            <BadgeGreen value={item.filtered_status} />
                          ) : item.filtered_status === 'Empty' ? (
                            <BadgeRed value={item.filtered_status} />
                          ) : item.filtered_status === 'No Photos' ? (
                            <BadgePink value={item.filtered_status} />
                          ) : (
                            item.filtered_status
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          ${item.price}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.home_status === 'For Sale' ? (
                            <BadgeYellow value={item.home_status} />
                          ) : item.home_status === 'Pending' ? (
                            <BadgeBlue value={item.home_status} />
                          ) : item.home_status === 'Coming soon' ? (
                            <BadgePurple value={item.home_status} />
                          ) : (
                            item.home_status
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.realtor_name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.realtor_company}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.realtor_phone}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listings;
