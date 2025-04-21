import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
import {
  ArrowDownTrayIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { api } from '../api/api.ts';
import { useNavigate } from 'react-router-dom';
import { routes } from '../router/routes.ts';
import { QueryKeys } from '../enums/queryKeys.ts';
import Avatar from './Avatar.tsx';
import { Modal } from './Modal.tsx';
import { useState } from 'react';

type Props = {
  setSidebarOpen: () => void;
};

const NavBar = ({ setSidebarOpen }: Props) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [isSignoutModalOpen, setIsSignoutModalOpen] = useState(false);

  const { data } = useQuery({
    queryKey: [QueryKeys.WHO_AM_I],
    queryFn: () => api.auth.authControllerGetProfile(),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () => api.auth.authControllerLogout(),
    onSuccess: () => {
      queryClient.invalidateQueries();
      queryClient.removeQueries();
      navigate(routes.auth.login);
    },
  });

  const userNavigation = [
    { name: 'Your profile', onClick: () => navigate(routes.settings) },
    { name: 'Sign out', onClick: () => setIsSignoutModalOpen(true) },
  ];

  return (
    <>
      <Modal
        title={'Are you sure you want to sign out?'}
        description={
          'You’ll need to log in again to access your dashboard and data.'
        }
        isDialogOpen={isSignoutModalOpen}
        onClose={() => setIsSignoutModalOpen(false)}
        onConfirmButtonClick={mutate}
        icon={<ArrowDownTrayIcon />}
        isConfirmButtonLoading={isPending}
        isConfirmButtonDisabled={isPending}
        isCancelButtonDisabled={isPending}
        primaryButtonClassName={'bg-red-700 hover:bg-red-800 active:bg-red-900'}
        iconWrapperClassName="bg-red-700"
      />
      <div className=" top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 ">
        <button
          type="button"
          onClick={setSidebarOpen}
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon aria-hidden="true" className="size-6" />
        </button>

        {/* Separator */}
        <div aria-hidden="true" className="h-6 w-px bg-gray-900/10 lg:hidden" />

        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form action="#" method="GET" className="grid flex-1 grid-cols-1">
            <input
              name="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
              className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm/6"
            />
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
            />
          </form>
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Separator */}
            <div
              aria-hidden="true"
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            />

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <MenuButton className="-m-1.5 flex items-center p-1.5">
                <span className="sr-only">Open user menu</span>
                <Avatar imageUrl={data?.logoUrl || ''} />
                <span className="hidden lg:flex lg:items-center">
                  <span
                    aria-hidden="true"
                    className="ml-4 text-sm/6 font-semibold text-gray-900"
                  >
                    {data?.companyName || ''}
                  </span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="ml-2 size-5 text-gray-400"
                  />
                </span>
              </MenuButton>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                {userNavigation.map((item) => (
                  <MenuItem key={item.name}>
                    <button
                      onClick={item.onClick}
                      className="block w-full text-left px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                    >
                      {item.name}
                    </button>
                  </MenuItem>
                ))}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
