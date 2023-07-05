import { Container } from "react-bootstrap"
// import Footer from "./footer"
import Header from "./header"

function Layout({id, children}) {
  return (
    <Container id={id} fluid className='g-0'>
        <Header />
        {children}
    </Container>
  )
}

export default Layout
