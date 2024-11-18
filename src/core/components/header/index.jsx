<<<<<<< HEAD
import { useEffect, useState } from "react"
import Storage from 'local-storage'
import './index.scss'
import { useNavigate } from "react-router-dom"

const Header = () => {
  const [usuario, setUsuario] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    const pegarUsuario = () => {
      const storage = Storage('usuario')

      setUsuario(storage)
    }

    pegarUsuario()
  },[])

  const logout = () => {
    navigate('/')
    Storage('usuario', null)
  }

  return (
    <header className="header-main-container">
      <div>
        
        <div className="text">
          <h3>{usuario?.nome}</h3>
          <p>Admin</p>
        </div>

        <div className="rouded-user">
          <p>{usuario?.nome?.slice(0,1)}</p>
        </div>

        <button onClick={logout}>
          <img height={15}  src="/icons/logout.png"/>
        </button>

      </div>
    </header>
  )
}

=======
import { useEffect, useState } from "react"
import Storage from 'local-storage'
import './index.scss'
import { useNavigate } from "react-router-dom"

const Header = () => {
  const [usuario, setUsuario] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    const pegarUsuario = () => {
      const storage = Storage('usuario')

      setUsuario(storage)
    }

    pegarUsuario()
  },[])

  const logout = () => {
    navigate('/')
    Storage('usuario', null)
  }

  return (
    <header className="header-main-container">
      <div>
        
        <div className="text">
          <h3>{usuario?.nome}</h3>
          <p>Admin</p>
        </div>

        <div className="rouded-user">
          <p>{usuario?.nome?.slice(0,1)}</p>
        </div>

        <button onClick={logout}>
          <img height={15}  src="/icons/logout.png"/>
        </button>

      </div>
    </header>
  )
}

>>>>>>> 1927b48235d7816a6865ba5c91acc1711281c8e7
export default Header