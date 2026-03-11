import { PrismaPg } from '@prisma/adapter-pg'
import { Prisma, PrismaClient } from '@/generated/prisma/client'

const global = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = global.prisma ?? new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATASOURCE_URL }),
  log: process.env.NODE_ENV === 'development'
    ? ['query', 'error', 'warn']
    : ['error']
})

export const withTransaction = <T>(callback: (transaction: Prisma.TransactionClient) => Promise<T>) => {
  return prisma.$transaction(callback)
}

export const resolveClient = (transaction?: Prisma.TransactionClient) => {
  return transaction ?? prisma
}

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}
