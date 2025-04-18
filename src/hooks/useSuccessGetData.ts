import { useEffect } from 'react';

type UseSuccessGetDataProps<T> = {
  data?: T;
  callback: (data: T) => void;
};

export const useSuccessGetData = <T>({
  data,
  callback,
}: UseSuccessGetDataProps<T>) => {
  useEffect(() => {
    if (data) {
      callback(data);
    }
  }, [callback, data]);
};
