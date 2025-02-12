import { useState } from 'react';

export const useToast = () => {
  const [toastText, setToastText] = useState<string | null>(null);

  const addToast = (text = 'Something went wrong. Please try again.') => {
    setToastText(text);
    setTimeout(() => {
      setToastText(null);
    }, 5000);
  };

  return { toastText, addToast };
};
