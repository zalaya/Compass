import Credentials from '@auth/core/providers/credentials'
import NextAuth from 'next-auth'
import { authService } from '@/modules/auth/auth.service'
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
        const { data, success } = loginSchema.safeParse(credentials)

        if (!success) return null

        try {
          const user = await authService.login(data)

          if (!user) return null

          return {
            id: user.id,
            name: user.name,
            email: user.email
          }
        } catch {
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }

      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }

      return session
    }
  }
})
