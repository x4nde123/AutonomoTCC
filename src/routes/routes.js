import Storage from 'local-storage'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import { useEffect, useMemo, useState } from 'react'
import dayjs from 'dayjs'

const Router = () => {  
  const [isAuth, setIsAuth] = useState(false)
  const user = useMemo(() => Storage('usuario'), [])

  useEffect(() => {
    const verificarUltimoLogin = () => {
      const ultimoLogin = user?.logado_em

      console.log(dayjs(ultimoLogin).date())

      if(dayjs(ultimoLogin).date() != dayjs().date())
        setIsAuth(false)
      else 
        setIsAuth(true)
    }

    verificarUltimoLogin()
  },[user])

  console.log(isAuth, 'IS AUTHENTICATED')

  return isAuth ? <AuthRoutes/> : <AppRoutes/>
}

export default Router