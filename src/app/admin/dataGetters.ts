import db from "@/lib/db"

type SalesData = {
  amount: number
  numberOfSales: number
}
async function getSalesData(): Promise<SalesData> {
  const data = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  })

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100,
    numberOfSales: data._count,
  }
}

type ProductData = {
  available: number
  unavailable: number
}

async function getProductsData(): Promise<ProductData> {
  const [available, unavailable] = await Promise.all([
    db.product.count({ where: { isAvailable: false } }),
    db.product.count({ where: { isAvailable: true } }),
  ])

  return { available, unavailable }
}

type UsersData = {
  usersCount: number
  avgUserValue: number
}

async function getUsersData(): Promise<UsersData> {
  const [usersCount, ordersTotal] = await Promise.all([
    db.user.count(),
    db.order.aggregate({ _sum: { pricePaidInCents: true } }),
  ])

  const avgUserValue = !usersCount
    ? 0
    : (ordersTotal._sum.pricePaidInCents || 0) / usersCount

  return { usersCount, avgUserValue }
}

export { getUsersData, getProductsData, getSalesData }
