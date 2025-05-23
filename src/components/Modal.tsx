import { ClipLoader } from 'react-spinners';
import { Dialog, DialogProps } from './Dialog';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ModalProps = Omit<DialogProps, 'children'> & {
  title: string;
  description: string;
  onConfirmButtonClick?: () => void;
  isConfirmButtonLoading?: boolean;
  isConfirmButtonDisabled?: boolean;
  isCancelButtonDisabled?: boolean;
  primaryButtonClassName?: string;
  iconWrapperClassName?: string;
  icon?: ReactNode;
};

export const Modal = ({
  title,
  description,
  onConfirmButtonClick,
  isConfirmButtonLoading,
  isConfirmButtonDisabled,
  isCancelButtonDisabled,
  onClose,
  icon,
  primaryButtonClassName,
  iconWrapperClassName,
  ...dialogProps
}: ModalProps) => {
  return (
    <Dialog onClose={onClose} {...dialogProps}>
      <div className="flex flex-col gap-4 text-center max-w-lg w-full">
        {icon && (
          <div
            className={twMerge(
              'w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-primary rounded-full text-white p-4',
              iconWrapperClassName
            )}
          >
            {icon}
          </div>
        )}
        <p className="text-2xl font-semibold">{title}</p>
        <p>{description}</p>
        <div className="grid grid-cols-2 gap-4 items-center">
          <button
            type="button"
            className="items-center rounded p-4 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-black hover:bg-gray-50 disabled:bg-gray-100 disabled:checked:bg-gray-100 disabled:ring-gray-100 disabled:text-gray-300"
            onClick={onClose}
            disabled={isCancelButtonDisabled}
          >
            Cancel
          </button>
          <button
            className={twMerge(
              'rounded-md bg-primary p-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:text-gray-300 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 grid place-items-center',
              primaryButtonClassName
            )}
            onClick={onConfirmButtonClick}
            disabled={isConfirmButtonDisabled}
          >
            <span className="invisible">Confirm</span>
            <div className="absolute grid place-items-center">
              {isConfirmButtonLoading ? (
                <ClipLoader color="white" size={'2rem'} />
              ) : (
                'Confirm'
              )}
            </div>
          </button>
        </div>
      </div>
    </Dialog>
  );
};
