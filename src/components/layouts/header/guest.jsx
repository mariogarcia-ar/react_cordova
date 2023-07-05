import { useState } from "react";
import { Col, Container, Row, Image  } from "react-bootstrap";
import Sidebar from "../../sidebar";
import { useApp } from "../../../hooks/useApp";
import './styless.css';

function HeaderGuest() {
  const {getPageTitle} = useApp();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="g-0 header-guest">
      <Row>
        <Col>
        <header onClick={handleShow}>
          <Container>
            <Row>
          <Col><Image src="./img/ford_academy.png"></Image></Col>
          <Col className="col-6"><h1>{getPageTitle()}</h1></Col>
          <Col className="text-end"><Image src="./img/ford.png"></Image></Col>
          </Row>
          </Container>
          </header>     
        </Col>
      </Row>
      <Sidebar show={show} handleClose={handleClose}/>
    </Container>
  )
}

export default HeaderGuest
