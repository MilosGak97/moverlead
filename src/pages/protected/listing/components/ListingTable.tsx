import { RefObject } from 'react';
import { GetListingObjectDto } from '../../../../generated-api';
import { FilteredStatusBedge } from './FilteredStatusBedge';
import { PropertyStatusBedge } from './PropertyStatusBedge';
import { formatDateToUSDate } from '../../../../helpers/formatDate';
import { normalizeScreamingSnakeText } from '../../../../helpers/normalizeScreamingSnakeText';
import { OwnerNameText } from './OwnerNameText';

type ListingTableProps = {
  checkbox?: RefObject<HTMLInputElement>;
  checked: boolean;
  toggleAll: () => void;
  toggleIndividual: (id: string, isChecked: boolean) => void;
  items: GetListingObjectDto[];
  selectedListings: string[];
};

export const ListingTable = ({
  checkbox,
  checked,
  toggleAll,
  toggleIndividual,
  items,
  selectedListings,
}: ListingTableProps) => {
  return (
    <table className="divide-y divide-gray-300 w-full">
      <thead>
        <tr className=" text-nowrap">
          <th className="w-8"></th>
          <th scope="col" className="relative w-14 px-6">
            <input
              type="checkbox"
              className="h-4 w-4 translate-y-0.5 cursor-pointer"
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
            Bedrooms
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
            Listing Type
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Listing Date
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
        {items.map((item, index) => {
          const isPropertySelected = selectedListings.includes(item.id || '');

          return (
            <tr
              key={item?.id}
              className={`cursor-pointer ${
                isPropertySelected ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
              onClick={() =>
                toggleIndividual(item.id || '', !isPropertySelected)
              }
            >
              <td className="whitespace-nowrap px-1 py-4 text-sm text-gray-500 text-center">
                {index + 1}
              </td>
              <td className="relative text-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 cursor-pointer translate-y-0.5"
                  checked={isPropertySelected}
                  onChange={(e) =>
                    toggleIndividual(item.id || '', e.target.checked)
                  }
                />
              </td>

              <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
                {item?.fullAddress || ''}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <OwnerNameText statusOrName={item.fullName} />
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <FilteredStatusBedge status={item.filteredStatus} />
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
                className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
              >
                {normalizeScreamingSnakeText(item.homeType)}
              </th>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <PropertyStatusBedge status={item.propertyStatus} />
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {formatDateToUSDate(item.propertyStatusDate)}
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
                {item.brokeragePhone || '-'}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
