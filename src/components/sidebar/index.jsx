import { Container, Form, Offcanvas } from 'react-bootstrap'
import SidebarEvents from './events'
import SidebarUsers from './users'



function Sidebar({show, handleClose}) {
    
  return (
     
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <SidebarUsers />
            <hr />
            <SidebarEvents />
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Sidebar
