import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchDB } from '../conection/fetch'
import { useOrders } from '../context/orders/OrdersContext'
import Button from './ui/Button'

const KitchenForm = () => {

  const { 
    order,
    setClient,
    setUserId,
    setProduct,
  } = useOrders()

  useEffect(() => {
    fetchDB("orders", "GET", "", localStorage.getItem("token"))
    .then(data => {
      if (!data) {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate("/")
      }
      setProducts(data)
    })
  }, [])

  return (
    <div className="columna-md-50 contenedor-resumen">
      <div className="menu">
        <div className="table">
          <div className="fila base user-chef">Cliente:{} </div>
          <div className="fila base resumen">
            <div className="columna item-columna-resumen">Producto</div>
            <div className="columna precio-columna-resumen">Cantidad</div>
            <div className="columna cantidad-columna-resumen">Estado</div>
          </div>

        {
          order?.products?.map((product, i) => {

            const totalProducto = product?.product?.price * product?.qty || 0
            totalFactura += totalProducto

            return (
              <div key={i} className="fila">
                <div className="columna item-columna-resumen">
                  {product.product.name}
                </div>
                <div className="columna precio-columna-resumen">
                  ${product.product.price}
                </div>
                <div className="columna cantidad-columna-resumen">
                  <p>{product.qty}</p>
                </div>
              </div>
            )
          })
        }

        <div className="fila">
          <div className="columna cantidad-columna-resumen">
            <p>Tiempo de preparación:</p>
          </div>
          <div className="columna total-columna-resumen"></div>
          </div> 
        </div>
      </div>
      <input
        className="input btn-confirmar" 
        type="submit" 
        value="Listo para entrega." 
      />
          </div>
  )
}

export default KitchenForm