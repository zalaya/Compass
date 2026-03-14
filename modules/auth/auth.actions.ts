'use server'

import { signIn } from '@/auth'
import { LoginValues, RegisterValues } from '@/modules/auth/auth.schemas'
import { authService } from '@/modules/auth/auth.service'

export async function login(values: LoginValues) {
  await signInWithCredentials(values.email, values.password)
}

export async function register(values: RegisterValues) {
  await authService.register(values)
  await signInWithCredentials(values.email, values.password)
}

async function signInWithCredentials(email: string, password: string) {
  const response = await signIn('credentials', {
    email,
    password,
    redirect: false
  })

  if (response?.error) throw new Error('Login failed')
}

