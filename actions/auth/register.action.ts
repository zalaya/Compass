'use server'

import { signIn } from '@/auth'
import { RegisterValues } from '@/modules/auth/auth.schema'
import { authService } from '@/modules/auth/auth.service'

export async function registerAction(values: RegisterValues) {
  await authService.register(values)

  const response = await signIn('credentials', {
    email: values.email,
    password: values.password,
    redirect: false
  })

  if (response?.error) throw new Error('Login failed')

  return true
}
