import { Controller, ControllerProps, FieldPath, FieldValues, useFormContext } from 'react-hook-form'
import { FormFieldContext } from '@/components/ui/Form/FormField/FormFieldContext'
import { useId } from 'react'
import FormControl from '@/components/ui/Form/FormControl'

type FormFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = Omit<ControllerProps<TFieldValues, TName>, 'control'>

export default function FormField<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>({ name, ...restProps }: FormFieldProps<TFieldValues, TName>) {
  const { control } = useFormContext<TFieldValues>()
  const id = useId()

  return (
    <FormFieldContext.Provider value={{ id, name }}>
      <Controller
        {...restProps}
        name={name}
        control={control}
        render={(controllerProps) => (
          <FormControl>
            {restProps.render(controllerProps)}
          </FormControl>
        )}
      />
    </FormFieldContext.Provider>
  )
}
