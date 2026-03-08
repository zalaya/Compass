import { HTMLAttributes } from 'react'
import { useFormField } from '@/components/ui/Form/use-form-field'

type FormDescriptionProps = HTMLAttributes<HTMLParagraphElement>

export default function FormFieldDescription(props: FormDescriptionProps) {
  const { id } = useFormField()

  return (
    <p
      id={`${id}-description`}
      {...props}
    />
  )
}
