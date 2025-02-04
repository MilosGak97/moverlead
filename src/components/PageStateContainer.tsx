import { ReactNode } from 'react';

type PageStateContainerProps = {
  isLoading: boolean;
  isError: boolean;
  children: ReactNode;
};

export const PageStateContainer = ({
  isLoading,
  isError,
  children,
}: PageStateContainerProps) => {
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong!</div>;

  return <>{children}</>;
};
