import { LeftArrowIcon } from '../../../../components/iconography/LeftArrowIcon';
import { RightArrowIcon } from '../../../../components/iconography/RightArrowIcon';
import { FilteredStatus } from '../../../../enums/filteredStatus';

export const filterButtonOptionIds = {
  empty: 'filtering--empty-btn',
  furnished: 'filtering--furnished-btn',
};

export const filterButtonOptions = [
  {
    id: filterButtonOptionIds.empty,
    label: 'Empty',
    icon: LeftArrowIcon,
    value: FilteredStatus.EMPTY,
    reverse: true,
  },
  {
    id: filterButtonOptionIds.furnished,
    label: 'Full',
    icon: RightArrowIcon,
    value: FilteredStatus.FURNISHED,
  },
];
