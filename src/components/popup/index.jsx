import { useState } from 'react';
import { Button, Image, Modal } from 'react-bootstrap'
import './styles.css';
import { useSystem } from '../../hooks/useSystem';

function Popup({item}) {
    const {trace} = useSystem();
    // modal
    const [show, setShow] = useState(false);  
    const [fullscreen, setFullscreen] = useState(true);
    function handleShow(breakpoint) {
        trace('Popup:handleShow',item);
        setFullscreen(breakpoint);
        setShow(true);
      }    
  return (
    
    <>
    <Image className="popup-more-info" onClick={() => handleShow(true)} src="/img/more.png" />
    <Modal className='popup' 
          show={show} 
          fullscreen={fullscreen} 
          onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="popup-title" dangerouslySetInnerHTML={{ __html: item.title }} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="popup-text" dangerouslySetInnerHTML={{ __html: item.text }} />
      </Modal.Body>
    </Modal>
    </>
  )
}

export default Popup
