import { auth } from "../src/firebase"

import dynamic from "next/dynamic"

import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth"

const Login = () => {
  const LoginForm = dynamic(() => import("../src/components/LoginForm"))

  const googleLogin = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const credential = GoogleAuthProvider.credentialFromError(error)
        console.log(errorCode, errorMessage, credential)
      })
  }
  const facebookLogin = () => {
    const provider = new FacebookAuthProvider()
    signInWithRedirect(auth, provider)
      .then((result) => {
        const user = result.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        const credential = FacebookAuthProvider.credentialFromError(error)
        console.log(errorCode, errorMessage, credential)
      })
  }

  return <LoginForm googleLogin={googleLogin} facebookLogin={facebookLogin} />
}

export default Login
