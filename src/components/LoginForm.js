import React from "react"
import {
  Container,
  Box,
  Heading,
  Center,
  Icon,
  Button,
  Text,
  Breadcrumb,
  BreadcrumbItem,
} from "@chakra-ui/react"
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons"
import Head from "next/head"

const LoginForm = ({ facebookLogin, googleLogin }) => {
  return (
    <Box borderRadius={"xl"} p={30}>
      <Head>
        <title>Best messenger ever!</title>
      </Head>
      <Heading size={"md"}>Welcome to the better messenger! ✨</Heading>
      <Center>
        <Button my={2} onClick={googleLogin} pr={10}>
          <Breadcrumb separator={"|"}>
            <BreadcrumbItem cen>
              <Icon as={GoogleOutlined} />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Text>Log in using Google</Text>
            </BreadcrumbItem>
          </Breadcrumb>
        </Button>
      </Center>
      <Center>
        <Button onClick={facebookLogin}>
          <Breadcrumb separator={"|"}>
            <BreadcrumbItem>
              <Icon as={FacebookOutlined} />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Text>Log in using Facebook</Text>
            </BreadcrumbItem>
          </Breadcrumb>
        </Button>
      </Center>
    </Box>
  )
}

export default LoginForm
