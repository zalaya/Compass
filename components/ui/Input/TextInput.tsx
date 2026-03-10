import { forwardRef, InputHTMLAttributes } from 'react'
import { cn } from '@/shared/cn'

const TextInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ type = 'text', className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      data-slot='input'
      className={cn(
        'flex h-10 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm outline-none transition-colors',
        'placeholder:text-neutral-400',
        'focus:border-neutral-400 focus:ring-2 focus:ring-neutral-900/10',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
})

export default TextInput
