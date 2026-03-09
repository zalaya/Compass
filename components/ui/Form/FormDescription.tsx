import { HTMLAttributes } from 'react'
import { useFormField } from '@/components/ui/Form/use-form-field'

export const FormDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot='form-description'
      id={formDescriptionId}
      className={className}
      {...props}
    />
  )
}
