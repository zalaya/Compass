import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/components/cn'

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(({ type = 'button', className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      data-slot='button'
      className={cn(
        'cursor-pointer inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-neutral-900 text-white transition-colors',
        'hover:bg-neutral-800',
        'focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
})
