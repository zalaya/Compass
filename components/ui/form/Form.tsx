import { FormHTMLAttributes, PropsWithChildren } from 'react'
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'
import FormError from '@/components/ui/Form/FormError'

type FormProps<T extends FieldValues> = PropsWithChildren<{
  form: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
  showError?: boolean
} & Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>>

export default function Form<T extends FieldValues>({ children, form, showError = true, onSubmit, ...props }: FormProps<T>) {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props} >
        {showError && <FormError/>}
        {children}
      </form>
    </FormProvider>
  )
}
