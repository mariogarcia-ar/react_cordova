import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../hooks/useApp';

function Logout() {
  const {resetSystem} = useApp();
  const navigate = useNavigate();

  const onLogin = ()=>{
    resetSystem(true);
    navigate('/login');
  }
  
  return (
    <Container fluid className="g-0 LogoutPage-content">
      <Row>
        <Col className="text-center">
        <div role="group" className="subpages-nav btn-group">
          <Button className="" size="lg" variant="primary" onClick={onLogin}>Iniciar nuevo intinerario</Button>          
        </div>
      </Col>
      </Row>
      </Container>
  )
}

export default Logout