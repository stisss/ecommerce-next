import { formatCurrency, formatNumber } from "@/lib/formatters"
import { DashboardCard } from "./DashboardCard"
import { getProductsData, getSalesData, getUsersData } from "./dataGetters"

const AdminDashboard: React.FC = async () => {
  const [salesData, usersData, productsData] = await Promise.all([
    getSalesData(),
    getUsersData(),
    getProductsData(),
  ])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(salesData.numberOfSales)} orders`}
        body={formatCurrency(salesData.amount)}
      />
      <DashboardCard
        title="Users"
        subtitle={`${formatNumber(usersData.usersCount)} users`}
        body={`${formatCurrency(usersData.avgUserValue)} avg value`}
      />
      <DashboardCard
        title="Products"
        subtitle={`${formatNumber(productsData.available)} available products`}
        body={`${formatNumber(productsData.unavailable)} unavailable products`}
      />
    </div>
  )
}

export default AdminDashboard
