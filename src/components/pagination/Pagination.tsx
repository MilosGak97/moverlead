import { ReactNode, useRef } from 'react';
import { useGetPaginationButtonsData } from './hooks/useGetPaginationButtonsData';
import { PaginationButton } from './components/PaginationButton';
import { Dropdown } from '../Dropdown';
import {
  itemsPerPageOptions,
  MIN_ITEMS_PER_PAGE,
} from './data/itemsPerPageOptions';
import { PulseLoader } from 'react-spinners';
import { Button } from '../Button';

export type PaginationProps = {
  currentPage: number;
  onPageClick: (page: number) => void;
  totalNumberOfItems: number;
  itemsPerPage?: number;
  onItemsPerPageChange?: (itemsPerPage: number) => void;
  isLoading: boolean;
  isError: boolean;
  wrapperClassName?: string;
};

const PaginationContentWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`w-full flex justify-center gap-6 sm:gap-10 ${className}`}>
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
  wrapperClassName,
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
      <PaginationContentWrapper>
        <PulseLoader color={'#4379F2'} size={'0.75rem'} />
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
    <PaginationContentWrapper className={wrapperClassName}>
      <div className="flex items-center mr-4">
        <Dropdown
          label={itemsPerPage.toString()}
          items={itemsPerPageOptions}
          onDropdownItemClick={(item) =>
            onItemsPerPageChange?.(Number(item.value))
          }
          isDisabled={MIN_ITEMS_PER_PAGE >= totalNumberOfItems}
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
            <Button
              key={`${pageIndicator} ${index}`}
              disabled={currentPage === pageIndicator}
              onClick={() => onPageClick(pageIndicator)}
              color={'noneDark'}
              className="px-2 sm:px-3"
            >
              {pageIndicator}
            </Button>
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
