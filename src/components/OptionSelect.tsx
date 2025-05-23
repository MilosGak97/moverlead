type FilterOption<T> = {
  value: T;
  label: string;
};

type FilterGroup<T> = {
  title: string;
  options: FilterOption<T>[];
};

type Props<T> = {
  filterGroup: FilterGroup<T>;
  selectedValues: T[];
  onOptionSelected: (selectedOption: T) => void;
};

export const OptionSelect = <T,>({
  filterGroup,
  onOptionSelected,
  selectedValues,
}: Props<T>) => {
  return (
    <fieldset>
      <legend className="block font-medium line-clamp-1 text-nowrap">
        {filterGroup.title}
      </legend>
      <div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
        {filterGroup.options.map((option, optionIdx) => {
          const uniqueId = `${filterGroup.title.replace(
            /\s+/g,
            '-'
          )}-${optionIdx}`;

          return (
            <div key={option.value as string} className="flex gap-3">
              <div className="flex h-5 shrink-0 items-center">
                <div className="group grid size-4 grid-cols-1">
                  <input
                    value={option.value as string}
                    checked={selectedValues.includes(option.value)}
                    onChange={() => onOptionSelected(option.value)}
                    id={uniqueId}
                    name={`${filterGroup.title}-color[]`}
                    type="checkbox"
                    className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto hover:cursor-pointer"
                  />
                  <svg
                    fill="none"
                    viewBox="0 0 14 14"
                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-[:checked]:opacity-100"
                    />
                    <path
                      d="M3 7H11"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-[:indeterminate]:opacity-100"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor={uniqueId}
                className="text-base text-gray-600 sm:text-sm line-clamp-1 hover:cursor-pointer"
              >
                {option.label}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};
