import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = (props) => {

  const navigate = useNavigate()

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate("/login")
  }

  return (
    <header>
      <nav className="nav-header">
        <p className="usuario">
          <span>{props.rol}:</span> Juanito Acosta
        </p>
        <svg onClick={cerrarSesion} title="Cerrar Sesion" className="svg-logout bi bi-box-arrow-right" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
          <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
      </nav>
    </header>
  )
}

export default Header