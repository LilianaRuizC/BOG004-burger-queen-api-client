import React, { createContext, useContext, useState, useEffect } from "react"
import { fetchDB } from "../../conection/fetch"

const ManagementContext = createContext()
export const ManagementProvider = ({children}) => {
    const [user, setUser]= useState ({
        "email": "",
        "password": "",
        "roles": {
          "admin": false,
          "waiter": false,
          "chef": false
        }
    })
    const [users, setUsers]= useState([])

    useEffect(() => {
      fetchDB("users", "GET", "", localStorage.getItem("token"))
      .then(data => {
          setUsers(data)
      })
    }, [])

    return (
        <ManagementContext.Provider
          value = {{
            user,
            users
           
          }}
        >
          {children}
        </ManagementContext.Provider>
      )
   }
      export const useCollaborator = () => {
        return useContext(ManagementContext)
      }
