import { FormHTMLAttributes, PropsWithChildren } from 'react'
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'
import { ZodObject, ZodRawShape } from 'zod'
import FormError from '@/components/ui/Form/FormError'
import { FormSchemaContext } from '@/components/ui/Form/FormSchemaContext'

type FormProps<T extends FieldValues> = PropsWithChildren<{
  form: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
  showError?: boolean
  schema?: ZodObject<ZodRawShape>
} & Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>>

export default function Form<T extends FieldValues>({ children, form, showError = true, onSubmit, schema, ...props }: FormProps<T>) {
  return (
    <FormSchemaContext.Provider value={schema}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
          {showError && <FormError/>}
          {children}
        </form>
      </FormProvider>
    </FormSchemaContext.Provider>
  )
}
