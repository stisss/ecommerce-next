import { Loader2 } from "lucide-react"

const AdminLoading: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader2 className="size-24 animate-spin" />
    </div>
  )
}

export default AdminLoading
