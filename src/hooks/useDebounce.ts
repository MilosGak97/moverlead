import { useEffect } from 'react';

export const useDebounce = <T>(callback: () => T, delay = 500) => {
  useEffect(() => {
    const debouncedFunction = setTimeout(callback, delay);

    return () => clearTimeout(debouncedFunction);
  }, [callback, delay]);
};
