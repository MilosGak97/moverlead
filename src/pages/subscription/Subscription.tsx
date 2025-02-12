import { useMutation, useQuery } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { QueryKeys } from '../../enums/queryKeys';
import { api } from '../../api/api';
import { LoadingState } from '../../components/LoadingState';
import { ErrorState } from '../../components/ErrorState';
import { SelectState } from './components/SelectState';
import { useStates } from '../../hooks/useStates';
import { County, StateResponseDto } from '../../generated-api';
import { useToast } from '../../hooks/useToast';
import { Toast } from '../../components/Toast';

type StateOptions = StateResponseDto['states'][number];
export type State = { id: StateOptions; name: StateOptions };

export const Subscription = () => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [selectedCounties, setSelectedCounties] = useState<County[]>([]);
  const [cartCounties, setCartCounties] = useState<County[]>([]);

  const {
    toastText: maxSelectedCountiesErrorToast,
    addToast: addMaxSelectedCountiesErrorToast,
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
        state: selectedState!.name,
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

  const toggleSelectedCounty = () => {
    setChecked((prevState) => !prevState);
    if (selectedCounties.length === counties?.length) {
      setSelectedCounties([]);
    } else {
      setSelectedCounties(counties as County[]);
    }
  };

  const toggleIndividualCounty = (county: County, isChecked: boolean) => {
    setSelectedCounties((prevSelected) =>
      isChecked
        ? [...prevSelected, county]
        : prevSelected.filter((c) => c.id !== county.id)
    );
  };

  const isCountyInCart = (county: County) =>
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

  const handleCheckoutClick = () => {
    if (cartCounties.length > 20) {
      addMaxSelectedCountiesErrorToast(
        'You cannot subscribe to more than 20 counties at once'
      );

      return;
    }

    mutate();
  };

  const isLoading = isLoadingStates || isLoadingCounties;
  const isError = isErrorStates || isErrorCounties;

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:grid sm:grid-cols-2 gap-4">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">
              Subscription
            </h1>
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
                <span
                  className="italic text-sm
"
                >
                  No county in the cart
                </span>
              )}
            </div>
            <div className="flex flex-shrink-0 h-fit gap-2">
              <button
                type="button"
                disabled={!cartCounties.length}
                className="rounded-md bg-[#4379F2] px-3 py-1.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 disabled:border-gray-300 disabled:bg-gray-100"
                onClick={handleCheckoutClick}
              >
                {isPending ? 'Loading...' : 'Checkout'}
              </button>
              <button
                disabled={!cartCounties.length}
                type="button"
                className="items-center rounded bg-white px-2 py-1 text-sm font-semibold text-red-950 shadow-sm ring-1 ring-inset ring-red-900 hover:bg-gray-50 disabled:opacity-30"
                onClick={() => setCartCounties([])}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 mb-4 max-w-80">
          <SelectState
            selectedState={selectedState}
            setSelectedState={setSelectedState}
          />
        </div>
        {isLoading && <LoadingState />}
        {isError && (
          <ErrorState
            onRefetchClick={() =>
              Promise.all([refetchStates(), refetchCounties()])
            }
          />
        )}
        {!isLoading && !isError && (
          <div className="mt-2 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                {selectedState ? (
                  <div className="relative">
                    {selectedCounties.length > 0 && (
                      <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                        <button
                          type="button"
                          className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={addSelectedToCart}
                        >
                          Add to Cart
                        </button>
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
                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4"
                                ref={checkbox}
                                checked={checked}
                                onChange={toggleSelectedCounty}
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
                            const isCountyInCard = isCountyInCart(county);

                            return (
                              <tr
                                key={county.id}
                                className={
                                  isCountySelected ? 'bg-gray-50' : undefined
                                }
                              >
                                <td className="relative px-7 sm:w-12 sm:px-6 group">
                                  <input
                                    type="checkbox"
                                    className={`absolute left-4 top-1/2 -mt-2 h-4 w-4  ${
                                      isCountyInCard &&
                                      'pointer-events-none opacity-25'
                                    }`}
                                    checked={isCountySelected || isCountyInCard}
                                    onChange={(e) =>
                                      toggleIndividualCounty(
                                        county,
                                        e.target.checked
                                      )
                                    }
                                  />
                                  {isCountyInCard && (
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
                        <span className="font-medium">
                          {selectedState.name}
                        </span>
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
          </div>
        )}
      </div>
      {stripePaymentFailedToastText && (
        <Toast text={stripePaymentFailedToastText} type={'error'} />
      )}
      {maxSelectedCountiesErrorToast && (
        <Toast text={maxSelectedCountiesErrorToast} type={'error'} />
      )}
    </>
  );
};
