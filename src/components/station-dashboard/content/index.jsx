import { Container, Row, Col, Image} from 'react-bootstrap'
import { useStation } from '../../../hooks/useStation';
import PDFViewer from '../../pdfViewer';
import VideoPlayer from '../../videoPlayer';
import './styles.css'


function StationContent() {
  const {getCurrMaterial, moveNextMaterial, movePrevMaterial} = useStation();

  return (
    <Container fluid className='g-0 station-dashboard-content-container'>
      <Row className='g-0 row-nav'>
        <Col className='col-sm-1 col-nav' onClick={movePrevMaterial}><Image src="img/arrow_content.png"></Image></Col>
        <Col className='col-sm-11'>
          <h4>{getCurrMaterial()?.title}</h4>
          <div className='pdf-viewer'>
  {getCurrMaterial().type=='pdf' && <PDFViewer pdfUrl={getCurrMaterial()?.url} />}
  {getCurrMaterial().type=='video' && <VideoPlayer url={getCurrMaterial()?.url}/>}
  {getCurrMaterial().type=='image' && <Image src={getCurrMaterial()?.url} />}
          </div>
        </Col>
        <Col className='col-sm-1  col-nav' onClick={moveNextMaterial}><Image src="img/arrow_content.png"></Image></Col>
      </Row>
    </Container>
  )
}

export default StationContent
