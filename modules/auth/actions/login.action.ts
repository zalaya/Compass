'use server'

import { signIn } from '@/auth'
import { LoginValues } from '@/modules/auth/schema'

export async function loginAction(values: LoginValues) {
  await signIn('credentials', {
    email: values.email,
    password: values.password,
    redirectTo: '/dashboard'
  })
}
