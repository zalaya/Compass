import { forwardRef, HTMLAttributes, useId } from 'react'
import { FormItemContext } from '@/components/ui/Form/FormItemContext'

export const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        data-slot='form-item'
        className={className}
        {...props}
      />
    </FormItemContext.Provider>
  )
})
