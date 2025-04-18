import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '@heroicons/react/20/solid';
import { FilteredStatus } from '../../../../enums/filteredStatus';

export const filterButtonOptionIds = {
  empty: 'filtering--empty-btn',
  noData: 'filtering--no-data-btn',
  furnished: 'filtering--furnished-btn',
};

export const filterButtonOptions = [
  {
    id: filterButtonOptionIds.empty,
    label: 'Empty',
    icon: ArrowLeftIcon,
    value: FilteredStatus.EMPTY,
    reverse: true,
  },
  {
    id: filterButtonOptionIds.noData,
    label: 'No Data',
    icon: ArrowUpIcon,
    value: FilteredStatus.NO_DATA,
  },
  {
    id: filterButtonOptionIds.furnished,
    label: 'Furnished',
    icon: ArrowRightIcon,
    value: FilteredStatus.FURNISHED,
  },
];
