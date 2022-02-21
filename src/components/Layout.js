import { Container, Center, Flex } from "@chakra-ui/react"
import dynamic from "next/dynamic"

const Layout = ({ children }) => {
  const ColorSwitchMode = dynamic(() => import("./ColorModeSwitch"))

  return (
    <Container centerContent maxW="container.xl" p={0} overflow="hidden">
      <Flex w={"100%"} h={"30px"}></Flex>
      <Center h="100vh" centerContent w="100%">
        {children}
      </Center>
    </Container>
  )
}

export default Layout
