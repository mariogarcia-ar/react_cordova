import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppNavbar() {
  return (    
    <Navbar bg="light" variant="light">
      <Container>
        <Nav.Link as={Link} to='/'>home</Nav.Link>

        <Nav.Link as={Link} to='/login'>login</Nav.Link>
        <Nav.Link as={Link} to='/logout'>logout</Nav.Link>

        <Nav.Link as={Link} to='/station'>station</Nav.Link>
        <Nav.Link as={Link} to='/station-dashboard'>station-dashboard</Nav.Link>

        <Nav.Link as={Link} to='/quiz'>quiz</Nav.Link>
      </Container>
    </Navbar>    
  )
}

export default AppNavbar
