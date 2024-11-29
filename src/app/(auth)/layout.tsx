import Navbar from "@/components/Navbar"
import { ReactNode } from "react"

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
          <Navbar />
          {children}
        </>
      )
}

export default DashboardLayout