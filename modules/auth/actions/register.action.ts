'use server'

import { signIn } from '@/auth'
import { registerSchema, RegisterValues } from '@/modules/auth/schema'

export async function registerAction(values: RegisterValues) {
  const { data, success } = registerSchema.safeParse(values)

  if (!success) throw new Error('Invalid result')

  const response = await fetch(`${process.env.APP_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  if (!response.ok) throw new Error('Registration failed')

  await signIn('credentials', {
    email: data.email,
    password: data.password,
    redirectTo: '/dashboard'
  })
}
