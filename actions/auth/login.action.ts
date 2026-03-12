'use server'

import { headers } from 'next/headers'
import { signIn } from '@/auth'
import { LoginValues } from '@/modules/auth/auth.schema'
import { rateLimit } from '@/shared/rate-limit'

export async function loginAction(values: LoginValues) {
  const ip = (await headers()).get('x-forwarded-for') ?? (await headers()).get('x-real-ip') ?? 'unknown'

  rateLimit(`login:ip:${ip}`)
  rateLimit(`login:email:${values.email}`)
    
  try {
    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false
    })

    if (response?.error) throw new Error('Invalid credentials')

    return true
  } catch {
    throw new Error('Invalid credentials')
  }
}
