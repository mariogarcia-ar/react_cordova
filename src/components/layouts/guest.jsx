import { Container } from 'react-bootstrap'
// import FooterGuest from './footer/guest'
import HeaderGuest from './header/guest'

function LayoutGuest({ id, children}) {
  return (
    <Container id={id} fluid className='g-0'>
        <HeaderGuest />
        {children}
    </Container>
  )
}

export default LayoutGuest
