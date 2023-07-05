import { useEffect } from "react";
import { Container, ProgressBar } from "react-bootstrap"
import { useStopwatch } from "react-timer-hook"
import { useQuiz } from "../../../hooks/useQuiz"
import './styles.css'

function QuizHeader() {
  const {totalSeconds} = useStopwatch({autoStart: true})
  const {getProgess, setTimerQuiz} = useQuiz();

  useEffect(()=>{ 
    setTimerQuiz(totalSeconds); 
  },[totalSeconds])

  return (
      <Container fluid className='g-0 quiz-header-container'>
        <div className='g-0'>
          <ProgressBar now={getProgess()} label={`${getProgess()}%`}  />
        </div>
        <div className='g-0 countdown'>
        {totalSeconds}<small>seg.</small>
        </div>
      </Container>
  )
}

export default QuizHeader
