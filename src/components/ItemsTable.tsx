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
    <div className="h-full flex flex-col justify-between p-4 gap-4">
      <StateContainer
        isLoading={isLoading}
        isError={isError}
        isCentered={false}
        includePadding={false}
        {...stateContainerProps}
      >
        <div className="h-full grid">
          <div className={'p-px pr-1 overflow-auto'}>{children}</div>
        </div>
      </StateContainer>
      <Pagination {...paginationData} isLoading={isLoading} isError={isError} />
    </div>
  );
};
