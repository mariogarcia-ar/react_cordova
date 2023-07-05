import { Col, Container, Row } from "react-bootstrap";
import StationContent from "./content";
import StationSidebar from "./sidebar";

function StationDashboard() {
  return (
    <Container fluid className="g-0">
        <Row>
          <Col className="col-sm-3"><StationSidebar /></Col>
          <Col className="col-sm-9 station-container"><StationContent /></Col>
        </Row>
    </Container>
  )
}

export default StationDashboard
