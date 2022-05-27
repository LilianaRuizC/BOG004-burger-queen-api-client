import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchDB } from '../conection/fetch'
import Button from './ui/Button'

const LoginForm = () => {

  const navigate = useNavigate()

  const [datos, setDatos] = useState({
    email: "",
    password: "",
    error: false,
    errorMessage: ""
  })

  const handleChange = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  } 

  const handleSendForm = e => {
    e.preventDefault()
    if (!datos.email || !datos.password) {
      setDatos({
        ...datos,
        error: true,
        errorMessage: "El email y contraseña son obligatorios"
      })
    } else {
      setDatos({
        ...datos,
        error: false,
        errorMessage: "",
      })

      fetchDB("login", "POST", {
        "email": datos.email,
        "password": datos.password
      })
      .then(data => {
        
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.user));

        if(data?.user?.roles?.admin) navigate("/management")
        if(data?.user?.roles?.chef) navigate("/chef")
        if(data?.user?.roles?.waiter) navigate("/waiter")

      })
      console.log(`Vamos a enviar la data: `, datos)
    }
  }

  return (
    <form className="formulario" action="">
      <input 
        className="input" 
        type="text" 
        placeholder="Digite su e-mail"
        name="email"
        value={datos.email}
        onChange={handleChange}
      />
      <input 
        className="input" 
        type="password" 
        placeholder="Digite su contraseña"
        name="password"
        value={datos.password}
        onChange={handleChange}
      />
      <button
        className="btn-transparent"
        type="submit" 
        onClick={handleSendForm}
      >
        <Button 
          type="submit"
          color={"btn-pink"} 
          value={"Iniciar Sesión"} 
        />
      </button>
      <p className='text-error'>
        {
          datos.errorMessage
        }
      </p>
    </form>
  )
}

export default LoginForm