import { ReactNode, useRef } from 'react';
import { useGetPaginationButtonsData } from './hooks/useGetPaginationButtonsData';
import { LoadingState } from '../LoadingState';
import { ErrorState } from '../ErrorState';

type PaginationProps = {
  currentPage: number;
  onPageClick: (page: number) => void;
  totalNumberOfItems: number;
  itemsPerPage?: number;
  isLoading: boolean;
  isError: boolean;
  onRefetchClick: () => void;
};

const PaginationContentWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full flex justify-center gap-10 ${className}`}>
      {children}
    </div>
  );
};

export const Pagination = ({
  currentPage,
  onPageClick,
  totalNumberOfItems,
  itemsPerPage = 10,
  isLoading,
  isError,
  onRefetchClick,
}: PaginationProps) => {
  const totalNumberOfItemsRef = useRef(totalNumberOfItems);
  totalNumberOfItemsRef.current =
    totalNumberOfItems || totalNumberOfItemsRef.current;

  const paginationRange = useGetPaginationButtonsData({
    totalNumberOfItems: totalNumberOfItemsRef.current,
    currentPage,
    itemsPerPage: itemsPerPage || 1,
  });

  if (isLoading) {
    return (
      <PaginationContentWrapper className={'h-10'}>
        <LoadingState />
      </PaginationContentWrapper>
    );
  }

  if (isError) {
    return (
      <PaginationContentWrapper>
        <ErrorState onRefetchClick={onRefetchClick} />
      </PaginationContentWrapper>
    );
  }

  if (!totalNumberOfItems) return;

  return (
    <PaginationContentWrapper>
      <div className="flex items-center gap-1">
        <button
          disabled={currentPage === 1}
          type="button"
          className="items-center rounded bg-white px-2 py-1 text-sm font-semibold text-red-950 shadow-sm ring-1 ring-inset ring-red-900 hover:bg-gray-50 disabled:opacity-30"
          onClick={() => onPageClick(currentPage - 1)}
        >
          U+0003C
        </button>

        {paginationRange?.map((pageIndicator, index) => {
          return typeof pageIndicator === 'string' ? (
            <span key={`${paginationRange} ${index}`}>{pageIndicator}</span>
          ) : (
            <button
              disabled={currentPage === 1}
              type="button"
              className="items-center rounded bg-white px-2 py-1 text-sm font-semibold text-red-950 shadow-sm ring-1 ring-inset ring-red-900 hover:bg-gray-50 disabled:opacity-30"
              onClick={() => onPageClick(pageIndicator)}
            >
              {pageIndicator}
            </button>
          );
        })}
        <button
          disabled={
            !paginationRange?.at(-1) || currentPage === paginationRange?.at(-1)
          }
          type="button"
          className="items-center rounded bg-white px-2 py-1 text-sm font-semibold text-red-950 shadow-sm ring-1 ring-inset ring-red-900 hover:bg-gray-50 disabled:opacity-30"
          onClick={() => onPageClick(currentPage + 1)}
        >
          U+0003E
        </button>
      </div>
    </PaginationContentWrapper>
  );
};
