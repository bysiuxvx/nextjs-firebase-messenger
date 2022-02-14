import Layout from "../src/components/Layout"

import "../src/styles/global.scss"

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
