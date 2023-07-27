import { Button, Col, Container, Form, Offcanvas, Row, ToggleButton } from 'react-bootstrap'
import SidebarEvents from './events'
import SidebarUsers from './users'
import './styles.css';
import StationLayout from '../station-layout';
import { useState } from 'react';
import toast from 'react-hot-toast';


function Sidebar({show, handleClose}) {
  const [isAdmin, setIsAdmin] = useState(false);
    
  const onSetAdmin = (e)=>{
    let checked = e.currentTarget.checked;
    
    if(checked){
      toast.error('Usted ha activado el modo Administrador. Toda modificacion de las configuraciones es su responsabilidad.');
    }

    setIsAdmin(!!checked);
  }
  return (
     
    <Offcanvas className={isAdmin?'admin-mode':'user-mode'} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>P703 FORD Academy v1.6.0 <ToggleButton 
                  id="toggle-check-admin"
                  variant="outline-danger"
                  type="checkbox"
                  value="1"
                checked={isAdmin}
                onChange={onSetAdmin}
                > Administrar</ToggleButton></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
          <Container>
            <Row>
              <Col><StationLayout isAdmin={isAdmin}/></Col>
              <Col><SidebarUsers  isAdmin={isAdmin}/></Col>
              <Col><SidebarEvents  isAdmin={isAdmin}/></Col>
            </Row>
          </Container>
            
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Sidebar
