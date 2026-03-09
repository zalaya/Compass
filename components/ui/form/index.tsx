import { FormHTMLAttributes, PropsWithChildren } from 'react'
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'

type FormProps<T extends FieldValues> = PropsWithChildren<{
  form: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
} & Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>>

export const Form = <T extends FieldValues>({ children, form, onSubmit, ...props }: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props} >
        {children}
      </form>
    </FormProvider>
  )
}
