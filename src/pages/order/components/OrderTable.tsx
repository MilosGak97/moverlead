import { useRef } from 'react';
import { County } from '../../../generated-api';

type OrderTableProps = {
  checked: boolean;
  toggleSelectAllCounties: () => void;
  isMaxNumberOfCountiesReached: boolean;
  counties: County[];
  selectedCounties: County[];
  checkIsCountyInCart: (county: County) => boolean;
  toggleSingleCounty: (county: County, isChecked: boolean) => void;
};

export const OrderTable = ({
  checked,
  toggleSelectAllCounties,
  isMaxNumberOfCountiesReached,
  counties,
  selectedCounties,
  checkIsCountyInCart,
  toggleSingleCounty,
}: OrderTableProps) => {
  const checkbox = useRef<HTMLInputElement>(null);

  return (
    <table className="min-w-full table-fixed divide-y divide-gray-300">
      <thead>
        <tr>
          <th scope="col" className="relative w-14 px-6">
            <input
              type="checkbox"
              className="h-4 w-4 translate-y-0.5 cursor-pointer disabled:cursor-default"
              ref={checkbox}
              checked={checked}
              onChange={toggleSelectAllCounties}
              disabled={isMaxNumberOfCountiesReached}
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
            Price
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {counties.map((county) => {
          const isCountySelected = selectedCounties.some(
            (c) => c.id === county.id
          );
          const isCountyInCart = checkIsCountyInCart(county);

          return (
            <tr
              key={county.id}
              className={`relative group ${
                isCountySelected ? 'bg-gray-100' : 'hover:bg-gray-50'
              } ${
                isCountyInCart
                  ? 'cursor-default pointer-events-none opacity-25'
                  : `${
                      (!isMaxNumberOfCountiesReached || isCountySelected) &&
                      'cursor-pointer'
                    }`
              }`}
              onClick={() => toggleSingleCounty(county, !isCountySelected)}
            >
              <td className="group text-center">
                {/* TOOLTIP - mora unutar td-a zbog table, u suprotnom pobrka tabelu */}
                <div
                  className={`absolute top-0 -translate-y-full bg-gray-500 left-1/2 -translate-x-1/2 p-1 px-2 rounded-xl text-sm text-white opacity-0 invisible group-hover:opacity-100 ${
                    isMaxNumberOfCountiesReached &&
                    !isCountySelected &&
                    'group-hover:visible transition-opacity'
                  }`}
                >
                  Maximum limit reached. You can select up to 20 counties.
                  <div className="w-2 h-2 bg-gray-500 absolute left-1/2 -translate-x-1/2 rotate-45"></div>
                </div>

                <input
                  type="checkbox"
                  className={`h-4 w-4 translate-y-0.5 cursor-pointer disabled:cursor-default`}
                  checked={isCountySelected || isCountyInCart}
                  onClick={(e) => e.stopPropagation()} // Sprečava dvostruki klik
                  disabled={isMaxNumberOfCountiesReached && !isCountySelected}
                  onChange={(e) => toggleSingleCounty(county, e.target.checked)}
                />
                {isCountyInCart && (
                  <div className="hidden group-hover:block absolute whitespace-nowrap top-1/2 -translate-y-1/2 left-full bg-white border border-gray-200 p-1 px-2 rounded-md">
                    <span className="text-sm">
                      County is in the cart already
                    </span>
                  </div>
                )}
              </td>
              <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
                {county.name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {county.state}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                ${county.amount}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
