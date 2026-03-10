'use client'

import { ComponentProps } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { useFormField } from '@/components/ui/Form/use-form-field'
import { cn } from '@/shared/cn'

export default function FormLabel({ className, ...props }: ComponentProps<typeof LabelPrimitive.Root>) {
  const { invalid, formItemId } = useFormField()

  return (
    <LabelPrimitive.Root
      data-slot='form-label'
      htmlFor={formItemId}
      data-invalid={invalid}
      className={cn(
        'text-sm font-medium',
        className
      )}
      {...props}
    />
  )
}
