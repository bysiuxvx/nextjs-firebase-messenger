// import { Container, Grid } from "semantic-ui-react"

import { Container, Flex, Center } from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <Container centerContent maxW="container.xl" bg={"pink"} p={0}>
      <Center h="100vh" centerContent bg={"yellow"} w="100%">
        {children}
      </Center>
    </Container>
  )
}

export default Layout
