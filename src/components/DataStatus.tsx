import { ReactNode } from 'react';
import { Button } from './Button';

type DataStatusWithButtonProps = {
  buttonText: string;
  onButtonClick: () => void;
  isLoading?: boolean;
};

type DataStatusWithoutButtonProps = {
  buttonText?: never;
  onButtonClick?: never;
  isLoading?: never;
};

type DataStatusButtonProps =
  | DataStatusWithButtonProps
  | DataStatusWithoutButtonProps;

type DataStatusProps = {
  icon: ReactNode;
  title: string;
  description: ReactNode;
} & DataStatusButtonProps;

export const DataStatus = ({
  icon,
  title,
  description,
  buttonText,
  onButtonClick,
  isLoading,
}: DataStatusProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex flex-col gap-4">
        <div className="grid place-content-center">{icon}</div>
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        <p className="text-slate-700">{description}</p>
      </div>
      {buttonText && (
        <Button
          onClick={onButtonClick}
          isLoading={isLoading}
          className="w-full mt-8"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};
