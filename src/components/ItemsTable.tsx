import { Pagination, PaginationProps } from './pagination/Pagination';
import { StateContainer, StateContainerProps } from './StateContainer';

type ItemsTableProps = StateContainerProps & {
  paginationData: Omit<PaginationProps, 'isLoading' | 'isError'>;
};

export const ItemsTable = ({
  isLoading,
  isError,
  paginationData,
  children,
  ...stateContainerProps
}: ItemsTableProps) => {
  return (
    <StateContainer
      isLoading={isLoading}
      isError={isError}
      isCentered={false}
      {...stateContainerProps}
    >
      <div className="h-full grid grid-rows-[auto_1fr] gap-4">
        <div className={'p-px pr-1 overflow-auto'}>
          <div className="w-full">{children}</div>
        </div>
        <div className="mt-auto">
          <Pagination
            {...paginationData}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>
    </StateContainer>
  );
};
