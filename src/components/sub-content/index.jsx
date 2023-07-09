import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Carousel, Image } from "react-bootstrap";
import PDFViewer from "../pdfViewer";
import Popup from "../popup";
import VideoPlayer from "../videoPlayer";
import './styles.css';
import { useSystem } from "../../hooks/useSystem";

function Subcontent({myref, materiales, setIsCompleted}) {
    const [index, setIndex] = useState(0);
    const [count, setCount] = useState(0);
    const [visited, setVisited] = useState([]);
    const {trace} = useSystem();

    useEffect(()=>{
      setCount(materiales.length);
    },[])

    const handleSelect = (selectedIndex) => {
        let _index = index + 1;
        setIndex(_index); 
        trace('Subcontent:handleSelect',{index:_index, innerHTML: myref.current.element.innerHTML});

        let _visited = visited;
        if(_visited.indexOf(selectedIndex) === -1) {
          _visited.push(selectedIndex);
        }
        setVisited(_visited);
        // TODO: HAY UN BUG SI VAS Y VOLVES
        if(_visited.length == (count)){
            setIsCompleted(true);
        }
    };

    return (
    <>
      <Carousel className="subcontent" ref={myref} onSelect={handleSelect}
            interval={null} 
            touch={false} 
            controls={false} 
            indicators={false}> 
          {materiales.map((item) =>(
            <Carousel.Item key={item.id}>        
              {item.type=='pdf' && <PDFViewer pdfUrl={item.url} />}
              {item.type=='video' && <VideoPlayer url={item.url}/>}
              {item.type=='image' && <Image className="d-block w-100" src={item.url} />}              
                  
              <Carousel.Caption className={item?.class}>
                {item.title && <h2 className="subcontent-title" dangerouslySetInnerHTML={{ __html: item.title }} />}
                {item.subtitle && <h3 className="subcontent-subtitle" dangerouslySetInnerHTML={{ __html: item.subtitle }} />}
                {item.text && <div className="subcontent-text" dangerouslySetInnerHTML={{ __html: item.text }} />}
              </Carousel.Caption>

              {item.popup && <Popup item={item.popup} /> } 
              
            </Carousel.Item>
          ))}

      </Carousel>
    </>
  )
}

export default Subcontent
