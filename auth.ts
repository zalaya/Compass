import Credentials from '@auth/core/providers/credentials'
import NextAuth from 'next-auth'
import { loginSchema } from '@/modules/auth/auth.schemas'
import { authService } from '@/modules/auth/auth.service'

export const { auth, handlers, signIn } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        const { data, success } = loginSchema.safeParse(credentials)

        if (!success || !data) return null

        const user = await authService.login(data)

        return user
          ? { id: user.id, name: user.name, email: user.email }
          : null
      }
    })
  ],
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
  },
  session: {
    strategy: 'jwt'
  }
})
