import { Link } from 'react-router-dom'
import clsx from 'clsx'
import React from 'react'

const baseStyles = {
  solid:
      'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
      'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
}

const variantStyles = {
  solid: {
    slate:
        'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    blue: 'bg-[#4379F2] text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-[#4379F2]',
    white:
        'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
        'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-[#4379F2] focus-visible:ring-slate-300',
    white:
        'ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white',
  },
}

type ButtonProps = (
    | {
  variant?: 'solid'
  color?: keyof typeof variantStyles.solid
}
    | {
  variant: 'outline'
  color?: keyof typeof variantStyles.outline
}
    ) & (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color' | 'to'> // Ensure to omit 'to' and 'color' from Link props
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
  href?: string
})
    )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'slate'

  className = clsx(
      baseStyles[props.variant],
      props.variant === 'outline'
          ? variantStyles.outline[props.color]
          : props.variant === 'solid'
              ? variantStyles.solid[props.color]
              : undefined,
      className
  )

  // Here, we ensure props are passed correctly to the button or Link component
  if ('href' in props) {
    // When href is present, use Link component (react-router)

    // @ts-ignore
    return <Link className={className} to={props.href as string} {...props} />
  } else {
    // Otherwise, use button element
    // @ts-ignore
    return <button className={className} {...props} />
  }
}
