import { PropsWithChildren } from "react"
import { Nav, NavLink } from "../../components/Nav"

export const dynamic = "force-dynamic"

const AdminLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Nav>
        <NavLink href="/">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Users</NavLink>
        <NavLink href="/admin/orders">Orders</NavLink>
      </Nav>
      <div className="container my-6">{children}</div>
    </>
  )
}

export default AdminLayout
