import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { useListingFilterContext } from '../context/ListingFilterContext';
import { useDebounceValue } from '../../../../hooks/useDebounceValue';

const currentDateFormatted = new Date().toISOString().slice(0, 16);

export const InputsSelect = () => {
  const { propertyValue, setPropertyValue, date, setDate } =
    useListingFilterContext();
  const [localPropertyValue, setLocalPropertyValue] = useState(propertyValue);
  const [localDate, setLocalDate] = useState(date);
  const selectedDateInputRef = useRef<HTMLInputElement | null>(null);

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
    console.log(e.target.value);
    setLocalDate((prev) => ({ ...prev, [fieldKey]: e.target.value }));

    requestAnimationFrame(() => e.target.blur());

    e.target.blur();
  };

  const handleDateInputClick = (e: MouseEvent<HTMLInputElement>) => {
    if (e.target === selectedDateInputRef.current) {
      e.currentTarget.blur();
    } else {
      selectedDateInputRef.current = e.currentTarget;
    }
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
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
            />
            <input
              placeholder="To"
              value={localPropertyValue.to || ''}
              onChange={(e) => handlePropertyValueChange(e, 'to')}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
            />
          </div>
        </div>
      </div>
      <div>
        <legend className="block font-medium leading-6 text-gray-900">
          Date
        </legend>
        <div className="mt-2">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="datetime-local"
              placeholder="From"
              step="900"
              value={localDate.from || currentDateFormatted}
              onChange={(e) => handleDateChange(e, 'from')}
              onFocus={(e) => e.target.showPicker()}
              onBlur={() => (selectedDateInputRef.current = null)}
              onClick={handleDateInputClick}
              max={currentDateFormatted}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 hover:cursor-pointer outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
            />
            <input
              type="datetime-local"
              placeholder="To"
              step="900"
              value={localDate.to || currentDateFormatted}
              onChange={(e) => handleDateChange(e, 'to')}
              onFocus={(e) => e.target.showPicker()}
              onBlur={() => (selectedDateInputRef.current = null)}
              onClick={handleDateInputClick}
              max={currentDateFormatted}
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 hover:cursor-pointer outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};
