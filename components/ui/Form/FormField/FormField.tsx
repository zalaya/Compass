'use client'

import { ReactNode, useContext } from 'react'
import { Controller, ControllerProps, FieldValues, useFormContext } from 'react-hook-form'
import FormControl from '@/components/ui/Form/FormControl'
import FormDescription from '@/components/ui/Form/FormDescription'
import { FormFieldContext } from '@/components/ui/Form/FormField/FormFieldContext'
import FormItem from '@/components/ui/Form/FormItem/FormItem'
import FormLabel from '@/components/ui/Form/FormLabel'
import FormMessage from '@/components/ui/Form/FormMessage'
import { FormSchemaContext } from '@/components/ui/Form/FormSchemaContext'
import { isFieldRequired } from '@/shared/is-field-mandatory'

type FormFieldProps<T extends FieldValues> = Omit<ControllerProps<T>, 'control'> & {
  className?: string
  label?: ReactNode
  description?: ReactNode
  mandatory?: boolean
}

export default function FormField<T extends FieldValues>({ name, label, description, mandatory, render, className, ...props }: FormFieldProps<T>) {
  const { control } = useFormContext<T>()
  const schema = useContext(FormSchemaContext)
  const autoMandatory = schema ? isFieldRequired(schema, name as string) : false
  mandatory = mandatory ?? autoMandatory

  return (
    <Controller
      name={name}
      control={control}
      render={(controllerProps) => (
        <FormFieldContext.Provider value={{ name, mandatory }}>
          <FormItem className={className}>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl aria-required={mandatory}>
              {render(controllerProps)}
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        </FormFieldContext.Provider>
      )}
      {...props}
    />
    
  )
}
