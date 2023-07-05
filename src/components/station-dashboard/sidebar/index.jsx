import { Container } from "react-bootstrap"
import StationSidebarMaterial from "./material"
import SidebarStationVerification from "./verification"
import './style.css';

function StationSidebar() {
  return (
    <Container fluid className="g-0 aside">
        <StationSidebarMaterial />
        <SidebarStationVerification />
    </Container>
  )
}

export default StationSidebar
