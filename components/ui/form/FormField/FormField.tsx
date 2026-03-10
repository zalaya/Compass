'use client'

import { cloneElement, ReactElement, ReactNode } from 'react'
import { Controller, ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import FormControl from '@/components/ui/Form/FormControl'
import FormDescription from '@/components/ui/Form/FormDescription'
import { FormFieldContext } from '@/components/ui/Form/FormField/FormFieldContext'
import FormItem from '@/components/ui/Form/FormItem/FormItem'
import FormLabel from '@/components/ui/Form/FormLabel'
import FormMessage from '@/components/ui/Form/FormMessage'

type FormFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<ControllerProps<TFieldValues, TName>, 'control' | 'render'> & {
  className?: string
  label?: ReactNode
  description?: ReactNode
  children: ReactElement
}

export default function FormField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ name, children, label, description, className, ...props }: FormFieldProps<TFieldValues, TName>) {
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
