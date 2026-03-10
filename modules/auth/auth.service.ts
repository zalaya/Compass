import bcrypt from 'bcrypt'
import { Prisma } from '@/generated/prisma/client'
import { UserModel } from '@/generated/prisma/models/User'
import { withTransaction } from '@/prisma/prisma'
import { userRepository } from '@/prisma/repositories/user.repository'

export const authService = {
  async register(data: { name: string, email: string, password: string }): Promise<UserModel> {
    return withTransaction(async (transaction: Prisma.TransactionClient) => {
      const user = await userRepository.findByEmail(data.email, transaction)

      if (user) throw new Error('User already exists')

      const hashedPassword = await bcrypt.hash(data.password, 10)

      return userRepository.create({
        name: data.name,
        email: data.email,
        password: hashedPassword
      }, transaction)
    })
  },
  async login(data: { email: string, password: string }): Promise<UserModel | null> {
    const user = await userRepository.findByEmail(data.email)

    if (!user) return null

    const isPasswordValid = await bcrypt.compare(data.password, user.password)

    if (!isPasswordValid) return null

    return user
  }
}
