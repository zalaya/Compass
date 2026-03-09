import { FormHTMLAttributes, PropsWithChildren } from 'react'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'

type FormProps<T extends FieldValues> = PropsWithChildren<{
  form: UseFormReturn<T>
  onSubmit: (values: T) => void
} & FormHTMLAttributes<HTMLFormElement>>

export const Form = <T extends FieldValues>({ children, form, onSubmit, ...props }: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props} >
        {children}
      </form>
    </FormProvider>
  )
}
