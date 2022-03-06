import React, { useEffect, useState } from "react"

import dynamic from "next/dynamic"
import { useRouter } from "next/router"

import { auth } from "../src/firebase"
import { useAuth } from "../src/contexts/AuthContext"

import axios from "axios"

import { Spinner } from "@chakra-ui/react"

const ChatWindow = dynamic(() => import("../src/components/ChatWindow"))

const Chat = () => {
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)
  const [showChat, setShowChat] = useState(false)

  const router = useRouter()

  const handleLogout = async () => {
    await auth.signOut()
    setShowChat(false)
  }

  const getFile = async (url) => {
    const response = await fetch(url)
    const data = await response.blob()
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
  }

  useEffect(() => {
    if (!user) {
      router.push("/")
      return
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "22cfe9ea-f525-4c6f-be4a-75ae67d95a40",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false)
        setShowChat(true)
      })
      .catch(() => {
        let formData = new FormData()
        formData.append("email", user.email)
        formData.append("username", user.email)
        formData.append("secret", user.uid)
        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name)
          axios
            .post("https://api.chatengine.io/users", formData, {
              headers: {
                "private-key": "38aa251f-bc59-422a-b212-a10dd39f45e6",
              },
            })
            .then(() => {
              setLoading(false)
            })
            .catch((error) => console.log(error))
        })
      })
  }, [user])

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true)
    }
  }, [])

  if (!user && loading && showChat) return <Spinner />
  if (!user && !showChat) return <div />

  if (router.isFallback) {
    return <Spinner size={"lg"} />
  }

  return <ChatWindow user={user} handleLogout={handleLogout} />
}

export default Chat
