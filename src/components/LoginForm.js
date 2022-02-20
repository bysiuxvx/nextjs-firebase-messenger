import React from "react"
import { Container, Box, Heading, Center, Icon, Button } from "@chakra-ui/react"
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons"

const LoginForm = ({ facebookLogin, googleLogin }) => {
  return (
    <Box borderRadius={"xl"} bg={"aqua"} p={30}>
      <Heading size={"md"}>Welcome to the better messenger! ✨</Heading>
      <Center>
        <Button my={2} onClick={googleLogin}>
          <Icon as={GoogleOutlined} /> Log in using Google
        </Button>
      </Center>
      <Center>
        <Button onClick={facebookLogin}>
          <Icon as={FacebookOutlined} /> Log in using Facebook
        </Button>
      </Center>
    </Box>
  )
}

export default LoginForm
