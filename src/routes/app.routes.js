<<<<<<< HEAD
import { Route, Routes } from "react-router-dom"
import LoginView from "../views/login"
import SiteRoutes from "./site.routes"

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginView />} />
      </Routes>
      <SiteRoutes/>
    </>
  )
}

=======
import { Route, Routes } from "react-router-dom"
import LoginView from "../views/login"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginView />} />
    </Routes>
  )
}

>>>>>>> 1927b48235d7816a6865ba5c91acc1711281c8e7
export default AppRoutes