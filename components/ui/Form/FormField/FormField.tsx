import { cloneElement, ReactElement, ReactNode } from 'react'
import { Controller, ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import { FormItem } from '@/components/ui/Form/FormItem/FormItem'
import { FormLabel, FormMessage } from '@radix-ui/react-form'
import { FormControl } from '@/components/ui/Form/FormControl'
import { FormFieldContext } from '@/components/ui/Form/FormField/FormFieldContext'
import { FormDescription } from '@/components/ui/Form/FormDescription'

type FormFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<ControllerProps<TFieldValues, TName>, 'control' | 'render'> & {
  className?: string
  label?: ReactNode
  description?: ReactNode
  children: ReactElement
}

export const FormField = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ name, children, label, description, className, ...props }: FormFieldProps<TFieldValues, TName>) => {
  const { control } = useFormContext<TFieldValues>()

  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <FormItem className={className}>
              {label && <FormLabel>{label}</FormLabel>}
              <FormControl>
                {cloneElement(children, field)}
              </FormControl>
              {description && <FormDescription>{description}</FormDescription>}
              <FormMessage />
            </FormItem>
          )
        }}
        {...props}
      />
    </FormFieldContext.Provider>
  )
}
