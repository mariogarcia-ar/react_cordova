import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../hooks/useQuiz"
import './styles.css'

function QuizFooter() {
  const {moveNext, movePrev, getProgess, isFirstQuestion, isLastQuestion, getCurrQuestion, sendAnswers} = useQuiz();
  const [isNextEnabled, setIsNextEnabled] = useState(false);
  const [isPrevEnabled, setIsPrevEnabled] = useState(false);
  const [isFinishEnabled, setIsFinishEnabled] = useState(false);
  const navigate = useNavigate();

  const updateNavStatus = () =>{    
    // finish - si el porcentaje de respuesta es 100
    if(getProgess()>=100) {setIsFinishEnabled(true);} else {setIsFinishEnabled(false);} 

    // prev - no es el primero 
    if(isFirstQuestion()) {setIsPrevEnabled(false);} else {setIsPrevEnabled(true);} 

    if(isLastQuestion()){
      setIsNextEnabled(false);
    }else{
      if(getCurrQuestion()?.answer) {setIsNextEnabled(true);} else {setIsNextEnabled(false);} 
    }
  }
  
  const scrollToTitle = ()=>{
    let title = document.getElementById('quiz_question_title');
    if(title) title.scrollIntoView({ behavior: 'smooth' });
  }

  const onMovePrev = ()=>{
    if(isPrevEnabled)
      movePrev();

    scrollToTitle()
  }
  const onFinish = ()=>{
    if(isFinishEnabled){
      sendAnswers();
      navigate('/station-check');    
    }
  }
  const onMoveNext = ()=>{
    if(isNextEnabled)
    moveNext();
    
    scrollToTitle()
  }

  useEffect(()=>{
      updateNavStatus();
  },[getCurrQuestion()])

  return (
    <Container fluid className='quiz-footer-container g-0 fixed-bottom' >
    <Row className='g-0'>
      <Col className='text-start quiz-prev' onClick={onMovePrev}> {isPrevEnabled? <img  src='img/arrow.png'></img> : <img src='img/arrow_disabled.png'></img>} </Col>
      <Col className='col-8 text-center quiz-end' onClick={onFinish}>{isFinishEnabled?<span>finalizar</span>:<p></p>}</Col>
      <Col className='text-end  quiz-next' onClick={onMoveNext}> {isNextEnabled?<img src='img/arrow.png'></img>:<img src='img/arrow_disabled.png'></img>} </Col>
    </Row>
  </Container>
  )
}

export default QuizFooter