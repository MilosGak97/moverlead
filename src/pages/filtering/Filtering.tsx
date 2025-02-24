import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../../api/api';
import { QueryKeys } from '../../enums/queryKeys';
import { PageStateContainer } from '../../components/PageStateContainer';
import { FilteredStatus } from '../../enums/filteredStatus';
import { useEffect } from 'react';
import { Toast } from '../../components/Toast';
import { useToast } from '../../hooks/useToast';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../router/routes';

const filterButtonOptions = [
  {
    label: 'Furnished',
    value: FilteredStatus.FURNISHED,
  },
  {
    label: 'Empty',
    value: FilteredStatus.EMPTY,
  },
  {
    label: 'No Data',
    value: FilteredStatus.NO_DATA,
  },
];

const Filtering = () => {
  const navigate = useNavigate();
  const { toastText, addToast } = useToast();
  const queryClient = useQueryClient();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [QueryKeys.PROPERTIES_FILTERING],
    queryFn: () => api.properties.propertiesControllerFiltering(),
    select: (data) => ({
      selectedProperty: data.properties[0],
      count: data.count,
    }),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (selectedAction: FilteredStatus) =>
      api.properties.propertiesControllerFilteringAction({
        id: data?.selectedProperty.id || '',
        requestBody: { action: selectedAction },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PROPERTIES_FILTERING],
      });
    },
    onError: addToast,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'e' || event.key === 'ArrowLeft' || event.key === 'E') {
        mutate(FilteredStatus.EMPTY);
      } else if (
        event.key === 'f' ||
        event.key === 'ArrowRight' ||
        event.key === 'F'
      ) {
        mutate(FilteredStatus.FURNISHED);
      } else if (
        event.key === 'n' ||
        event.key === 'ArrowUp' ||
        event.key === 'N'
      ) {
        mutate(FilteredStatus.NO_DATA);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mutate]);

  return (
    <PageStateContainer
      isLoading={isLoading}
      isError={isError}
      onErrorButtonClick={refetch}
      isEmpty={false}
      emptyTitle={'Ooops.. There is nothing more to filter.'}
      emptyDescription={'Check again tomorrow or Subscribe to more counites'}
      emptyButtonText={'Order'}
      onEmptyClick={() => navigate(routes.order)}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {(data?.selectedProperty?.photos || []).map((picture, index) => (
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
        ))}
      </div>

      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
        {filterButtonOptions.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => mutate(value)}
            disabled={isPending}
            className="px-6 py-3 bg-[#4379F2] text-white text-xl font-medium rounded-lg shadow-md hover:bg-[#365bb0] transition-colors duration-300 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="fixed md:bottom-4 md:top-auto top-20 right-8">
        <div className="px-6 py-3 bg-[#4379F2] text-white text-xl font-medium rounded-lg shadow-md">
          {isPending ? '' : data?.count}
        </div>
      </div>
      {toastText && <Toast text={toastText} />}
    </PageStateContainer>
  );
};

export default Filtering;
