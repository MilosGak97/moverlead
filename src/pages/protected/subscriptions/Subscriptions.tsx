import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '../../../enums/queryKeys';
import { api } from '../../../api/api';
import { StateContainer } from '../../../components/StateContainer';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../router/routes';
import { SelectStatus } from './components/SelectStatus';
import { SubscriptionStatus } from '../../../enums/subscriptionStatus';
import { useState } from 'react';
import { subscriptionStatusOptions } from './data/subscriptionStatusOptions';
import { ExpandableCard } from '../../../components/ExpandableCard';
import { formatDateToUs } from '../../../helpers/formatDateToUs';

export type SubscriptionStatusState = { id: SubscriptionStatus; name: string };

export const Subscriptions = () => {
  const navigate = useNavigate();
  const [selectedStatus, setSelectedStatus] = useState<SubscriptionStatusState>(
    subscriptionStatusOptions[0]
  );

  const selectedStatusId = selectedStatus?.id || SubscriptionStatus.ACTIVE;
  const isSelectedStatusActive = selectedStatusId === SubscriptionStatus.ACTIVE;

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [QueryKeys.SUBSCRIPTIONS, selectedStatusId],
    queryFn: () =>
      api.properties.propertiesControllerGetSubscriptions({
        stripeSubscriptionStatus: selectedStatusId,
      }),
  });

  return (
    <div className="w-full grid grid-rows-[auto_1fr]">
      <div className="m-4">
        <div className="sm:grid sm:grid-cols-2 gap-4">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">
              Subscriptions
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all states and counties you are subscribed to.
            </p>
          </div>
        </div>
        <div className="mt-8 max-w-80">
          <SelectStatus
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
        </div>
      </div>
      <StateContainer
        isLoading={isLoading}
        isError={isError}
        onErrorButtonClick={refetch}
        isEmpty={!data?.length}
        emptyTitle={
          isSelectedStatusActive
            ? 'No subscriptions at the moment.'
            : 'No subscription for the selected filter.'
        }
        emptyDescription={
          isSelectedStatusActive
            ? 'You can subscribe to countries by clicking button bellow'
            : undefined
        }
        onEmptyClick={
          isSelectedStatusActive ? () => navigate(routes.order) : undefined
        }
        emptyButtonText={'Subscribe'}
      >
        <div className="flex flex-col gap-4">
          {data?.map(
            ({
              id,
              currentPeriodStart,
              currentPeriodEnd,
              totalPrice,
              subscriptionItems,
            }) => (
              <ExpandableCard
                key={id}
                renderHeaderComponent={
                  <div className="flex items-center justify-between flex-col sm:flex-row gap-4 flex-wrap w-full text-center">
                    <span className="font-medium">
                      {`${formatDateToUs(
                        currentPeriodStart as string
                      )} - ${formatDateToUs(currentPeriodEnd as string)}`}
                    </span>
                    <span>
                      Total Price:{' '}
                      <span className="font-medium">${totalPrice}</span>
                    </span>
                  </div>
                }
              >
                <div className="p-4 flex flex-col gap-2">
                  {subscriptionItems?.map(({ name, price }) => (
                    <div
                      key={`${name} ${price}`}
                      className="border rounded-lg px-4 py-1 flex justify-between font-medium"
                    >
                      <span>{name}</span>
                      <span>${price}</span>
                    </div>
                  ))}
                </div>
              </ExpandableCard>
            )
          )}
        </div>
      </StateContainer>
    </div>
  );
};
