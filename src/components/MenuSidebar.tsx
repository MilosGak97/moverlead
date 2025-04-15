import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import Sidebar from './Sidebar.tsx';

interface Props {
  sidebarOpen: boolean;
  setSidebarClose: () => void;
}

const MenuSidebar = ({ sidebarOpen, setSidebarClose }: Props) => {
  return (
    <>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarClose}
        className="relative z-50 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          onClick={setSidebarClose}
        />
        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  onClick={setSidebarClose}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                </button>
              </div>
            </TransitionChild>
            <Sidebar onSidebarItemClick={setSidebarClose} />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MenuSidebar;
