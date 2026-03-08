import { FormFieldContext } from '@/components/ui/Form/FormFieldContext'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

export function useFormField() {
  const context = useContext(FormFieldContext)

  if (!context) {
    throw new Error('useFormField must be used within a Form.Field')
  }

  const { id, name } = context
  const { getFieldState, formState } = useFormContext()
  const { error, invalid } = getFieldState(name, formState)

  return { name, id, error, invalid }
}
