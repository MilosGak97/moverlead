import {
  Combobox,
  Label,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import { Dispatch, SetStateAction, useState } from 'react';
import { SubscriptionStatusState } from '../Subscriptions';
import { subscriptionStatusOptions } from '../data/subscriptionStatusOptions';

type SelectStatusProps = {
  selectedStatus: SubscriptionStatusState;
  setSelectedStatus: Dispatch<SetStateAction<SubscriptionStatusState>>;
};

export const SelectStatus = ({
  selectedStatus,
  setSelectedStatus,
}: SelectStatusProps) => {
  const [inputValue, setInputValue] = useState('');

  const filteredOptions = subscriptionStatusOptions.filter(({ name }) =>
    name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <Combobox
      as="div"
      value={selectedStatus}
      onChange={(status) => {
        setSelectedStatus(status as SubscriptionStatusState);
        setInputValue('');
      }}
      immediate
    >
      <Label className="block text-sm font-medium text-gray-900">
        Select Status
      </Label>
      <div className="relative mt-2">
        <ComboboxInput
          className="block w-full rounded-md bg-white py-1.5 pl-3 pr-12 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-900 focus:outline focus:outline-2 focus:outline-blue-600 sm:text-sm overflow-hidden overflow-ellipsis"
          onChange={(event) => {
            console.log(event.target.value);
            setInputValue(event.target.value);
          }}
          onBlur={() => setInputValue('')}
          value={inputValue}
          placeholder={selectedStatus?.name || 'Select status'}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="size-5 text-gray-400"
            aria-hidden="true"
          />
        </ComboboxButton>

        <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {filteredOptions.map(({ id, name }) => (
            <ComboboxOption
              key={id}
              value={{ id, name }}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-600 data-[focus]:text-white"
            >
              <span className="block truncate group-data-[selected]:font-semibold">
                {name}
              </span>

              <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-blue-600 group-data-[selected]:flex group-data-[focus]:text-white">
                <CheckIcon className="size-5" aria-hidden="true" />
              </span>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </div>
    </Combobox>
  );
};
