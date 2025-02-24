import { ReactNode } from 'react';
import { PuffLoader } from 'react-spinners';

type PageStateContainerWithEmptyProps = {
  isEmpty: boolean;
  emptyTitle: string;
  emptyDescription?: string;
  onEmptyClick?: () => void;
  emptyButtonText?: string;
};

type PageStateContainerWithoutEmptyProps = {
  isEmpty?: never;
  emptyTitle?: never;
  emptyDescription?: never;
  onEmptyClick?: never;
  emptyButtonText?: never;
};

type PageStateContainerEmptyProps =
  | PageStateContainerWithEmptyProps
  | PageStateContainerWithoutEmptyProps;

type PageStateContainerProps = {
  isLoading: boolean;
  isError: boolean;
  onErrorButtonClick?: () => void;
  children: ReactNode;
} & PageStateContainerEmptyProps;

export const PageStateContainer = ({
  isLoading,
  isError,
  onErrorButtonClick,
  children,
  isEmpty,
  emptyTitle,
  emptyDescription,
  onEmptyClick,
  emptyButtonText,
}: PageStateContainerProps) => {
  if (isLoading)
    return (
      <div className="h-full w-full grid place-content-center">
        <PuffLoader color="#4379F2" />
      </div>
    );

  if (isError)
    return (
      <div className="h-full w-full grid place-content-center gap-4">
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
      <div className="h-full w-full grid place-content-center gap-4 text-center">
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

  return <>{children}</>;
};
