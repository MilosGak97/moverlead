import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export type DropdownItem = {
  label: string;
  value: string;
};

type DropdownProps = {
  label?: string;
  items: DropdownItem[];
  onDropdownItemClick: (item: DropdownItem) => void;
  isDisabled?: boolean;
};

export const Dropdown = ({
  label = '25',
  items,
  onDropdownItemClick,
  isDisabled = false,
}: DropdownProps) => {
  return (
    <Menu as="div">
      {({ open }) => (
        <>
          <MenuButton
            className={`w-[calc(100%+1.5rem)] border border-slate-900 rounded py-1.5 flex items-center justify-center gap-1 ${
              isDisabled &&
              'disabled:bg-gray-100 disabled:ring-gray-100 disabled:text-gray-300'
            }`}
            disabled={isDisabled}
          >
            {label}
            <ChevronDownIcon
              className={`size-4 transition-transform duration-200 ${
                open ? 'rotate-180' : ''
              }`}
            />
          </MenuButton>

          <MenuItems
            anchor="bottom"
            className="flex flex-col gap-1 border border-slate-900 w-[var(--button-width)] [--anchor-gap:0.5rem] rounded bg-gray-50"
          >
            {items.map((item) => (
              <MenuItem
                key={item.value}
                as="button"
                onClick={() => onDropdownItemClick(item)}
                className="p-1 hover:bg-white"
              >
                {item.label}
              </MenuItem>
            ))}
          </MenuItems>
        </>
      )}
    </Menu>
  );
};
