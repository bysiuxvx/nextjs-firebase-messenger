import React from "react"

import {
  Container,
  Flex,
  Icon,
  Button,
  Center,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react"

import dynamic from "next/dynamic"
import logo_svg from "../svg/bullterrier.svg"
import Image from "next/image"

import Head from "next/head"

const ChatWindow = ({ user, handleLogout }) => {
  const ChatEngine = dynamic(
    () => import("react-chat-engine").then((module) => module.ChatEngine),
    {
      loading: () => (
        <Stack direction={"column"}>
          <Text>Loading...</Text>
          <Spinner size={"lg"} />
        </Stack>
      ),
    }
  )
  const MessageFormSocial = dynamic(() =>
    import("react-chat-engine").then((module) => module.MessageFormSocial)
  )

  return (
    <Container
      centerContent
      maxW={"container.xl"}
      h={"100%"}
      p={5}
      overflow="hidden"
    >
      <Head>
        <title>{user ? `${user.email}'s chat room` : "Chat room"}</title>
      </Head>
      <Flex p={10} w={"100%"} justifyContent="space-between">
        <Center p={0} m={0} ml={150}>
          <Image
            src={logo_svg}
            height={"80px"}
            width={"60px"}
            alt="messenger logo"
          />
        </Center>
        <Center p={0} m={0}>
          <Button onClick={handleLogout}>Logout</Button>
        </Center>
      </Flex>
      <Container h={"100%"} maxW={"100%"} flexGrow borderRadius={"lg"}>
        <ChatEngine
          height="75vh"
          projectID="22cfe9ea-f525-4c6f-be4a-75ae67d95a40"
          userName={user ? user.email : null}
          userSecret={user ? user.uid : null}
          renderNewMessageForm={() => <MessageFormSocial />}
          //   MessageFormSocial={() => <MessageFormSocial />}
        />
      </Container>
    </Container>
  )
}

export default ChatWindow
