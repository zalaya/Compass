import { forwardRef, InputHTMLAttributes } from 'react'

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ type = 'text', ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      data-slot='input'
      {...props}
    />
  )
})
