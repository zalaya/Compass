import * as LabelPrimitive from '@radix-ui/react-label'
import { useFormField } from '@/components/ui/Form/use-form-field'
import { ComponentProps } from 'react'

type FormLabelProps = ComponentProps<typeof LabelPrimitive.Root>

export default function FormFieldLabel(props: FormLabelProps) {
  const { id, error } = useFormField()

  return (
    <LabelPrimitive.Root
      htmlFor={id}
      data-error={!!error}
      {...props}
    />
  )
}
