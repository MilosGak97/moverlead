import { useMemo } from 'react';

import { getPaginationRange } from '../helpers/getPaginationRange';

type UseGetPaginationButtonsDataProps = {
  totalNumberOfItems: number;
  itemsPerPage: number;
  siblingCount?: number;
  currentPage: number;
};

export const useGetPaginationButtonsData = ({
  totalNumberOfItems,
  itemsPerPage,
  siblingCount = 1,
  currentPage,
}: UseGetPaginationButtonsDataProps) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalNumberOfItems / itemsPerPage);

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5;

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return getPaginationRange(1, totalPageCount);
    }

    /*
        Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    /*
        Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = getPaginationRange(1, leftItemCount);

      return [...leftRange, '...', totalPageCount];
    }

    /*
        Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = getPaginationRange(totalPageCount - rightItemCount + 1, totalPageCount);

      return [firstPageIndex, '...', ...rightRange];
    }

    /*
        Case 4: Both left and right dots to be shown
    */
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = getPaginationRange(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
    }
  }, [totalNumberOfItems, itemsPerPage, siblingCount, currentPage]);

  return paginationRange;
};
