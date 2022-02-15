import Layout from "../src/components/Layout"

import { AuthProvider } from "../src/contexts/AuthContext"

import "../src/styles/global.scss"

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
