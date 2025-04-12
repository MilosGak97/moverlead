import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { PuffLoader } from 'react-spinners';
import { Button } from './Button';

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
  includePadding?: boolean;
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
  includePadding = true,
  wrapperClassName,
}: StateContainerProps) => {
  const positionClass = isCentered ? 'absolute' : '';
  const paddingClass = includePadding ? 'p-4' : '';

  if (isLoading)
    return (
      <div
        className={`h-full w-full grid place-content-center ${paddingClass} ${positionClass}`}
      >
        <PuffLoader color="#4379F2" />
      </div>
    );

  if (isError)
    return (
      <div
        className={`h-full w-full grid place-content-center ${paddingClass} gap-4 ${positionClass}`}
      >
        <p>Something went wrong!</p>
        {onErrorButtonClick && (
          <Button onClick={onErrorButtonClick}>Try again!</Button>
        )}
      </div>
    );

  if (isEmpty)
    return (
      <div
        className={`h-full w-full grid place-content-center ${paddingClass} gap-4 text-center ${positionClass}`}
      >
        <p>{emptyTitle}</p>
        {emptyDescription && <p>{emptyDescription}</p>}
        {onEmptyClick && (
          <Button onClick={onEmptyClick}>{emptyButtonText}</Button>
        )}
      </div>
    );

  return (
    <div className={twMerge(`w-full ${paddingClass}`, wrapperClassName)}>
      {children}
    </div>
  );
};
