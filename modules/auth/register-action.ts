import { signIn } from '@/auth'
import { registerSchema, RegisterValues } from '@/modules/auth/schema'

export async function registerAction(values: RegisterValues) {
  const result = registerSchema.safeParse(values)

  if (!result.success) {
    throw new Error('Invalid data')
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result.data)
  })

  if (!response.ok) {
    throw new Error('Register failed')
  }

  await signIn('credentials', {
    email: result.data.email,
    password: result.data.password,
    redirectTo: '/'
  })
}
