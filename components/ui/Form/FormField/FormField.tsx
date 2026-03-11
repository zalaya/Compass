'use client'

import { ReactNode, useContext } from 'react'
import { Controller, ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import { ZodTypeAny } from 'zod/v3'
import FormControl from '@/components/ui/Form/FormControl'
import FormDescription from '@/components/ui/Form/FormDescription'
import { FormFieldContext } from '@/components/ui/Form/FormField/FormFieldContext'
import FormItem from '@/components/ui/Form/FormItem/FormItem'
import FormLabel from '@/components/ui/Form/FormLabel'
import FormMessage from '@/components/ui/Form/FormMessage'
import { FormSchemaContext } from '@/components/ui/Form/FormSchemaContext'

type FormFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<ControllerProps<TFieldValues, TName>, 'control'> & {
  className?: string
  label?: ReactNode
  description?: ReactNode
  mandatory?: boolean
}

export default function FormField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ name, label, description, mandatory, render, className, ...props }: FormFieldProps<TFieldValues, TName>) {
  const { control } = useFormContext<TFieldValues>()
  const schema = useContext(FormSchemaContext)
  const fieldSchema = schema?.shape?.[name as string] as ZodTypeAny | undefined
  const autoRequired = fieldSchema ? !fieldSchema.isOptional() : false
  mandatory = mandatory ?? autoRequired

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
