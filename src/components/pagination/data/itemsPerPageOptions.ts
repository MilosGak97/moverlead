import { DropdownItem } from '../../Dropdown';

export const MIN_ITEMS_PER_PAGE = 25;

export const itemsPerPageOptions: DropdownItem[] = [
  {
    label: MIN_ITEMS_PER_PAGE.toString(),
    value: MIN_ITEMS_PER_PAGE.toString(),
  },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
  { label: '500', value: '500' },
];
