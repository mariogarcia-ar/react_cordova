import { useEffect } from "react";
import Layout from "../../components/layouts"
import Quiz from "../../components/quiz"
import QuizResult from "../../components/quiz/result";
import { useApp } from "../../hooks/useApp";
import { useQuiz } from "../../hooks/useQuiz"
import { useStations } from "../../hooks/useStations";


function QuizPage() {
  const {isQuizSent} = useQuiz()
  const {setPageTitle} = useApp();
  const {getCurrentStation, getIsReady} = useStations();

  useEffect(()=>{
    if(getIsReady())
      setPageTitle(getCurrentStation()?.title)
  },[getCurrentStation()])

  return (
    <Layout id="QuizPage">
      <Quiz />
    </Layout>
  )
}

export default QuizPage

/*
{!isQuizSent()
        ?<Quiz />
        :<QuizResult />
      }
*/