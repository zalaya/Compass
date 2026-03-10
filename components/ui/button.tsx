import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/components/cn'

const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(({ type = 'button', className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      data-slot='button'
      className={cn(
        'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-neutral-900 text-white cursor-pointer select-none transition-colors duration-150',
        'hover:bg-neutral-800',
        'active:bg-neutral-900 active:scale-[0.99]',
        'disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
})

export default Button
