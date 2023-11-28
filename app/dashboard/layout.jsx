import Navbar from "../ui/dashboard/navbar/navbar"
import SideBar from "../ui/dashboard/sidebar/sidebar"

const Layout = ({children}) => {
  return (
    <div>
        <div>
            <SideBar/>
        </div>
        <div>
            <Navbar />
            {children}
        </div>
    </div>
  )
}

export default Layout