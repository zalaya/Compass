import { ComponentProps } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '@/components/cn'
import { useFormField } from '@/components/ui/Form/use-form-field'

export default function FormLabel({ className, ...props }: ComponentProps<typeof LabelPrimitive.Root>) {
  const { invalid, formItemId } = useFormField()

  return (
    <LabelPrimitive.Root
      data-slot='form-label'
      htmlFor={formItemId}
      data-invalid={invalid}
      className={cn(
        'text-sm',
        className
      )}
      {...props}
    />
  )
}
