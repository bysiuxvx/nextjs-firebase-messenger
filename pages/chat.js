import React, { useEffect, useRef, useState } from "react"
import { Avatar, ChatEngine } from "nextjs-chat-engine"
import { auth } from "../src/firebase"
import { history } from "../src/helpers/helper"
import { Container, Card, Segment, Button } from "semantic-ui-react"

import dynamic from "next/dynamic"

import { useRouter } from "next/router"
import { useAuth } from "../src/contexts/AuthContext"
import axios from "axios"

require("react-quill/dist/quill.snow.css")

const Chat = () => {
  const router = useRouter()
  const { user } = useAuth()
  const [loading, setLoading] = useState(true)

  console.log(user)

  const handleLogout = async () => {
    await auth.signOut()
    router.push("/")
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
          // "project-id": process.env.APP_CHAT_ENGINE_ID,
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => setLoading(false))
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
                // "private-key": process.env.APP_CHAT_ENGINE_KEY,
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error))
        })
      })
  }, [user, router.isReady])

  if (!user || loading) return "Loading..."

  return (
    <Container className="chat-page" fluid>
      <Segment className="nav-head">
        <Container className="logo"></Container>
        <Container className="logout">
          <Button onClick={handleLogout}>Logout</Button>
        </Container>
      </Segment>
      <ChatEngine
        height="calc(100vh - 150px)"
        projectID="22cfe9ea-f525-4c6f-be4a-75ae67d95a40"
        // projectID={process.env.APP_CHAT_ENGINE_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </Container>
  )
}

export default Chat
