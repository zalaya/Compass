import { ButtonHTMLAttributes, forwardRef } from 'react'

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(({ type = 'button', ...props }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      data-slot='button'
      {...props}
    />
  )
})
