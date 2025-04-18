import { useLayoutEffect, useRef, useState, useEffect } from 'react';

import { FilterListings } from './components/FilterSelection.tsx';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../../api/api.ts';
import { QueryKeys } from '../../../enums/queryKeys.ts';
import {
  ListingFilterProvider,
  useListingFilterContext,
} from './context/ListingFilterContext.tsx';
import { ExportOptions } from './components/ExportOptions.tsx';
import { ListingTable } from './components/ListingTable.tsx';
import { usePagination } from '../../../hooks/usePagination.ts';
import { ItemsTable } from '../../../components/ItemsTable.tsx';
import { Button } from '../../../components/Button.tsx';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../router/routes.ts';
import { useSuccessGetData } from '../../../hooks/useSuccessGetData.ts';

const ListingsView = () => {
  const navigate = useNavigate();
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedListings, setSelectedListings] = useState<string[]>([]);
  const {
    date,
    propertyValue,
    selectedStatesList,
    filteredStatus,
    propertyStatus,
  } = useListingFilterContext();

  const selectedListingCount = selectedListings.length;

  const getListingQueryKey = [
    QueryKeys.LISTINGS,
    selectedStatesList,
    date,
    propertyValue,
    filteredStatus,
    propertyStatus,
  ];

  const {
    data: subscribedStates,
    isLoading: isLoadingSubscribedStates,
    isError: isErrorSubscribedStates,
    refetch: refetchSubscribedStates,
  } = useQuery({
    queryKey: [QueryKeys.ACTIVE_SUBSCRIPTIONS_STATES],
    queryFn: () => api.properties.propertiesControllerGetActiveStates(),
  });

  useSuccessGetData({
    data: subscribedStates,
    callback: (subscribedStates) => console.log(subscribedStates),
  });

  const {
    items,
    totalItems,
    currentPage,
    isLoading: isLoadingListing,
    isError: isErrorListing,
    refetch,
    setItemsPerPage,
    itemsPerPage,
    setPage,
  } = usePagination({
    queryKey: getListingQueryKey,
    queryFn: (limit, offset) =>
      api.properties.propertiesControllerGetListings({
        state: selectedStatesList,
        dateTo: date.to || undefined,
        dateFrom: date.from || undefined,
        propertyValueTo: propertyValue.to || undefined,
        propertyValueFrom: propertyValue.from || undefined,
        propertyStatus,
        filteredStatus,
        limit,
        offset,
      }),
  });

  const {
    isLoading: isLoadingStates,
    isError: isErrorStates,
    refetch: refetchStates,
  } = useQuery({
    queryKey: [QueryKeys.STATES],
    queryFn: () => api.properties.propertiesControllerListStates(),
  });

  useLayoutEffect(() => {
    if (checkbox.current) {
      const isIndeterminate =
        selectedListingCount > 0 && selectedListingCount < totalItems;
      setChecked(selectedListingCount === totalItems);
      setIndeterminate(isIndeterminate);
      checkbox.current.indeterminate = isIndeterminate; // Set indeterminate directly on the DOM element
    }
  }, [selectedListings, selectedListingCount]);

  function toggleAll() {
    const currentPageItemIds = items?.map((p) => p?.id || '') || [];

    const areAllSelected = currentPageItemIds.every((id) =>
      selectedListings.includes(id)
    );

    if (areAllSelected) {
      setSelectedListings((prevSelected) =>
        prevSelected.filter((id) => !currentPageItemIds.includes(id))
      );
    } else {
      setSelectedListings((prevSelected) => [
        ...prevSelected,
        ...currentPageItemIds.filter((id) => !prevSelected.includes(id)),
      ]);
    }
  }

  function toggleIndividual(id: string, isChecked: boolean) {
    setSelectedListings((prevSelected) =>
      isChecked ? [...prevSelected, id] : prevSelected.filter((e) => e !== id)
    );
  }

  const isLoading =
    isLoadingListing || isLoadingStates || isLoadingSubscribedStates;
  const isError = isErrorListing || isErrorStates || isErrorSubscribedStates;

  useEffect(() => {
    if (checkbox.current) {
      checkbox.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className="w-full h-full grid grid-rows-[auto_1fr]">
      <div className="m-4 mb-0">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-900">Listings</h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all properties that are on the market in selected areas.
            </p>
          </div>

          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Button onClick={() => console.log('Add more leads')}>
              Add More Leads
            </Button>
          </div>
        </div>

        <FilterListings
          totalCount={totalItems}
          selectedItemsCount={selectedListingCount}
        />
        <ExportOptions
          selectedListings={selectedListings}
          getListingQueryKey={getListingQueryKey}
        />
      </div>
      <ItemsTable
        isLoading={isLoading}
        isError={isError}
        onErrorButtonClick={() =>
          Promise.all([refetch(), refetchStates(), refetchSubscribedStates()])
        }
        isEmpty={!items.length}
        emptyTitle={'No properties available at the moment.'}
        emptyDescription={'Check again tomorrow or subscribe to more counites'}
        emptyButtonText={'Order now'}
        onEmptyClick={() => navigate(routes.order)}
        paginationData={{
          currentPage,
          onPageClick: setPage,
          totalNumberOfItems: totalItems,
          itemsPerPage,
          onItemsPerPageChange: setItemsPerPage,
        }}
      >
        <ListingTable
          checkbox={checkbox}
          checked={checked}
          toggleAll={toggleAll}
          toggleIndividual={toggleIndividual}
          selectedListings={selectedListings}
          items={items}
        />
      </ItemsTable>
    </div>
  );
};

export const Listings = () => {
  return (
    <ListingFilterProvider>
      <ListingsView />
    </ListingFilterProvider>
  );
};
