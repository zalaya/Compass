import { signIn } from '@/auth'
import { loginSchema, LoginValues } from '@/modules/auth/schema'

export async function loginAction(values: LoginValues) {
  const result = loginSchema.safeParse(values)

  if (!result.success) {
    throw new Error('Invalid data')
  }

  await signIn('credentials', {
    email: result.data.email,
    password: result.data.password,
    redirectTo: '/'
  })
}
