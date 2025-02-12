type ToastProps = {
  text: string;
  type?: 'success' | 'error';
};

export const Toast = ({ text, type = 'error' }: ToastProps) => {
  return (
    <div
      className={`fixed bottom-4 right-4 ${
        type === 'success' ? 'bg-green-700' : 'bg-red-600'
      } text-white text-sm font-medium px-4 py-2 rounded shadow-lg animate-slide-in`}
    >
      {text}
    </div>
  );
};
