import Link from "next/link"
import { Menu, Container } from "semantic-ui-react"

const Header = () => {
  return (
    <Container>
      <Menu secondary>
        <Link href={"/login"}>Login</Link>
        <Link href={"/"}>Home</Link> {""}
        <p>Elo</p>
      </Menu>
    </Container>
  )
}

export default Header
