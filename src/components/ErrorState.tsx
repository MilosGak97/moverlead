type ErrorStateProps = {
  onRefetchClick: () => void;
};

export const ErrorState = ({ onRefetchClick }: ErrorStateProps) => {
  return (
    <div className="h-full w-full grid place-content-center gap-4  mt-4">
      <p> Something went wrong!</p>
      <button
        className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primaryHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100"
        onClick={onRefetchClick}
      >
        Try again!
      </button>
    </div>
  );
};
