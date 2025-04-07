import {
  Dialog as HeadlessUiDialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react';
import { ReactNode } from 'react';

export type DialogProps = {
  children: ReactNode;
  isDialogOpen: boolean;
  onClose: () => void;
};

export const Dialog = ({ children, isDialogOpen, onClose }: DialogProps) => {
  return (
    <HeadlessUiDialog
      open={isDialogOpen}
      onClose={onClose}
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
            className="relative flex background-white w-full max-w-lg"
            transition
          >
            <div className="bg-white p-4 rounded-xl w-full">{children}</div>
          </DialogPanel>
        </div>
      </div>
    </HeadlessUiDialog>
  );
};
