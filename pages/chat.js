// import React, { useEffect, useRef, useState } from "react"
// import { auth } from "../src/firebase"
// import { history } from "../src/helpers/helper"
// import { Container, Card, Segment, Button, Grid } from "semantic-ui-react"

// import dynamic from "next/dynamic"
// import Image from "next/image"
// import { useRouter } from "next/router"
// import { useAuth } from "../src/contexts/AuthContext"
// import axios from "axios"

// import logo_svg from "../src/svg/bullterrier.svg"

// import "../node_modules/react-quill/dist/quill.snow.css"

// const ChatEngine = dynamic(() =>
//   import("nextjs-chat-engine").then((module) => module.ChatEngine)
// )
// const MessageFormSocial = dynamic(() =>
//   import("nextjs-chat-engine").then((module) => module.MessageFormSocial)
// )

// const Chat = () => {
//   const { user } = useAuth()
//   const [loading, setLoading] = useState(true)
//   const [showChat, setShowChat] = useState(false)

//   const router = useRouter()

//   const handleLogout = async () => {
//     await auth.signOut()
//     setShowChat(false)
//   }

//   const getFile = async (url) => {
//     const response = await fetch(url)
//     const data = await response.blob()
//     return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
//   }

//   useEffect(() => {
//     if (!user) {
//       router.push("/login")
//       return
//     }

//     axios
//       .get("https://api.chatengine.io/users/me", {
//         headers: {
//           "project-id": "22cfe9ea-f525-4c6f-be4a-75ae67d95a40",
//           // "project-id": process.env.APP_CHAT_ENGINE_ID,
//           "user-name": user.email,
//           "user-secret": user.uid,
//         },
//       })
//       .then(() => {
//         setLoading(false)
//         setShowChat(true)
//       })
//       .catch(() => {
//         let formData = new FormData()
//         formData.append("email", user.email)
//         formData.append("username", user.email)
//         formData.append("secret", user.uid)
//         getFile(user.photoURL).then((avatar) => {
//           formData.append("avatar", avatar, avatar.name)
//           axios
//             .post("https://api.chatengine.io/users", formData, {
//               headers: {
//                 "private-key": "38aa251f-bc59-422a-b212-a10dd39f45e6",
//                 // "private-key": process.env.APP_CHAT_ENGINE_KEY,
//               },
//             })
//             .then(() => {
//               setLoading(false)
//             })
//             .catch((error) => console.log(error))
//         })
//       })
//   }, [user])

//   useEffect(() => {
//     if (typeof document !== null) {
//       setShowChat(true)
//     }
//   }, [showChat])

//   if (!user && loading && showChat) return "Please wait..."
//   if (!user && !showChat) return <div />

//   return (
//     <Container className="chat-page">
//       <Segment className="chat-nav">
//         <Container className="logo">
//           <Image src={logo_svg} height={80} alt="messenger logo" />
//         </Container>
//         <Button onClick={handleLogout}>Logout</Button>
//       </Segment>
//       <ChatEngine
//         height="calc(100vh - 150px)"
//         projectID="22cfe9ea-f525-4c6f-be4a-75ae67d95a40"
//         // projectID={process.env.APP_CHAT_ENGINE_ID}
//         userName={user ? user.email : null}
//         userSecret={user ? user.uid : null}
//         MessageFormSocial={() => <MessageFormSocial />}
//       />
//     </Container>
//   )
// }

// export default Chat

import React, { useEffect, useRef, useState } from "react"
import { auth } from "../src/firebase"
import { history } from "../src/helpers/helper"
import { Container, Card, Segment, Button, Grid } from "semantic-ui-react"

import dynamic from "next/dynamic"
import Image from "next/image"
import { useRouter } from "next/router"
import { useAuth } from "../src/contexts/AuthContext"
import axios from "axios"

import logo_svg from "../src/svg/bullterrier.svg"

import "../node_modules/react-quill/dist/quill.snow.css"

const ChatEngine = dynamic(() =>
  import("nextjs-chat-engine").then((module) => module.ChatEngine)
)
const MessageFormSocial = dynamic(() =>
  import("nextjs-chat-engine").then((module) => module.MessageFormSocial)
)

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
          // "project-id": "22cfe9ea-f525-4c6f-be4a-75ae67d95a40",
          "project-id": process.env.APP_CHAT_ENGINE_ID,
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
                // "private-key": "38aa251f-bc59-422a-b212-a10dd39f45e6",
                "private-key": process.env.APP_CHAT_ENGINE_KEY,
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
  }, [showChat])

  if (!user && loading && showChat) return "Please wait..."
  if (!user && !showChat) return <div />

  return (
    <Container className="chat-page">
      <Segment className="chat-nav">
        <Container className="logo">
          <Image src={logo_svg} height={80} alt="messenger logo" />
        </Container>
        <Button onClick={handleLogout}>Logout</Button>
      </Segment>
      <ChatEngine
        height="calc(100vh - 150px)"
        // projectID="22cfe9ea-f525-4c6f-be4a-75ae67d95a40"
        projectID={process.env.APP_CHAT_ENGINE_ID}
        userName={user ? user.email : null}
        userSecret={user ? user.uid : null}
        MessageFormSocial={() => <MessageFormSocial />}
      />
    </Container>
  )
}

export default Chat
