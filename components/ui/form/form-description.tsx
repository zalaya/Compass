import { HTMLAttributes } from 'react'
import { cn } from '@/components/cn'
import { useFormField } from '@/components/ui/form/use-form-field'

export const FormDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot='form-description'
      id={formDescriptionId}
      className={cn(
        'text-sm',
        className
      )}
      {...props}
    />
  )
}
