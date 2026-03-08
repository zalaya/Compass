import { Slot } from '@radix-ui/react-slot'
import { ComponentProps } from 'react'
import { useFormField } from '@/components/ui/Form/use-form-field'

type FormControlProps = ComponentProps<typeof Slot>

export default function FormControl(props: FormControlProps) {
  const { id, invalid } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={id}
      aria-invalid={invalid}
      {...props}
    />
  )
}
