'use client'

import { createContext } from 'react'
import { FieldPath, FieldValues } from 'react-hook-form'

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
  mandatory?: boolean
}

export const FormFieldContext = createContext<FormFieldContextValue | undefined>(undefined)
