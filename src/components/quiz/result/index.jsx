import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../../../hooks/useQuiz'
import './styles.css'


//TODO: HAY UN ERROR AL RECARGAR LA PAGINA MUESTRA EL PRIMERO 
function QuizResult() {
  const navigate = useNavigate();
  const {getScore, getTimer, resetQuizSend, getQuestions, getCorrectAnswer} = useQuiz()
  
  const onMoveNext = ()=>{
    navigate('/station-check');    
  }

  // const getCorrectAnswer = (quiz)=>{
  //   let _correct = quiz.options.filter( (o) => o.correct);
  //   return _correct[0];
  // }

  return (

    <Container fluid className='container-fluid g-0 quiz-result-container'>
      <Container className='view_answer_page'>
        <Row className='row_results'>
          <Col className='text-center'><Button onClick={onMoveNext}>Finalizar la Actividad</Button></Col>
        </Row>

        <Row className=''>
          <Col>
<ul className='quiz-answers'>
            {getQuestions()?.map((quiz) =>(
                <li key={quiz.id} className={quiz?.correct? 'answer-item-correct' : 'answer-item-incorrect'}>
                  {quiz.question}
                  
                  {<p>{getCorrectAnswer(quiz)?.text}</p>}

                </li>
            ))}
</ul>
          </Col>
        </Row>
  

      </Container>
    </Container>

  )
}

export default QuizResult