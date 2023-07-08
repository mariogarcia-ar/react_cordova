import { useState } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import Sidebar from "../../sidebar";
import { useApp } from "../../../hooks/useApp";
import './styless.css';

function Header() {
  const {getPageTitle} = useApp();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="g-0 header">
      <Row>
        <Col>
        <header onClick={handleShow}>
          <Container>
            <Row>
          <Col><Image src="./img/ford_academy.png"></Image></Col>
          <Col><h1>{getPageTitle()}</h1></Col>
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

export default Header
