import React, { useState, useEffect } from 'react'
import Button from './ui/Button'
import { useCollaborator } from '../context/orders/ManagementContext'

const AdminTools = () =>{
    const {
      user,
      users
    } = useCollaborator()
console.log("esto es users", users)
    return (
    
    <div className="menu">
          <div className="table">
          <div className={`fila base ${ "bg-green"}`}>
              <div className="columna item-columna">Email</div>
              <div className="columna precio-columna">Cargo</div>
              <div className="columna cantidad-columna">Opciones</div>
            </div>
  
            {
              users.map((u, id) => (
                  <div key={id} className="fila">
                    <div className="columna item-columna">{u.email}</div>
                    <div className="columna precio-columna">{("admin" in u.roles)?"admin":("waiter"in u.roles)?"mesero":("chef" in u.roles)?"chef":"no definido"}</div>
                    <div className="columna cantidad-columna">
                      Editar Eliminar
                    </div>
                  </div>
                )
              )
            }
          </div>
        </div>
    )    
}
   

export default AdminTools