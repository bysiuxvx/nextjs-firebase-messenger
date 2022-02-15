// import React, { useContext, useState, useEffect } from "react"
// import Router from "next/router"
// import { history } from "../helpers/helper"
// import { auth } from "../firebase"

// const AuthContext = () => React.createContext()

// export const useAuth = () => useContext(AuthContext)

// export const AuthProvider = ({ children }) => {
//   const [loading, setLoading] = useState(true)
//   const [user, setUser] = useState({})

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setUser(user)
//       setLoading(false)
//       history("/chat")
//     })
//   }, [user, history])

//   const value = { user }

//   return (
//     <AuthContext.Provider value={value}>
//       {!loading && children}
//     </AuthContext.Provider>
//   )
// }

import React, { useContext, useState, useEffect } from "react"
import { history } from "../helpers/helper"
import { auth } from "../firebase"

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
      if (user) history("/chat")
    })
  }, [user, history])

  const value = { user }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
