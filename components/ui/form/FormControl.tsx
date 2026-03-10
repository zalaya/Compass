import { ComponentProps, forwardRef } from 'react'
import * as Slot from '@radix-ui/react-slot'
import { useFormField } from '@/components/ui/Form/use-form-field'

const FormControl = forwardRef<HTMLElement, ComponentProps<typeof Slot.Root>>(({ ...props }, ref) => {
  const { error, invalid, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot.Root
      ref={ref}
      data-slot='form-control'
      id={formItemId}
      aria-describedby={
        error
          ? `${formDescriptionId} ${formMessageId}`
          : formDescriptionId
      }
      aria-invalid={invalid}
      {...props}
    />
  )
})

export default FormControl
