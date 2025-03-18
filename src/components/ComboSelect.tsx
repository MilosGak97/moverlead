'use client';

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useMemo, useState } from 'react';
import {
  StateOption,
  useListingFilterContext,
} from '../pages/protected/listing/context/ListingFilterContext';
import { useStates } from '../hooks/useStates';

export const ComboSelect = () => {
  const [inputValue, setInputValue] = useState('');
  const { states, setStates } = useListingFilterContext();

  const { states: statesOptions } = useStates();

  const filteredStates =
    inputValue === ''
      ? statesOptions ?? []
      : (statesOptions ?? []).filter((state) =>
          state.name.toLowerCase().includes(inputValue.toLowerCase())
        );

  const selectedStatesNameList = useMemo(
    () => states?.map((state) => state.name).join(', '),
    [states]
  );

  return (
    <Combobox
      multiple
      as="div"
      value={states as StateOption[]}
      onChange={(selectedStates) => {
        setInputValue('');
        setStates(selectedStates);
      }}
      immediate
    >
      <Label className="block text-sm font-medium text-gray-900">
        Select State
      </Label>
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-900 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm overflow-hidden overflow-ellipsis"
          onChange={(event) => setInputValue(event.target.value)}
          onBlur={() => setInputValue('')}
          value={inputValue}
          placeholder={selectedStatesNameList}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="size-5 text-gray-400"
            aria-hidden="true"
          />
        </ComboboxButton>

        {filteredStates.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
            {filteredStates.map((state) => (
              <ComboboxOption
                key={state.name}
                value={state}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white"
              >
                <span className="block truncate group-data-[selected]:font-semibold">
                  {state.name}
                </span>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-blue-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="size-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
};
