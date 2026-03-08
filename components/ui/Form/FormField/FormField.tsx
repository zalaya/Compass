import { Controller, ControllerProps, FieldPath, FieldValues } from 'react-hook-form'
import { FormFieldContext } from '@/components/ui/Form/FormField/FormFieldContext'
import { useId } from 'react'
import FormControl from '@/components/ui/Form/FormControl'

type FormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = ControllerProps<TFieldValues, TName>

export default function FormField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({ name, ...restProps }: FormFieldProps<TFieldValues, TName>) {
  const id = useId()

  return (
    <FormFieldContext.Provider value={{ id, name }}>
      <Controller name={name} {...restProps} render={(controllerProps) => (
        <FormControl>
          {restProps.render(controllerProps)}
        </FormControl>
      )} />
    </FormFieldContext.Provider>
  )
}
