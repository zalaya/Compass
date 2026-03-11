import { z } from 'zod'

export const isFieldRequired = (schema: z.ZodType, name: string): boolean => {
  if (!(schema instanceof z.ZodObject)) {
    return false
  }

  const shape = schema.shape
  const field = shape[name]

  if (!field) {
    return false
  }

  return !field.isOptional()
}
