import { HTMLAttributes } from 'react'
import { cn } from '@/components/cn'
import { useFormField } from '@/components/ui/form/use-form-field'

export const FormMessage = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
  const { error, formMessageId } = useFormField()
  const content = error ? String(error?.message ?? '') : props.children

  if (!content) {
    return null
  }

  return (
    <p
      data-slot='form-message'
      id={formMessageId}
      className={cn(
        'text-red-500',
        className
      )}
      {...props}
    >
      {content}
    </p>
  )
}
