import { FormHTMLAttributes, PropsWithChildren } from 'react'
import { FormProvider, SubmitHandler } from 'react-hook-form'
import { z, ZodObject } from 'zod'
import FormError from '@/components/ui/Form/FormError'
import { FormSchemaContext } from '@/components/ui/Form/FormSchemaContext'
import { ZodFormReturn } from '@/shared/use-zod-form'

type FormProps<TSchema extends ZodObject> = PropsWithChildren<{
  form: ZodFormReturn<TSchema>
  onSubmit: SubmitHandler<z.infer<TSchema>>
  showError?: boolean
} & Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>>

export default function Form<TSchema extends ZodObject>({ children, form, showError = true, onSubmit, ...props }: FormProps<TSchema>) {
  return (
    <FormSchemaContext.Provider value={form.schema}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
          {showError && <FormError />}
          {children}
        </form>
      </FormProvider>
    </FormSchemaContext.Provider>
  )
}
