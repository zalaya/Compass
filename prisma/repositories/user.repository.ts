import { Prisma } from '@/generated/prisma/client'
import { UserCreateInput, UserModel } from '@/generated/prisma/models/User'
import { resolveClient } from '@/prisma/prisma'

export const userRepository = {

  findByEmail: (email: string, transaction?: Prisma.TransactionClient): Promise<UserModel | null> => {
    const prisma = resolveClient(transaction)

    return prisma.user.findUnique({
      where: { email }
    })
  },

  create: (data: UserCreateInput, transaction?: Prisma.TransactionClient): Promise<UserModel> => {
    const prisma = resolveClient(transaction)

    return prisma.user.create({
      data
    })
  }

}
