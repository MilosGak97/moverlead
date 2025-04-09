import { useMutation, useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { QueryKeys } from '../../enums/queryKeys';
import { api } from '../../api/api';
import { SelectState } from './components/SelectState';
import { useStates } from '../../hooks/useStates';
import { County, StateResponseDto } from '../../generated-api';
import { useToast } from '../../hooks/useToast';
import { Toast } from '../../components/Toast';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { StateContainer } from '../../components/StateContainer';
import { Button } from '../../components/Button';

const MAX_NUMBER_OF_COUNTIES = 20;

export const Order = () => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [selectedState, setSelectedState] = useState<StateResponseDto | null>(
    null
  );
  const [selectedCounties, setSelectedCounties] = useState<County[]>([]);
  const [cartCounties, setCartCounties] = useState<County[]>([]);

  const isMaxNumberOfCountiesReached =
    selectedCounties.length + cartCounties.length >= MAX_NUMBER_OF_COUNTIES;

  const {
    toastText: maxSelectedCountiesErrorToast,
    addToast: addMaxSelectedCountiesErrorToast,
    clearToast: clearMaxSelectedCountiesErrorToast,
  } = useToast();
  const {
    toastText: stripePaymentFailedToastText,
    addToast: addStripePaymentFailedToastText,
  } = useToast();
  const { isLoadingStates, isErrorStates, refetchStates } = useStates();

  const {
    data: counties,
    isLoading: isLoadingCounties,
    isError: isErrorCounties,
    refetch: refetchCounties,
  } = useQuery({
    queryKey: [QueryKeys.PRODUCTS, selectedState?.name],
    queryFn: () =>
      api.properties.propertiesControllerGetProducts({
        state: selectedState!.abbreviation as County['state'],
      }),
    enabled: !!selectedState,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      api.stripe.stripeControllerCreateCheckoutSessionMultiple({
        requestBody: {
          priceIds: cartCounties.map((county) => county.priceId) as string[],
        },
      }),
    onSuccess: (data) => {
      window.open(data.checkoutUrl);
    },
    onError: addStripePaymentFailedToastText,
  });

  const toggleSelectedAllCounties = () => {
    if (!counties) return;

    setChecked((prevChecked) => {
      if (prevChecked) {
        setSelectedCounties([]);
        return false;
      }

      const remainingSlots = MAX_NUMBER_OF_COUNTIES - cartCounties.length;

      const newSelection = counties.slice(0, remainingSlots);
      setSelectedCounties(newSelection);

      if (counties.length > remainingSlots) {
        addMaxSelectedCountiesErrorToast(
          'You can only subscribe to a maximum of 20 counties at a time. Once you`ve completed this checkout, you`ll be able to select more counties in the next transaction',
          null
        );
      }

      return true;
    });
  };

  const toggleIndividualCounty = (county: County, isChecked: boolean) => {
    if (isChecked && isMaxNumberOfCountiesReached) return;

    setSelectedCounties((prevSelected) =>
      isChecked
        ? [...prevSelected, county]
        : prevSelected.filter((c) => c.id !== county.id)
    );

    if (!isChecked && checked) setChecked(false);
  };

  const checkIsCountyInCart = (county: County) =>
    cartCounties.some((c) => c.id === county.id);

  const addSelectedToCart = () => {
    setCartCounties((prevCart) => {
      const newCounties = selectedCounties.filter(
        (county) => !prevCart.some((c) => c.id === county.id)
      );
      return [...prevCart, ...newCounties];
    });
    setSelectedCounties([]);
    setChecked(false);
  };

  const removeFromCart = (countyId: string) => {
    setCartCounties((prevCart) => prevCart.filter((c) => c.id !== countyId));
  };

  const isLoading = isLoadingStates || isLoadingCounties;
  const isError = isErrorStates || isErrorCounties;

  return (
    <>
      <div className="w-full grid grid-rows-[auto_1fr]">
        <div className="m-4">
          <div className="sm:grid sm:grid-cols-2 gap-4">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold text-gray-900">Order</h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all counties that are on the market for property
                listings subscription.
              </p>
            </div>

            <div className="flex gap-4 mt-4 sm:mt-0 sm:flex-none h-full">
              <div className="flex gap-2 flex-wrap px-2 py-1 w-full border rounded-lg max-h-20 overflow-y-auto">
                {cartCounties.length > 0 ? (
                  cartCounties.map((county) => (
                    <div
                      key={county.id}
                      className="flex items-center gap-2 rounded bg-white h-fit py-0.5 px-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                    >
                      {`${county.name}, ${county.state}`}
                      <button
                        className="text-red-600 hover:text-red-700"
                        onClick={() => removeFromCart(county.id)}
                      >
                        x
                      </button>
                    </div>
                  ))
                ) : (
                  <span className="italic text-sm">No county in the cart</span>
                )}
              </div>
              <div className="flex flex-shrink-0 h-fit gap-2">
                <Button
                  onClick={mutate as () => void}
                  disabled={!cartCounties.length || isPending}
                >
                  {isPending ? 'Loading...' : 'Checkout'}
                </Button>
                <Button
                  onClick={() => setCartCounties([])}
                  disabled={!cartCounties.length}
                  color={'none'}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 max-w-80">
            <SelectState
              selectedState={selectedState}
              setSelectedState={setSelectedState}
            />
          </div>
        </div>
        <StateContainer
          isLoading={isLoading}
          isError={isError}
          onErrorButtonClick={() =>
            Promise.all([refetchStates(), refetchCounties()])
          }
        >
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              {selectedState ? (
                <div className="relative">
                  {selectedCounties.length > 0 && (
                    <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                      <Button
                        onClick={addSelectedToCart}
                        color={'success'}
                        size={'extraSmall'}
                      >
                        + Add to Cart
                      </Button>
                      <span
                        className={`text-sm ${
                          isMaxNumberOfCountiesReached
                            ? 'text-red-400'
                            : 'text-gray-400'
                        }`}
                      >
                        {selectedCounties.length} selected
                        {cartCounties.length > 0 &&
                          ` / ${cartCounties.length} in cart`}
                        {isMaxNumberOfCountiesReached &&
                          ' - max 20 per checkout (you can subscribe to more after this)'}
                      </span>
                    </div>
                  )}
                  {counties && counties?.length > 0 ? (
                    <table className="min-w-full table-fixed divide-y divide-gray-300">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="relative px-7 sm:w-12 sm:px-6"
                          >
                            <input
                              type="checkbox"
                              className="absolute left-4 top-1/2 -mt-2 h-4 w-4 cursor-pointer disabled:cursor-default"
                              ref={checkbox}
                              checked={checked}
                              onChange={toggleSelectedAllCounties}
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
                                isCountySelected
                                  ? 'bg-gray-100'
                                  : 'hover:bg-gray-50'
                              } ${
                                isCountyInCart
                                  ? 'cursor-default pointer-events-none opacity-25'
                                  : `${
                                      (!isMaxNumberOfCountiesReached ||
                                        isCountySelected) &&
                                      'cursor-pointer'
                                    }`
                              }`}
                              onClick={() =>
                                toggleIndividualCounty(
                                  county,
                                  !isCountySelected
                                )
                              }
                            >
                              <td className=" px-7 sm:w-12 sm:px-6 group">
                                {/* TOOLTIP - mora unutar td-a zbog table, u suprotnom pobrka tabelu */}
                                <div
                                  className={`absolute top-0 -translate-y-full bg-gray-500 left-1/2 -translate-x-1/2 p-1 px-2 rounded-xl text-sm text-white opacity-0 invisible group-hover:opacity-100 ${
                                    isMaxNumberOfCountiesReached &&
                                    !isCountySelected &&
                                    'group-hover:visible transition-opacity'
                                  }`}
                                >
                                  Maximum limit reached. You can select up to 20
                                  counties.
                                  <div className="w-2 h-2 bg-gray-500 absolute left-1/2 -translate-x-1/2 rotate-45"></div>
                                </div>

                                <input
                                  type="checkbox"
                                  className={`absolute left-4 top-1/2 -mt-2 h-4 w-4 cursor-pointer disabled:cursor-default`}
                                  checked={isCountySelected || isCountyInCart}
                                  onClick={(e) => e.stopPropagation()} // Sprečava dvostruki klik
                                  disabled={
                                    isMaxNumberOfCountiesReached &&
                                    !isCountySelected
                                  }
                                  onChange={(e) =>
                                    toggleIndividualCounty(
                                      county,
                                      e.target.checked
                                    )
                                  }
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
                  ) : (
                    <p className="italic">
                      No counties for the selected state:{' '}
                      <span className="font-medium">{selectedState.name}</span>
                    </p>
                  )}
                </div>
              ) : (
                <h1 className="text-xl font-medium">
                  Please, choose your state.
                </h1>
              )}
            </div>
          </div>
        </StateContainer>
      </div>
      {stripePaymentFailedToastText && (
        <Toast text={stripePaymentFailedToastText} type={'error'} />
      )}
      {maxSelectedCountiesErrorToast && (
        <Toast
          text={maxSelectedCountiesErrorToast}
          type={'error'}
          position={'topCenter'}
          renderAdditionalComponent={
            <div
              className="w-5 h-5 ml-2 cursor-pointer hover:scale-110 flex-shrink-0"
              onClick={clearMaxSelectedCountiesErrorToast}
            >
              <XMarkIcon />
            </div>
          }
        />
      )}
    </>
  );
};
