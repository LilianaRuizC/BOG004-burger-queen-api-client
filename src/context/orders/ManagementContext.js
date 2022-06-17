import React, { createContext, useContext, useState, useEffect } from "react"
import { fetchDB } from "../../conection/fetch"

const ManagementContext = createContext()
export const ManagementProvider = ({children}) => {
    const [user, setUser]= useState ({
        "email": "",
        "password": "",
        "roles": {
          "admin": true,
          "waiter": true,
          "chef": true
        }
    })
    const [users, setUsers]= useState([])

    useEffect(() => {
      fetchDB("users", "GET", "", localStorage.getItem("token"))
      .then(data => {
        const registeredUsers = data.filter((user)=>
          user.email)
          
          setUsers(registeredUsers)
          console.log("esto es data",data)
      })
    }, [])

    return (
        <ManagementContext.Provider
          value = {{
           
          }}
        >
          {children}
        </ManagementContext.Provider>
      )
}