<<<<<<< HEAD
import Storage from 'local-storage'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Router = () => {
  const isAuth = Storage('usuario')

  return isAuth ? <AuthRoutes/> : <AppRoutes/>
}

=======
import Storage from 'local-storage'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Router = () => {
  const isAuth = Storage('usuario')

  return isAuth ? <AuthRoutes/> : <AppRoutes/>
}

>>>>>>> 1927b48235d7816a6865ba5c91acc1711281c8e7
export default Router