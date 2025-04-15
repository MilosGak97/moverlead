import { ComponentType, SVGProps } from 'react';
import { NavLink } from 'react-router-dom';
interface Props {
  name: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>; // Type for an icon component
  current?: boolean;
  onSidebarItemClick?: () => void;
}

const SidebarItem = ({ name, href, icon: Icon, onSidebarItemClick }: Props) => {
  return (
    <>
      <li key={name} className="mt-auto">
        <NavLink
          to={href}
          onClick={() => {
            if (onSidebarItemClick) {
              onSidebarItemClick();
            }
          }}
          className={({ isActive }) => {
            return isActive
              ? 'bg-blue-600 text-white group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
              : 'text-indigo-200 hover:bg-blue-600 hover:text-white group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold';
          }}
        >
          <div className="w-6 h-6">
            <Icon aria-hidden="true" className="shrink-0" />
          </div>
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default SidebarItem;
