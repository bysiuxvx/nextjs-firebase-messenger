import React, { useContext, useState, useEffect } from "react"
import Router from "next/router"
import { history } from "../helpers/helper"
import { auth } from "../firebase"

const AuthContext = () => React.createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})
}
