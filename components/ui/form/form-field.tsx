'use client'

import { cloneElement, ReactElement, ReactNode } from 'react'
import { Controller, ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import { FormControl } from '@/components/ui/form/form-control'
import { FormDescription } from '@/components/ui/form/form-description'
import { FormFieldContext } from '@/components/ui/form/form-field-context'
import { FormItem } from '@/components/ui/form/form-item'
import { FormLabel } from '@/components/ui/form/form-label'
import { FormMessage } from '@/components/ui/form/form-message'

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
