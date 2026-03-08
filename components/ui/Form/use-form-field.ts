import { FormFieldContext } from '@/components/ui/Form/FormFieldContext'
import { FormItemContext } from '@/components/ui/Form/FormItemContext'
import { useContext } from 'react'
import { useFormContext, useFormState } from 'react-hook-form'

export function useFormField() {
  const formFieldContext = useContext(FormFieldContext)
  const formItemContext = useContext(FormItemContext)

  if (!formFieldContext) {
    throw new Error('useFormField must be used within <FormField>')
  }

  if (!formItemContext) {
    throw new Error('useFormField must be used within <FormItem>')
  }

  const { name } = formFieldContext
  const { id } = formItemContext
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name })
  const { error, invalid } = getFieldState(name, formState)

  return {
    name,
    error,
    invalid,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-description`,
    formMessageId: `${id}-form-message`
  }
}
