/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useEffect, useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/dark.css';
import 'flatpickr/dist/flatpickr.css';
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';
import './flatpickr.css';

import { useDebounceValue } from '../../../../../hooks/useDebounceValue';
import { useListingFilterContext } from '../../context/ListingFilterContext';

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

  const handleDateChange = (fieldKey: keyof typeof date, value: Date[]) => {
    const selected = value[0];
    setLocalDate((prev) => ({
      ...prev,
      [fieldKey]: selected?.toISOString() || '',
    }));
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

  console.log(localDate.from || '', 'localDateFrom');

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
            <Flatpickr
              options={{
                enableTime: true,
                dateFormat: 'Y-m-d h:i K',
                maxDate: 'today',
                static: true,
                disableMobile: true,
                plugins: [confirmDatePlugin({})],
              }}
              value={localDate.from || ''}
              onClose={(value) => handleDateChange('from', value)}
              render={({ render: _, ...props }, ref) => (
                <input
                  {...props}
                  ref={ref}
                  readOnly
                  placeholder="From"
                  className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-primary sm:text-sm"
                />
              )}
            />
            <Flatpickr
              options={{
                enableTime: true,
                dateFormat: 'Y-m-d H:i K',
                maxDate: 'today',
                static: true,
                disableMobile: true,
                plugins: [confirmDatePlugin({})],
              }}
              value={localDate.to || ''}
              onClose={(value) => handleDateChange('to', value)}
              render={({ render: _, ...props }, ref) => (
                <input
                  {...props}
                  ref={ref}
                  readOnly
                  placeholder="To"
                  className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-primary sm:text-sm"
                />
              )}
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};
