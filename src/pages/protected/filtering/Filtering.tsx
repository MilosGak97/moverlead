import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../../../api/api';
import { QueryKeys } from '../../../enums/queryKeys';
import { StateContainer } from '../../../components/StateContainer';
import { FilteredStatus } from '../../../enums/filteredStatus';
import { useCallback, useEffect, useState } from 'react';
import { Toast } from '../../../components/Toast';
import { useToast } from '../../../hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../router/routes';
import { Button } from '../../../components/Button';
import {
  filterButtonOptionIds,
  filterButtonOptions,
} from './data/filterButtonOptions';
import { useSwipeable } from 'react-swipeable';

const PAGINATION_LIMIT = 20;

export const Filtering = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { toastText, addToast } = useToast();
  const [currentProperty, setCurrentProperty] = useState(0);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [QueryKeys.PROPERTIES_FILTERING],
    queryFn: () =>
      api.properties.propertiesControllerFiltering({
        limit: PAGINATION_LIMIT,
      }),
    select: (data) => ({
      selectedProperties: data.result,
      count: data.totalRecords,
    }),
  });

  const isPropertyFilteringEmpty = !data?.selectedProperties?.[0];

  const removePropertyFilteringQuery = useCallback(() => {
    queryClient.removeQueries({
      queryKey: [QueryKeys.PROPERTIES_FILTERING],
    });
  }, [queryClient]);

  const { mutate, isPending } = useMutation({
    mutationFn: (selectedAction: FilteredStatus) => {
      return api.properties.propertiesControllerFilteringAction({
        id: data?.selectedProperties[currentProperty].id || '',
        requestBody: { action: selectedAction },
      });
    },
    onSuccess: () => {
      setActiveButton(null);
      if (currentProperty + 1 === PAGINATION_LIMIT) {
        removePropertyFilteringQuery();
        setCurrentProperty(0);
      } else {
        setCurrentProperty((prevState) => prevState + 1);
      }
    },
    onError: () => addToast(),
  });

  const onFilterButtonClick = useCallback(
    (filterStatus: FilteredStatus, buttonId: string) => {
      if (isPending) return;

      setActiveButton(buttonId);
      mutate(filterStatus);
    },
    [isPending, mutate]
  );

  const containerSwipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      onFilterButtonClick(FilteredStatus.EMPTY, filterButtonOptionIds.empty),
    onSwipedRight: () =>
      onFilterButtonClick(
        FilteredStatus.FURNISHED,
        filterButtonOptionIds.furnished
      ),
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'e' || event.key === 'ArrowLeft' || event.key === 'E') {
        onFilterButtonClick(FilteredStatus.EMPTY, filterButtonOptionIds.empty);
      } else if (
        event.key === 'f' ||
        event.key === 'ArrowRight' ||
        event.key === 'F'
      ) {
        onFilterButtonClick(
          FilteredStatus.FURNISHED,
          filterButtonOptionIds.furnished
        );
      } else if (
        event.key === 'n' ||
        event.key === 'ArrowUp' ||
        event.key === 'N'
      ) {
        onFilterButtonClick(
          FilteredStatus.NO_DATA,
          filterButtonOptionIds.noData
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mutate, onFilterButtonClick]);

  useEffect(() => {
    return () => {
      removePropertyFilteringQuery();
    };
  }, [removePropertyFilteringQuery]);

  return (
    <StateContainer
      isLoading={isLoading}
      isError={isError}
      onErrorButtonClick={refetch}
      isEmpty={isPropertyFilteringEmpty}
      emptyTitle={'Ooops.. There is nothing more to filter.'}
      emptyDescription={'Check again tomorrow or Subscribe to more counites'}
      emptyButtonText={'Order now'}
      onEmptyClick={() => navigate(routes.order)}
      isCentered
    >
      <>
        <div
          className="grid grid-cols-[repeat(auto-fill,_minmax(17.5rem,_1fr))] gap-4"
          {...containerSwipeHandlers}
        >
          {(data?.selectedProperties?.[currentProperty]?.photos || []).map(
            (picture, index) => (
              <div
                key={`${picture}${index}`}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={picture}
                  alt={`Property ${index + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            )
          )}
        </div>
        <div className="fixed bottom-0 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row gap-2 xl:gap-4 w-full sm:w-fit p-4 sm:p-0">
          {filterButtonOptions.map(
            ({
              id,
              value,
              label,
              icon: Icon,
              reverse,
              displayOnSmallDevices,
            }) => (
              <Button
                key={id}
                onClick={() => onFilterButtonClick(value, id)}
                size={'large'}
                className={`text-nowrap flex items-center justify-center gap-2 w-full ${
                  reverse && 'flex-row-reverse'
                } ${activeButton === id && 'bg-primaryActive'}`}
              >
                {label}
                <span
                  className={`${
                    !displayOnSmallDevices && 'hidden'
                  } flex items-center`}
                >
                  (
                  {displayOnSmallDevices && (
                    <span className="sm:hidden">Swipe&nbsp;</span>
                  )}{' '}
                  <Icon className={'w-5 h-5'} />)
                </span>
              </Button>
            )
          )}
        </div>
        <div
          className="fixed md:bottom-4 md:top-auto top-20 right-8"
          onClick={() => console.log('AAA')}
        >
          <div className="px-6 py-3 bg-primary text-white text-xl font-medium rounded-lg shadow-md min-w-20 w-full text-center">
            {isPending ? '...' : (data?.count || 0) - currentProperty}
          </div>
        </div>
      </>
      {toastText && <Toast text={toastText} />}
    </StateContainer>
  );
};
