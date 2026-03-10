'use client'

import { cloneElement, ReactElement, ReactNode, useContext } from 'react'
import { Controller, ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import { ZodTypeAny } from 'zod/v3'
import FormControl from '@/components/ui/Form/FormControl'
import FormDescription from '@/components/ui/Form/FormDescription'
import { FormFieldContext } from '@/components/ui/Form/FormField/FormFieldContext'
import FormItem from '@/components/ui/Form/FormItem/FormItem'
import FormLabel from '@/components/ui/Form/FormLabel'
import FormMessage from '@/components/ui/Form/FormMessage'
import { FormSchemaContext } from '@/components/ui/Form/FormSchemaContext'

type FormFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<ControllerProps<TFieldValues, TName>, 'control' | 'render'> & {
  className?: string
  label?: ReactNode
  description?: ReactNode
  mandatory?: boolean
  children: ReactElement
}

export default function FormField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ name, children, label, description, mandatory, className, ...props }: FormFieldProps<TFieldValues, TName>) {
  const { control } = useFormContext<TFieldValues>()
  const schema = useContext(FormSchemaContext)
  const fieldSchema = schema?.shape?.[name as string] as ZodTypeAny | undefined
  const autoRequired = fieldSchema ? !fieldSchema.isOptional() : false
  const isMandatory = mandatory ?? autoRequired

  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <FormItem className={className}>
              {label && (
                <FormLabel>
                  {label}
                  {isMandatory && <span className='ml-1 text-red-500' aria-hidden={isMandatory}>*</span>}
                </FormLabel>
              )}
              <FormControl aria-required={isMandatory}>
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
