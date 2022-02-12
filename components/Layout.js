import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

export default Layout
