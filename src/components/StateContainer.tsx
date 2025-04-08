import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { PuffLoader } from 'react-spinners';

type StateContainerWithEmptyProps = {
  isEmpty: boolean;
  emptyTitle: string;
  emptyDescription?: string;
  onEmptyClick?: () => void;
  emptyButtonText?: string;
};

type StateContainerWithoutEmptyProps = {
  isEmpty?: never;
  emptyTitle?: never;
  emptyDescription?: never;
  onEmptyClick?: never;
  emptyButtonText?: never;
};

type StateContainerEmptyProps =
  | StateContainerWithEmptyProps
  | StateContainerWithoutEmptyProps;

export type StateContainerProps = {
  isLoading: boolean;
  isError: boolean;
  onErrorButtonClick?: () => void;
  children: ReactNode;
  isCentered?: boolean;
  includeMargin?: boolean;
  wrapperClassName?: string;
} & StateContainerEmptyProps;

export const StateContainer = ({
  isLoading,
  isError,
  onErrorButtonClick,
  children,
  isEmpty,
  emptyTitle,
  emptyDescription,
  onEmptyClick,
  emptyButtonText,
  isCentered = false,
  includeMargin = true,
  wrapperClassName,
}: StateContainerProps) => {
  const positionClass = isCentered ? 'absolute' : '';

  if (isLoading)
    return (
      <div
        className={`h-full w-full grid place-content-center ${positionClass}`}
      >
        <PuffLoader color="#4379F2" />
      </div>
    );

  if (isError)
    return (
      <div
        className={`h-full w-full grid place-content-center gap-4 ${positionClass}`}
      >
        <p>Something went wrong!</p>
        {onErrorButtonClick && (
          <button
            className="rounded-md bg-[#4379F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4379F2] disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100"
            onClick={onErrorButtonClick}
          >
            Try again!
          </button>
        )}
      </div>
    );

  if (isEmpty)
    return (
      <div
        className={`h-full w-full grid place-content-center gap-4 text-center ${positionClass}`}
      >
        <p>{emptyTitle}</p>
        {emptyDescription && <p>{emptyDescription}</p>}
        {onEmptyClick && (
          <button
            className="rounded-md bg-[#4379F2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4379F2] disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100"
            onClick={onEmptyClick}
          >
            {emptyButtonText}
          </button>
        )}
      </div>
    );

  return (
    <div
      className={twMerge(`w-full ${includeMargin && 'm-4'}`, wrapperClassName)}
    >
      {children}
    </div>
  );
};
