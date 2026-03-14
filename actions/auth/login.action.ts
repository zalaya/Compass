'use server'

import { signIn } from '@/auth'
import { LoginValues } from '@/modules/auth/auth.schema'

export async function loginAction(values: LoginValues) {
  const response = await signIn('credentials', {
    email: values.email,
    password: values.password,
    redirect: false
  })

  if (response?.error) throw new Error('Login failed')

  return true
}