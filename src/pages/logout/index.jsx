import { useEffect } from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LayoutGuest from "../../components/layouts/guest"
import LayoutHeadless from "../../components/layouts/headless";
import { useApp } from "../../hooks/useApp";

function LogoutPage() {
  const {setPageTitle} = useApp();
  const navigate = useNavigate();

  useEffect(()=>{
    setPageTitle('Logout');
  },[])

  const onLogin = ()=>{
    navigate('/login');
  }

  return (
    <LayoutHeadless id="LogoutPage">
      <Container fluid className="g-0 LogoutPage-content">
        
      <Row>

        <Col className="text-center">
        <div role="group" className="subpages-nav btn-group">
          <Button className="" size="lg" variant="primary" onClick={onLogin}>Iniciar nuevo intinerario</Button>          
        </div>
      
      
      </Col>
      </Row>
        
      </Container>
    </LayoutHeadless>
  )
}

export default LogoutPage
/*
<Button variant="danger" onClick={onLogin}>Proximo Grupo</Button>
*/