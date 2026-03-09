import { signIn } from '@/auth'
import { registerSchema, RegisterValues } from '@/modules/auth/schema'

export async function registerAction(values: RegisterValues) {
  const result = registerSchema.safeParse(values)

  if (!result.success) throw new Error('Invalid result')

  const response = await fetch(`${process.env.APP_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result.data)
  })

  if (!response.ok) throw new Error('Register failed')

  await signIn('credentials', {
    email: result.data.email,
    password: result.data.password,
    redirectTo: '/'
  })
}
