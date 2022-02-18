import firebase from "firebase/compat/app"

import { signInWithPopup } from "firebase/auth"

import { useRouter } from "next/router"

import { auth } from "../src/firebase"

import {
  Grid,
  Container,
  Card,
  Segment,
  Image,
  Button,
  Header,
} from "semantic-ui-react"

import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons"

import { FacebookAuthProvider } from "firebase/auth"
import { Result } from "antd"

const Login = () => {
  const router = useRouter()

  const fbLogin = () => {
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        const credential = FacebookAuthProvider.credentialFromResult(result)
        const accessToken = credential.accessToken
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error)
        console.log(errorCode)
      })
  }

  return (
    <Grid.Column className="login-page" verticalAlign="middle" color="pink">
      <Card centered className="login-form">
        <Card.Content>
          <Card.Header>Welcome to the better messenger!</Card.Header>
          <Card.Description>
            <Container>
              <Button
                onClick={() =>
                  auth.signInWithRedirect(
                    new firebase.auth.GoogleAuthProvider()
                  )
                }
              >
                <GoogleOutlined /> Login with google
              </Button>
            </Container>
            <Container>
              <Button
                onClick={() =>
                  auth.signInWithRedirect(
                    new firebase.auth.FacebookAuthProvider()
                  )
                }
              >
                <FacebookOutlined /> Login with facebook
              </Button>
            </Container>
            <Container>
              <Button onClick={fbLogin}>
                {/* onClick={() =>
                  signInWithPopup(auth, provider)
                    .then((result) => {
                      const user = result.user
                      const credential =
                        FacebookAuthProvider.credentialFromResult(result)
                      const accessToken = credential.accessToken
                      console.log(user)
                    })
                    .catch((error) => {
                      const errorCode = error.code
                      const errorMessage = error.message
                      // The email of the user's account used.
                      const email = error.email
                      // The AuthCredential type that was used.
                      const credential =
                        FacebookAuthProvider.credentialFromError(error)
                      console.log(errorCode)
                    })
                }
              > */}
                <FacebookOutlined /> Login with facebook
              </Button>
            </Container>
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

export default Login
