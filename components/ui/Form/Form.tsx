import {
  Controller, ControllerProps,
  ControllerRenderProps, FieldPath, FieldValues, FormProvider, useFormContext, UseFormReturn
} from 'react-hook-form'
import {
  Children,
  cloneElement,
  ComponentProps,
  FormHTMLAttributes, forwardRef,
  HTMLAttributes, isValidElement,
  PropsWithChildren,
  ReactElement, ReactNode,
  useId
} from 'react'
import * as Slot from '@radix-ui/react-slot'
import * as LabelPrimitive from '@radix-ui/react-label'
import { useFormField } from '@/components/ui/Form/use-form-field'
import { FormFieldContext } from '@/components/ui/Form/FormFieldContext'
import { FormItemContext } from '@/components/ui/Form/FormItemContext'

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

const FormItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        data-slot='form-item'
        className={className}
        {...props}
      />
    </FormItemContext.Provider>
  )
})

export const FormControl = (props: ComponentProps<typeof Slot.Root>) => {
  const { error, invalid, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot.Root
      data-slot='form-control'
      id={formItemId}
      aria-describedby={
        error
          ? `${formDescriptionId} ${formMessageId}`
          : formDescriptionId
      }
      aria-invalid={invalid}
      {...props}
    />
  )
}

type FormFieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<ControllerProps<TFieldValues, TName>, 'control' | 'render'> & {
  className?: string
  children: ReactNode
}

export const FormField = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({ name, children, className, ...props }: FormFieldProps<TFieldValues, TName>) => {
  const { control } = useFormContext<TFieldValues>()

  return (
    <FormFieldContext.Provider value={{ name }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const injectField = (child: ReactNode) => {
            if (!isValidElement(child)) return child
            if (child.type === FormControl) return cloneElement(child, { ...field })

            return child
          }

          return (
            <FormItem className={className}>
              {Children.map(children, injectField)}
            </FormItem>
          )
        }}
        {...props}
      />
    </FormFieldContext.Provider>
  )
}

export const FormDescription = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot='form-description'
      id={formDescriptionId}
      className={className}
      {...props}
    />
  )
}

export const FormMessage = ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => {
  const { error, formMessageId } = useFormField()
  const content = error ? String(error?.message ?? '') : props.children

  if (!content) {
    return null
  }

  return (
    <p
      data-slot='form-message'
      id={formMessageId}
      className={className}
      {...props}
    >
      {content}
    </p>
  )
}

export const FormLabel = ({ className, ...props }: ComponentProps<typeof LabelPrimitive.Root>) =>  {
  const { invalid, formItemId } = useFormField()

  return (
    <LabelPrimitive.Root
      data-slot='form-label'
      htmlFor={formItemId}
      data-invalid={invalid}
      className={className}
      {...props}
    />
  )
}
