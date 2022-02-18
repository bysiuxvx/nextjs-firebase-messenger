import { Container, Grid } from "semantic-ui-react"

const Layout = ({ children }) => {
  return (
    <Container className="App">
      <Grid centered className="main">
        {children}
      </Grid>
    </Container>
  )
}

export default Layout
