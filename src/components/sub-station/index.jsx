import { useState } from "react";
import { useRef } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../hooks/useQuiz";
import { useStation } from "../../hooks/useStation";
import { useStations } from "../../hooks/useStations";
import Subcontent from "../sub-content";


import './styles.css';


function SubStations() {
  const [isFinishEnabled, setIsFinishEnabled] = useState(false);
  const navigate = useNavigate();

  const {getCurrentStation} = useStations();
  const {getQuizByStation, setCurrQuiz} = useQuiz();    

  const ref = useRef(null); 

  const {getStationMaterials} = useStation();

  const setIsCompleted = ()=>{
    let _quiz = getQuizByStation(getCurrentStation());
      if(_quiz){
        setCurrQuiz(_quiz); //se podria ver tambien si esto no lo tiene que hacer quiz
        navigate('/quiz');    
      }else{
        navigate('/station-check');
      }
  }

  const onFinish = ()=>{
    setIsCompleted();
  }
  const onPrevClick = ()=>{
    ref.current.prev();
  }
  const onNextClick = ()=>{
      ref.current.next();
  }

  return (
    <>
        <ButtonGroup className="substations-nav">
          {isFinishEnabled && <Button variant="danger"  onClick={onFinish}>Finalizar</Button>}
          {/* <Button  onClick={onPrevClick}>Anterior</Button> */}
          <Button  onClick={onNextClick}>Siguiente</Button>
        </ButtonGroup>

        {getStationMaterials() &&  <Subcontent myref={ref} materiales={getStationMaterials()} setIsCompleted={setIsCompleted} />}
    </>
  )
}

export default SubStations
