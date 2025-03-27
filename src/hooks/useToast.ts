import { useState } from 'react';

export const useToast = () => {
  const [toastText, setToastText] = useState<string | null>(null);

  const clearToast = () => setToastText(null);

  const addToast = (
    text = 'Something went wrong. Please try again.',
    duration: number | null = 5000
  ) => {
    setToastText(text);

    if (duration) {
      setTimeout(clearToast, duration);
    }
  };

  return { toastText, addToast, clearToast };
};
