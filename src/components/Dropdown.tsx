import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

export type DropdownItem = {
  label: string;
  value: string;
};

type DropdownProps = {
  label?: string;
  items: DropdownItem[];
  onDropdownItemClick: (item: DropdownItem) => void;
};

export const Dropdown = ({
  label = '25',
  items,
  onDropdownItemClick,
}: DropdownProps) => {
  return (
    <Menu as="div">
      <MenuButton className={'w-[calc(100%+1.5rem)] border rounded py-1'}>
        {label}
      </MenuButton>

      <MenuItems
        anchor={'bottom'}
        className={
          'flex flex-col gap-1 border w-[var(--button-width)] [--anchor-gap:0.5rem] rounded bg-gray-50'
        }
      >
        {items.map((item) => (
          <MenuItem
            key={item.value}
            as="button"
            onClick={() => onDropdownItemClick(item)}
            className={'p-1 hover:bg-white'}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
