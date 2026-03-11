import { FormHTMLAttributes, PropsWithChildren } from 'react'
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import FormError from '@/components/ui/Form/FormError'
import { FormSchemaContext } from '@/components/ui/Form/FormSchemaContext'

type FormProps<T extends FieldValues> = PropsWithChildren<{
  form: UseFormReturn<T>
  schema?: z.ZodType
  onSubmit: SubmitHandler<T>
  showError?: boolean
} & Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>>

export default function Form<T extends FieldValues>({ children, form, schema, showError = false, onSubmit, ...props }: FormProps<T>) {
  return (
    <FormSchemaContext.Provider value={schema}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
          {showError && <FormError />}
          {children}
        </form>
      </FormProvider>
    </FormSchemaContext.Provider>
  )
}
