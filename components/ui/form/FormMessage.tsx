import { HTMLAttributes } from 'react'
import { useFormField } from '@/components/ui/Form/use-form-field'
import { cn } from '@/shared/cn'

type FormMessageProps = Omit<HTMLAttributes<HTMLParagraphElement>, 'children'>

export default function FormMessage({ className, ...props }: FormMessageProps) {
  const { error, formMessageId } = useFormField()

  if (!error?.message) {
    return null
  }

  return (
    <p
      data-slot='form-message'
      id={formMessageId}
      className={cn(
        'text-red-500 text-sm font-medium',
        className
      )}
      {...props}
    >
      {String(error.message)}
    </p>
  )
}
