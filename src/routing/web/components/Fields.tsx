import { ReactNode, useId } from 'react';
import clsx from 'clsx';
import React from 'react';

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-[#4379F2] focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm';

function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
}

export function TextField({
  label,
  renderRightSideLabel,
  type = 'text',
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & {
  label: string;
  renderRightSideLabel?: ReactNode;
}) {
  const id = useId();

  return (
    <div className={className}>
      {label && (
        <div className="flex itemscenter justify-between">
          <Label id={id}>{label}</Label>
          {renderRightSideLabel}
        </div>
      )}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
}

export function SelectField({
  label,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'select'>, 'id'> & { label: string }) {
  const id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  );
}
