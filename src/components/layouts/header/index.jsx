import { Col, Container, Row, Image } from "react-bootstrap";
import { useApp } from "../../../hooks/useApp";
import './styless.css';

function Header() {
  const {getPageTitle} = useApp();

  return (
    <Container fluid className="g-0 header">
      <Row>
        <Col>
        <header>
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
    </Container>
  )
}

export default Header
