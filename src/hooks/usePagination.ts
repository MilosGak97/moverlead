import { QueryKey, useQuery } from '@tanstack/react-query';
import { useReducer, useState, useCallback } from 'react';
import { useDebounce } from './useDebounce';

export enum PaginationActionTypes {
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_ITEMS_PER_PAGE = 'SET_ITEMS_PER_PAGE',
}

type PaginationResponse<T> = {
  result: T[];
  totalRecords: number;
  currentPage: number;
  totalPages: number;
  limit: number;
  offset: number;
};

type UsePaginationProps<T> = {
  queryKey: QueryKey;
  queryFn: (page: number, limit: number) => Promise<PaginationResponse<T>>;
  enabled?: boolean;
  initialPage?: number;
  initialItemsPerPage?: number;
};

type PaginationStateData = {
  currentPage: number;
  itemsPerPageQuery: number;
};

type PaginationStateAction =
  | { type: PaginationActionTypes.SET_CURRENT_PAGE; payload: number }
  | { type: PaginationActionTypes.SET_ITEMS_PER_PAGE; payload: number };

const paginationReducer = (
  state: PaginationStateData,
  action: PaginationStateAction
): PaginationStateData => {
  switch (action.type) {
    case PaginationActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case PaginationActionTypes.SET_ITEMS_PER_PAGE:
      return { currentPage: 0, itemsPerPageQuery: action.payload };
    default:
      return state;
  }
};

export const usePagination = <T>({
  queryKey,
  queryFn,
  enabled = true,
  initialPage = 1,
  initialItemsPerPage = 25,
}: UsePaginationProps<T>) => {
  const [itemsPerPageInputValue, setItemsPerPageInputValue] =
    useState(initialItemsPerPage);
  const [state, dispatch] = useReducer(paginationReducer, {
    //initialPage - 1 because the API is 0 based (limit 0)
    currentPage: initialPage - 1,
    itemsPerPageQuery: initialItemsPerPage,
  });

  const { currentPage, itemsPerPageQuery: limit } = state;
  const offset = currentPage * limit;

  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: [...queryKey, limit, offset],
    queryFn: () => queryFn(limit, offset),
    enabled,
  });

  const handleSetItemsPerPageInputValue = (itemsPerPage: number) => {
    setItemsPerPageInputValue(itemsPerPage);
  };

  const setPage = (page: number) =>
    dispatch({
      type: PaginationActionTypes.SET_CURRENT_PAGE,
      payload: page - 1,
    });
  const setItemsPerPageQuery = useCallback(() => {
    if (itemsPerPageInputValue) {
      dispatch({
        type: PaginationActionTypes.SET_ITEMS_PER_PAGE,
        payload: itemsPerPageInputValue,
      });
    }
  }, [itemsPerPageInputValue]);

  useDebounce(setItemsPerPageQuery);

  return {
    items: data?.result || [],
    totalItems: data?.totalRecords || 0,
    currentPage: currentPage + 1,
    totalPages: data?.totalPages || 1,
    limit: data?.limit || 10,
    offset: data?.offset || 0,
    isLoading,
    isError,
    refetch,
    setPage,
    itemsPerPage: itemsPerPageInputValue,
    setItemsPerPage: handleSetItemsPerPageInputValue,
    isLoadingInitially: isFetching,
  };
};
