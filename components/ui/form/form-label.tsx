import { ComponentProps } from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { useFormField } from '@/components/ui/form/use-form-field'

export const FormLabel = ({ className, ...props }: ComponentProps<typeof LabelPrimitive.Root>) =>  {
  const { invalid, formItemId } = useFormField()

  return (
    <LabelPrimitive.Root
      data-slot='form-label'
      htmlFor={formItemId}
      data-invalid={invalid}
      className={className}
      {...props}
    />
  )
}
