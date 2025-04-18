import { useEffect, useRef } from 'react';

type UseSuccessGetDataProps<T> = {
  data?: T;
  callback: (data: T) => void;
};

export const useSuccessGetData = <T>({
  data,
  callback,
}: UseSuccessGetDataProps<T>) => {
  const count = useRef(0);

  useEffect(() => {
    if (data && !count.current) {
      count.current += 1;
      callback(data);
    }
  }, [callback, data]);
};
