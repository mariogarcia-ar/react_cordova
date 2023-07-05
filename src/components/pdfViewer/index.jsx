import { useState } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './styles.css';


// Configura el worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom(zoom + 0.5);
  };

  const handleZoomOut = () => {
    if (zoom > 0.5) {
      setZoom(zoom - 0.5);
    }
  };

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePrev = () => { console.log(currentPage);
    let p = currentPage - 1;
    setCurrentPage(p);
  };
  const handleNext = () => {
    let p = currentPage + 1;
    setCurrentPage(p);
  };

//TODO: configurar autoPlay
//TODO: configurar el tamaño del video
  return (
    // style={{width:"1290px", height:"788px"}}
<Container id="pdfviewer-wrapper" className="p-0">
<Row id="pdfviewer-nav">
  <Col>
    <div>
      <Button onClick={handlePrev} id="go_previous">Previous</Button>
      <Form.Control className="w-25 d-inline" type="text" value={` ${currentPage} / ${numPages}`} id="current_page" />
      <Button onClick={handleNext} id="go_next">Next</Button>
    </div>
  </Col>
  <Col>
    <div id="zoom_controls">  
      <Button onClick={handleZoomIn} id="zoom_in">+</Button>
      <Button onClick={handleZoomOut} id="zoom_out">-</Button>
    </div>
  </Col>
</Row>

<Row>
  <Col>
        <div id="pdfviewer-container">
            <div id="pdfviewer-page">
<Document file={pdfUrl} onLoadSuccess={handleDocumentLoadSuccess}>
  <Page pageNumber={currentPage} width={280*4} scale={zoom} />
</Document>

            </div>
        </div>
  </Col>
</Row>
</Container>
  );
}

export default PDFViewer;
