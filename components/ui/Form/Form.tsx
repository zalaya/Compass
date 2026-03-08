import { Controller,  ControllerProps,  FieldPath,  FieldValues,  FormProvider,  useFormContext,  UseFormReturn } from 'react-hook-form'
import { ComponentProps, FormHTMLAttributes, HTMLAttributes, PropsWithChildren, useId } from 'react'
import { Slot } from '@radix-ui/react-slot'
import * as LabelPrimitive from '@radix-ui/react-label'
import { useFormField } from '@/components/ui/Form/use-form-field'
import { FormFieldContext } from '@/components/ui/Form/FormFieldContext'

type RootProps<T extends FieldValues> = PropsWithChildren<{
  form: UseFormReturn<T>
  onSubmit: (values: T) => void
} & FormHTMLAttributes<HTMLFormElement>>

const Root = <T extends FieldValues>({ children, form, onSubmit, ...props }: RootProps<T>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props} >
        {children}
      </form>
    </FormProvider>
  )
}

const Control = (props: ComponentProps<typeof Slot>) => {
  const { id, invalid, error } = useFormField()

  return (
    <Slot
      data-slot='form-control'
      id={id}
      aria-invalid={invalid}
      aria-describedby={
        !error
          ? `${id}-description`
          : `${id}-description ${id}-message`
      }
      {...props}
    />
  )
}

type FieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<ControllerProps<TFieldValues, TName>, 'control'>

const Field = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ name, render, ...props }: FieldProps<TFieldValues, TName>) => {
  const { control } = useFormContext<TFieldValues>()
  const id = useId()

  return (
    <FormFieldContext.Provider value={{ id, name }}>
      <Controller
        name={name}
        control={control}
        render={(renderProps) => (
          <Control>
            {render(renderProps)}
          </Control>
        )}
        {...props}
      />
    </FormFieldContext.Provider>
  )
}

const Description = (props: HTMLAttributes<HTMLParagraphElement>) => {
  const { id } = useFormField()

  return (
    <p
      data-slot='form-description'
      id={`${id}-description`}
      {...props}
    />
  )
}

const Message = (props: ComponentProps<'p'>) => {
  const { error, id } = useFormField()
  const content = error ? String(error?.message ?? '') : props.children

  if (!content) {
    return null
  }

  return (
    <p
      data-slot='form-message'
      id={`${id}-message`}
      {...props}
    >
      {content}
    </p>
  )
}

const Label = (props: ComponentProps<typeof LabelPrimitive.Root>) =>  {
  const { id, error } = useFormField()

  return (
    <LabelPrimitive.Root
      data-slot='form-label'
      htmlFor={id}
      data-error={!!error}
      {...props}
    />
  )
}

export const Form = {
  Root,
  Field,
  Control,
  Label,
  Description,
  Message
}
