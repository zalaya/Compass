import { createContext } from 'react'
import { FieldPath, FieldValues } from 'react-hook-form'

export type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  id: string
  name: TName
}

export const FormFieldContext = createContext<FormFieldContextValue | undefined>(undefined)
