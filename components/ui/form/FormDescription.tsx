import { HTMLAttributes } from 'react'
import { cn } from '@/components/cn'
import { useFormField } from '@/components/ui/Form/use-form-field'

export default function FormDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
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
