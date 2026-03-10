import { Prisma } from '@/generated/prisma/client'
import { UserCreateInput, UserModel } from '@/generated/prisma/models/User'
import { getPrisma } from '@/prisma/prisma'

export const userRepository = {
  findByEmail: (email: string, transaction?: Prisma.TransactionClient): Promise<UserModel | null> => {
    const prisma = getPrisma(transaction)

    return prisma.user.findUnique({
      where: { email }
    })
  },
  create: (data: UserCreateInput, transaction?: Prisma.TransactionClient): Promise<UserModel> => {
    const prisma = getPrisma(transaction)

    return prisma.user.create({
      data
    })
  }
}
