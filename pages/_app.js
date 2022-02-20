import Layout from "../src/components/Layout"

import { AuthProvider } from "../src/contexts/AuthContext"

import { ChakraProvider } from "@chakra-ui/react"

import "../src/styles/global.scss"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
