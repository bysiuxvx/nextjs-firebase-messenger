import React, { useContext, useState, useEffect } from "react"

import { useRouter } from "next/router"

import { auth } from "../firebase"

const AuthContext = React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  const router = useRouter()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
      if (user) router.push("/chat")
    })
  }, [user])

  const value = { user }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
