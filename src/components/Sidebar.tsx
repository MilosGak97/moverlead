import {
  Cog6ToothIcon,
  HomeIcon,
  EqualsIcon,
  EyeIcon,
  ShoppingCartIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';
import SidebarItem from './SidebarItem.tsx';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { routes } from '../router/routes.ts';
import { PostcardIcon } from './iconography/PostcardIcon.tsx';

type SidebarProps = {
  onSidebarItemClick?: () => void;
};

const sidebarItems = [
  {
    name: 'Dashboard',
    href: routes.dashboard,
    icon: EqualsIcon,
    current: true,
  },
  { name: 'Listings', href: routes.listing, icon: HomeIcon, current: false },
  { name: 'Filtering', href: routes.filtering, icon: EyeIcon, current: false },
  {
    name: 'Order',
    href: routes.order,
    icon: ShoppingCartIcon,
    current: false,
  },
  {
    name: 'Subscriptions',
    href: routes.subscriptions,
    icon: CreditCardIcon,
    current: false,
  },
  {
    name: 'Postcard Designs',
    href: routes.postcardDesigns,
    icon: PostcardIcon,
    current: false,
  },
];

const Sidebar = ({ onSidebarItemClick }: SidebarProps) => {
  return (
    <>
      <div className="flex grow flex-col gap-y-4 overflow-y-auto bg-primary px-6 pb-4">
        {/* Logo */}
        <div className="flex h-16 shrink-0 items-center ">
          <NavLink to="dashboard" onClick={onSidebarItemClick}>
            <img alt="Your Company" src={logo} className="h-10 w-auto" />
          </NavLink>
        </div>

        {/* Rest of sidebar */}

        <nav className="flex flex-1 flex-col  ">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {sidebarItems.map((item) => (
                  <SidebarItem
                    key={item.name}
                    name={item.name}
                    href={item.href}
                    icon={item.icon}
                    current={item.current}
                    onSidebarItemClick={onSidebarItemClick}
                  />
                ))}
              </ul>
            </li>

            <SidebarItem
              key="Settings"
              name="Settings"
              href={routes.settings}
              icon={Cog6ToothIcon}
              onSidebarItemClick={onSidebarItemClick}
            />
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
