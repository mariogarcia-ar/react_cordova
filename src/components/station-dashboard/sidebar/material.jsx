import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap"
import { useStation } from "../../../hooks/useStation"

function StationSidebarMaterial() {
  const {getStationMaterials, getCurrMaterial, setCurrMaterial} = useStation();

  const getClassName = (item)=>{
    let active = (getCurrMaterial().title == item.title? 'active':'');
    return item?.type+" "+active; 
  }

  const onSelect = (item)=>{
    setCurrMaterial(item);
  }

  return (
    <Container fluid className="g-0 station-sidebar-material-containers">
      <Row>
        <Col>
          <ListGroup>
            {getStationMaterials()?.map(ele =>(
              <ListGroupItem key={ele.title} onClick={()=>onSelect(ele)} className={`${getClassName(ele)}`}>{ele.title}</ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default StationSidebarMaterial
