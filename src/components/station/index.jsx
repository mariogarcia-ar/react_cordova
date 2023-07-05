import { Button, Image, ButtonGroup, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useStations } from "../../hooks/useStations";
import Subcontent from "../sub-content";
import './styles.css';

function Station() {
  const navigate = useNavigate();
  const {getCurrentStation} = useStations();

  const onStart = () => {
    navigate('/station-dashboard');
  }    
  
  const setIsCompleted = ()=>{
    console.log('setIsCompletedeeeeeeeeeeeeeeeeeeeeeee')
  }

  return (
    <>
      <ButtonGroup className="subpages-nav">
        <Button className="btn-lg"  onClick={onStart}>Iniciar la Mision</Button>
      </ButtonGroup>

      {getCurrentStation()?.subpages &&  <Subcontent materiales={getCurrentStation()?.subpages} setIsCompleted={setIsCompleted} />}

    </>
  )
}

export default Station
