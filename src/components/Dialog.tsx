import {
  Dialog as HeadlessUiDialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export type DialogProps = {
  children: ReactNode;
  isDialogOpen: boolean;
  onClose?: () => void;
  includeClosingIcon?: boolean;
  className?: string;
  wrapperClassName?: string;
};

export const Dialog = ({
  children,
  isDialogOpen,
  onClose,
  includeClosingIcon = false,
  className,
  wrapperClassName,
}: DialogProps) => {
  return (
    <HeadlessUiDialog
      open={isDialogOpen}
      onClose={() => {
        if (onClose) onClose();
      }}
      className="relative z-50"
      transition
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 w-full">
          <DialogPanel
            className={twMerge(
              'relative flex background-white w-full max-w-lg',
              wrapperClassName
            )}
            transition
          >
            {includeClosingIcon && (
              <XMarkIcon
                className="absolute top-3 right-3 w-10 cursor-pointer text-slate-800 hover:scale-105 active:scale-100 transition-transform"
                onClick={onClose}
              />
            )}
            <div
              className={twMerge('bg-white p-4 rounded-xl w-full', className)}
            >
              {children}
            </div>
          </DialogPanel>
        </div>
      </div>
    </HeadlessUiDialog>
  );
};
