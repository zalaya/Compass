import Credentials from '@auth/core/providers/credentials'
import NextAuth from 'next-auth'
import { loginSchema } from '@/modules/auth/schema'

export const { handlers, signIn } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        const result = loginSchema.safeParse(credentials)

        if (!result.success) return null

        return {
          id: '1',
          name: 'User',
          email: result.data.email
        }
      }
    })
  ]
})
