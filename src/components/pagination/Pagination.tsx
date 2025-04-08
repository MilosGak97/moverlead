import { ReactNode, useRef } from 'react';
import { useGetPaginationButtonsData } from './hooks/useGetPaginationButtonsData';
import { LoadingState } from '../LoadingState';
import { PaginationButton } from './components/PaginationButton';
import { Dropdown } from '../Dropdown';
import { itemsPerPageOptions } from './data/itemsPerPageOptions';

export type PaginationProps = {
  currentPage: number;
  onPageClick: (page: number) => void;
  totalNumberOfItems: number;
  itemsPerPage?: number;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  isLoading: boolean;
  isError: boolean;
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
  onItemsPerPageChange,
  isLoading,
  isError,
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
        <span className="text-red-500">Something went wrong. Try again!</span>
      </PaginationContentWrapper>
    );
  }

  if (!totalNumberOfItems) return;

  return (
    <PaginationContentWrapper>
      <div className="flex items-center mr-4">
        <Dropdown
          label={itemsPerPage.toString()}
          items={itemsPerPageOptions}
          onDropdownItemClick={(item) =>
            onItemsPerPageChange?.(Number(item.value))
          }
        />
      </div>
      <div className="flex items-center gap-1">
        <PaginationButton
          isDisabled={currentPage === 1}
          onClick={() => onPageClick(currentPage - 1)}
        >
          &lt;
        </PaginationButton>

        {paginationRange?.map((pageIndicator, index) => {
          return typeof pageIndicator === 'string' ? (
            <span key={`${paginationRange} ${index}`}>{pageIndicator}</span>
          ) : (
            <PaginationButton
              key={`${pageIndicator} ${index}`}
              isDisabled={currentPage === pageIndicator}
              onClick={() => onPageClick(pageIndicator)}
            >
              {pageIndicator}
            </PaginationButton>
          );
        })}

        <PaginationButton
          isDisabled={
            !paginationRange?.at(-1) || currentPage === paginationRange?.at(-1)
          }
          onClick={() => onPageClick(currentPage + 1)}
        >
          &gt;
        </PaginationButton>
      </div>
    </PaginationContentWrapper>
  );
};
