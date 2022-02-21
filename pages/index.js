import { useEffect } from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useAuth } from "../src/contexts/AuthContext"

const Home = () => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) router.push("/chat")
    if (!user && router.pathname === "/") router.push("/login")
  })

  return (
    <div>
      <Head>
        <title>Best messenger ever</title>
        <meta
          name="description"
          content="Top of the line messenger built with NextJS, Firebase and ChatEngine!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
