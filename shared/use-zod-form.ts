import { Resolver, useForm, UseFormProps, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z, ZodObject } from 'zod'

export type ZodFormReturn<TSchema extends ZodObject> =
  UseFormReturn<z.infer<TSchema>> & {
  schema: TSchema
}

type UseZodFormProps<TSchema extends ZodObject> = Omit<UseFormProps<z.infer<TSchema>>, 'resolver'> & {
  schema: TSchema
}

export function useZodForm<TSchema extends ZodObject>({ schema, ...props }: UseZodFormProps<TSchema>): ZodFormReturn<TSchema> {
  const form = useForm<z.infer<TSchema>>({
    ...props,
    resolver: zodResolver(schema) as Resolver<z.infer<TSchema>>
  })

  return Object.assign(form, { schema })
}
