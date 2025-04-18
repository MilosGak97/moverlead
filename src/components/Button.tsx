import { HTMLProps, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { ClipLoader } from 'react-spinners';

const buttonVariants = cva(
  'relative border border-transparent text-sm block text-center font-semibold text-white shadow-sm',
  {
    variants: {
      size: {
        extraSmall: 'px-2 py-1',
        small: 'py-2 px-4',
        base: 'px-3 py-2',
        large: 'px-4 xl:px-6 py-3 text-lg xl:text-xl',
      },
      color: {
        primary:
          'bg-primary hover:bg-primaryHover active:bg-primaryActive disabled:text-gray disabled:bg-blue-200',
        black: 'bg-slate-900 hover:bg-slate-800 active:bg-slate-700',
        none: 'bg-transparent text-slate-900 border-slate-200 hover:border-slate-300 active:bg-slate-100 disabled:border-slate-100 disabled:text-slate-300 disabled:bg-transparent',
        noneDark:
          'border-slate-900 text-slate-900 hover:bg-gray-50 active:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-300 disabled:border-transparent',
        white: 'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-100',
        success:
          'bg-success hover:bg-successHover active:bg-successActive disabled:bg-blue-200',
      },
      rounded: {
        small: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      size: 'base',
      color: 'primary',
      rounded: 'small',
    },
  }
);

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  isLoading?: boolean;
  className?: string;
} & VariantProps<typeof buttonVariants> &
  Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'onClick' | 'type' | 'size'>;

const ContentWrapper = ({
  children,
  isLoading,
}: {
  children: ReactNode;
  isLoading: boolean;
}) => {
  return isLoading ? (
    <span
      className={`${isLoading ? 'invisible pointer-events-none' : 'visible'}`}
    >
      {children}
    </span>
  ) : (
    children
  );
};

export const Button = ({
  children,
  onClick,
  size,
  color,
  rounded,
  type = 'button',
  isLoading = false,
  className,
  ...buttonProps
}: ButtonProps) => {
  const isBacgroundTransparent = color === 'none' || color === 'noneDark';

  return (
    <button
      className={twMerge(buttonVariants({ size, color, rounded }), className)}
      onClick={onClick}
      type={type}
      {...buttonProps}
    >
      <ContentWrapper isLoading={isLoading}>{children}</ContentWrapper>
      {isLoading && (
        <div className="absolute grid w-full h-full place-content-center top-0 left-0">
          <ClipLoader
            color={isBacgroundTransparent ? '#0f172a ' : 'white'}
            size={'1.5rem'}
          />
        </div>
      )}
    </button>
  );
};
