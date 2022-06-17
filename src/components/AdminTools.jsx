import React, { useState, useEffect } from 'react'
import Button from './ui/Button'

const AdminTools = () =>{
    //aqui va lo que traemos del admin context
    return (
        
 <div className="menu">
        <div className="table">
        <div className={`fila base ${ "bg-green"}`}>
            <div className="columna item-columna">Correo</div>
            <div className="columna precio-columna">Cargo</div>
            <div className="columna cantidad-columna">Opciones</div>
          </div>
          <div  className="fila">
                  <div className="columna item-columna">usuario@</div>
                  <div className="columna precio-columna">mesero</div>
                  <div className="columna cantidad-columna">editar o eleiminar </div>
            </div>
          <input 
        onClick={
          ()=>{
           
          } 
        }
        className="input btn-confirmar" 
        type="submit" 
        value="Crear Nuevo Colaborador" 
      />

      
 </div>
 </div>
   
    )
}

export default AdminTools