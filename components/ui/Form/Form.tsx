import { FormHTMLAttributes, PropsWithChildren } from 'react'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'

type FormProps<T extends FieldValues> = PropsWithChildren<{
  form: UseFormReturn<T>
  onSubmit: (values: T) => void
} & FormHTMLAttributes<HTMLFormElement>>

export default function Form<T extends FieldValues>({ children, form, onSubmit, ...restProps }: FormProps<T>) {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...restProps}>
        {children}
      </form>
    </FormProvider>
  )
}
