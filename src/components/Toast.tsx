import { ReactNode } from 'react';

type ToastProps = {
  text: string;
  type?: 'success' | 'error';
  position?: 'bottomRight' | 'topCenter';
  renderAdditionalComponent?: ReactNode;
};

export const Toast = ({
  text,
  type = 'error',
  position = 'bottomRight',
  renderAdditionalComponent,
}: ToastProps) => {
  return (
    <div
      className={`fixed ${
        position === 'topCenter'
          ? 'top-4 left-1/2 -translate-x-1/2'
          : 'bottom-4 right-4'
      }
        ${type === 'success' ? 'bg-green-700' : 'bg-red-600'}
        text-white text-sm font-medium px-4 py-2 rounded shadow-lg animate-slide-in z-50 flex`}
    >
      {text}
      {renderAdditionalComponent}
    </div>
  );
};
