import { ChangeEvent, useEffect, useState } from 'react';
import { useListingFilterContext } from '../pages/protected/listing/context/ListingFilterContext';
import { useDebounceValue } from '../hooks/useDebounceValue';

export const InputsSelect = () => {
  const { propertyValue, setPropertyValue, date, setDate } =
    useListingFilterContext();
  const [localPropertyValue, setLocalPropertyValue] = useState(propertyValue);
  const [localDate, setLocalDate] = useState(date);

  const debouncedPropertyValue = useDebounceValue(localPropertyValue, 500);
  const debouncedDate = useDebounceValue(localDate, 500);

  const handlePropertyValueChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldKey: keyof typeof propertyValue
  ) => {
    const value = Number(e.target.value);

    if (isNaN(value)) return;

    setLocalPropertyValue((prev) => ({ ...prev, [fieldKey]: value }));
  };

  const handleDateChange = (
    e: ChangeEvent<HTMLInputElement>,
    fieldKey: keyof typeof date
  ) => {
    setLocalDate((prev) => ({ ...prev, [fieldKey]: e.target.value }));
  };

  useEffect(() => {
    setPropertyValue(debouncedPropertyValue);
  }, [debouncedPropertyValue, setPropertyValue]);

  useEffect(() => {
    setDate(debouncedDate);
  }, [debouncedDate, setDate]);

  useEffect(() => {
    setLocalPropertyValue(propertyValue);
  }, [propertyValue]);

  useEffect(() => {
    setLocalDate(date);
  }, [date]);

  return (
    <fieldset className="flex flex-col gap-4">
      <div>
        <legend className="block font-medium leading-6 text-gray-900">
          Property Value
        </legend>
        <div className="mt-2">
          <div className="flex gap-4">
            <input
              placeholder="From"
              value={localPropertyValue.from || ''}
              onChange={(e) => handlePropertyValueChange(e, 'from')}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
            />
            <input
              placeholder="To"
              value={localPropertyValue.to || ''}
              onChange={(e) => handlePropertyValueChange(e, 'to')}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <div>
        <legend className="block font-medium leading-6 text-gray-900">
          Date
        </legend>
        <div className="mt-2">
          <div className="flex gap-4">
            <input
              type="date"
              placeholder="From"
              value={localDate.from}
              onChange={(e) => handleDateChange(e, 'from')}
              onFocus={(e) => e.target.showPicker()}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
            />
            <input
              type="date"
              placeholder="To"
              value={localDate.to}
              onChange={(e) => handleDateChange(e, 'to')}
              onFocus={(e) => e.target.showPicker()}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#4379F2] sm:text-sm/6"
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};
