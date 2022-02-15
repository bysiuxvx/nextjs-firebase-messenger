import React from "react"
import { ChatEngine } from "nextjs-chat-engine"
import { auth } from "../src/firebase"
import { history } from "../src/helpers/helper"

import {
  Grid,
  Container,
  Card,
  Segment,
  Image,
  Button,
  Header,
} from "semantic-ui-react"

const chat = () => {
  return (
    <Container className="chat-page">
      <Segment className="nav-head">
        <Container className="logo"></Container>
        <Container className="logout-tab"></Container>
      </Segment>
      <ChatEngine
        height="80vh"
        projectID="22cfe9ea-f525-4c6f-be4a-75ae67d95a40"
        userName="."
        userSecret="."
      />
    </Container>
  )
}

export default chat
