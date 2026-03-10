import { forwardRef, HTMLAttributes, useId } from 'react'
import { FormItemContext } from '@/components/ui/Form/FormItem/FormItemContext'

const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
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

export default FormItem
