import { HTMLAttributes } from 'react'
import { cn } from '@/components/cn'
import { useFormField } from '@/components/ui/Form/use-form-field'

export default function FormMessage({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
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
        'text-red-500 text-sm',
        className
      )}
      {...props}
    >
      {content}
    </p>
  )
}
