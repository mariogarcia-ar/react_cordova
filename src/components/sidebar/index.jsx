import { Col, Container, Form, Offcanvas, Row } from 'react-bootstrap'
import SidebarEvents from './events'
import SidebarUsers from './users'
import './styles.css';
import StationLayout from '../station-layour';


function Sidebar({show, handleClose}) {
    
  return (
     
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              <Col><StationLayout /></Col>
              <Col><SidebarUsers /></Col>
              <Col><SidebarEvents /></Col>
            </Row>
          </Container>
            
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Sidebar
