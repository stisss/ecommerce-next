import { PrismaClient } from "@prisma/client"

const prismaClientSignleton = () => {
  return new PrismaClient()
}

declare global {
  // eslint-disable-next-line no-var
  var prisma: undefined | ReturnType<typeof prismaClientSignleton>
}

const db = globalThis.prisma ?? prismaClientSignleton()

export default db

if (process.env.NODE_ENV !== "production") globalThis.prisma = db
