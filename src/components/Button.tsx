import { HTMLProps, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'border border-transparent text-sm block px-3 py-2 text-center font-semibold text-white shadow-sm',
  {
    variants: {
      size: {
        extraSmall: 'px-2 py-1',
        small: 'py-2 px-4',
        base: 'px-3 py-2',
        large: 'px-6 py-3 text-xl',
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
  className?: string;
} & VariantProps<typeof buttonVariants> &
  Omit<HTMLProps<HTMLButtonElement>, 'ref' | 'onClick' | 'type' | 'size'>;

export const Button = ({
  children,
  onClick,
  size,
  color,
  rounded,
  type = 'button',
  className,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={twMerge(buttonVariants({ size, color, rounded }), className)}
      onClick={onClick}
      type={type}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
