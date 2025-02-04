import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../../api/api';
import { QueryKeys } from '../../enums/queryKeys';
import { PageStateContainer } from '../../components/PageStateContainer';
import { FilteredStatus } from '../../enums/filteredStatus';
import { useState } from 'react';

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
  const [toast, setToast] = useState<string | null>(null);
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
    onError: () => {
      setToast('Something went wrong. Please try again.');
      setTimeout(() => {
        setToast(null);
      }, 5000);
    },
  });

  return (
    <PageStateContainer
      isLoading={isLoading}
      isError={isError}
      onErrorButtonClick={refetch}
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

      {/* Fixed buttons at the bottom */}
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

      {/* Fixed button on the right side */}
      <div className="fixed md:bottom-4 md:top-auto top-20 right-8">
        <div className="px-6 py-3 bg-[#4379F2] text-white text-xl font-medium rounded-lg shadow-md">
          {isPending ? '' : data?.count}
        </div>
      </div>
      {toast && (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white text-sm font-medium px-4 py-2 rounded shadow-lg animate-slide-in">
          {toast}
        </div>
      )}
    </PageStateContainer>
  );
};

export default Filtering;
