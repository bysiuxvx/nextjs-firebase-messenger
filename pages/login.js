import firebase from "firebase/compat/app"

import Router from "next/router"

import { history } from "../src/helpers/helper"

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

const Login = () => {
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
              <Button onClick={() => history("/haha")}>
                <FacebookOutlined /> Test
              </Button>
            </Container>
          </Card.Description>
        </Card.Content>
      </Card>
    </Grid.Column>
  )
}

export default Login
