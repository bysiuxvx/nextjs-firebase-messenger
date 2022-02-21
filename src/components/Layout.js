import { Container, Center, Flex } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import { ColorModeSwitch } from "./ColorModeSwitch"

const Layout = ({ children }) => {
  return (
    <Container centerContent maxW="container.xl" p={0} overflow="hidden">
      <Flex w={"100%"} h={"30px"} justifyContent="flex-end">
        <Center my={10} mr={10}>
          <ColorModeSwitch />
        </Center>
      </Flex>
      <Center h="100vh" centerContent w="100%">
        {children}
      </Center>
    </Container>
  )
}

export default Layout
