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
      bg="red"
      className="chatcontainer"
    >
      <Flex>
        <Image src={logo_svg} height={80} alt="messenger logo" />
        <Button onClick={handleLogout}>Logout</Button>
      </Flex>
      {/* <Container maxW={"container.xl"}> */}
      <Center>
        <ChatEngine
          height="calc(100-150px)"
          projectID="22cfe9ea-f525-4c6f-be4a-75ae67d95a40"
          userName={user ? user.email : null}
          userSecret={user ? user.uid : null}
          //   MessageFormSocial={() => <MessageFormSocial />}
        />
        {/* </Container> */}
      </Center>
    </Container>
  )
}

export default ChatWindow
