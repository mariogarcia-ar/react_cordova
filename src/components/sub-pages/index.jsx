import { useRef } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { usePages } from "../../hooks/usePages";
import Subcontent from "../sub-content";
import './styles.css';

function Subpages({id, redirect_to}) {
    const {getPageById} = usePages();
    const navigate = useNavigate();
    const ref = useRef(null); 

    const setIsCompleted = ()=>{
      navigate(redirect_to);
    }
    
    const onNextClick = () => {
      ref.current.next();
    };

  return (
    <>
        <ButtonGroup className="subpages-nav">
          <Button className="btn-lg"  onClick={onNextClick}>Siguiente</Button>
        </ButtonGroup>
        
        {getPageById(id)?.subpages &&  <Subcontent myref={ref} materiales={getPageById(id)?.subpages} setIsCompleted={setIsCompleted} />}
    </>
  )
}

export default Subpages