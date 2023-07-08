import { Col, Container, Row } from "react-bootstrap"
import { useQuiz } from "../../../hooks/useQuiz"
import './style.css'
import { useState } from "react";

function QuizBody() {
  const {getCurrQuestion, answerCurrQuestion, getCorrectAnswer} = useQuiz();
  const [isChecked, setIsChecked] = useState(false);
  
  const setClassName = (option, itemSelected, idx)=>{ 
    
    let _class = option.id === itemSelected.answer? 'quiz-body-item-selected': '';
    
    if(itemSelected.answer){
      let correctAnswer = getCorrectAnswer(getCurrQuestion());
      if(option.id === itemSelected.answer){
        if(option.id === correctAnswer.id){
          _class += " quiz-body-item-selected-right ";
        }else{
          _class += " quiz-body-item-selected-wrong ";
        }
      }
    }

    if(isChecked){
      let correctAnswer = getCorrectAnswer(getCurrQuestion());
      if(option.id === correctAnswer.id){
        _class += " quiz-body-item-selected quiz-body-item-selected-right ";
      }
    }

    idx = (idx+1)*100;
    _class += " bounce-left delay-"+idx;
    return _class;
  }

  const getKey = (option)=>{
    return option.id+'_'+getCurrQuestion().id;
  }

  const onSelect = (option)=>{
    setIsChecked(true);
    answerCurrQuestion(option);
  }

  return (

    <Container className="quiz-container">

      <Row><Col><h3 id="quiz_question_title">{getCurrQuestion()?.question}</h3></Col></Row>
      
      <Row className='quiz-items'>
      {getCurrQuestion()?.options?.map((option, idx) =>(
        <Col md='6' onClick={() => onSelect(option)} 
          key={getKey(option)} className={setClassName(option, getCurrQuestion(), idx)} >
            <span>{option.id} </span>
          {option.text}
        </Col>
        ))}        
      </Row>
    </Container>    
  )
}

export default QuizBody
