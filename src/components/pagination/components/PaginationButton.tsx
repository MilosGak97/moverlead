import { ReactNode } from 'react';

type PaginationButtonProps = {
  isDisabled: boolean;
  onClick: () => void;
  children: ReactNode;
};

export const PaginationButton = ({
  isDisabled,
  onClick,
  children,
}: PaginationButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type="button"
      className="items-center rounded px-3 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50 disabled:bg-gray-100 disabled:checked:bg-gray-100 disabled:ring-gray-100 disabled:text-gray-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
