import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import {
  BadgeBlue,
  BadgeGreen,
  BadgePink,
  BadgePurple,
  BadgeYellow,
} from '../../components/Badges.tsx';
import { FilterSubscription } from '../../components/FilterSelection.tsx';

interface Item {
  id: string;
  county: string;
  state: string;
  status: string;
  price: string;
  tier: string;
}

const Subscription = () => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedListings, setSelectedListings] = useState<string[]>([]);

  const listings: Item[] = [
    {
      id: '325325325',
      county: 'Atlantic County',
      state: 'New Jersey',
      status: 'Available',
      price: '25',
      tier: '1 - List',
    },
    {
      id: '325323825',
      county: 'Bergen County',
      state: 'New Jersey',
      status: 'Available',
      price: '35',
      tier: '1 - List',
    },
    {
      id: '3252324325',
      county: 'Burlington County',
      state: 'New Jersey',
      status: 'Subscribed',
      price: '18',
      tier: '1 - List',
    },
  ];

  useLayoutEffect(() => {
    if (checkbox.current) {
      const isIndeterminate =
        selectedListings.length > 0 &&
        selectedListings.length < listings.length;
      setChecked(selectedListings.length === listings.length);
      setIndeterminate(isIndeterminate);
      checkbox.current.indeterminate = isIndeterminate; // Set indeterminate directly on the DOM element
    }
  }, [selectedListings]);

  function toggleAll() {
    if (selectedListings.length === listings.length) {
      setSelectedListings([]); // Unselect all
    } else {
      setSelectedListings(listings.map((p) => p.id)); // Select all
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

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">
              Subscription
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all counties that are on the market for property
              listings subscription.
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

        <FilterSubscription />
        <div className="mt-2 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="relative">
                {selectedListings.length > 0 && (
                  <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                    <button
                      type="button"
                      className="inline-flex items-center rounded bg-green-700 text-white px-4 py-1 text-base rounded-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-800"
                    >
                      Subscribe
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
                        County
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        State
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
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Tier
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {listings.map((item) => (
                      <tr
                        key={item.id}
                        className={
                          selectedListings.includes(item.id)
                            ? 'bg-gray-50'
                            : undefined
                        }
                      >
                        <td className="relative px-7 sm:w-12 sm:px-6">
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4"
                            checked={selectedListings.includes(item.id)}
                            onChange={(e) =>
                              toggleIndividual(item.id, e.target.checked)
                            }
                          />
                        </td>
                        <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
                          {item.county}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.state}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.status === 'Available' ? (
                            <BadgeGreen value={item.status} />
                          ) : item.status === 'Subscribed' ? (
                            <BadgePurple value={item.status} />
                          ) : item.status === 'No Photos' ? (
                            <BadgePink value={item.status} />
                          ) : (
                            item.status
                          )}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          ${item.price}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {item.tier === 'For Sale' ? (
                            <BadgeYellow value={item.tier} />
                          ) : item.tier === 'Pending' ? (
                            <BadgeBlue value={item.tier} />
                          ) : item.tier === 'Coming soon' ? (
                            <BadgePurple value={item.tier} />
                          ) : (
                            item.tier
                          )}
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

export default Subscription;
