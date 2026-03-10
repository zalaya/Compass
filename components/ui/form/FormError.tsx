'use client'

import { HTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'
import { cn } from '@/shared/cn'

type FormErrorProps = Omit<HTMLAttributes<HTMLParagraphElement>, 'children'>

export default function FormError({ className, ...props }: FormErrorProps) {
  const { formState } = useFormContext()
  const error = formState.errors.root?.message

  if (!error) {
    return null
  }

  return (
    <p
      data-slot='form-error'
      className={cn(
        'text-sm text-red-500',
        className
      )}
      {...props}
    >
      {String(error)}
    </p>
  )
}
