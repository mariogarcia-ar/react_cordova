import { Container } from "react-bootstrap"
// import Footer from "./footer"
import Header from "./header"

function LayoutHeadless({id, children}) {
  return (
    <Container id={id} fluid className='g-0'>
        {children}
    </Container>
  )
}

export default LayoutHeadless
