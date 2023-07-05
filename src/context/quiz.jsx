import { useEffect } from "react";
// import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
// import { StationsContext } from "./stations";

export const QuizContext = createContext();

function QuizContextProvider({children}){ //TODO SACAR UPDATEVIEW
    const [isReady, setIsReady] = useState(false)
    const [quizzes, setQuizzes] = useState({})
    const [currQuiz, setCurrQuiz] = useState({})
    const [currQuestion, setCurrQuestion] = useState({})
    const [answersSent , setAnswersSent] = useState(false);

    const setupApiData = async () => { 
        const response = await fetch('../../assets/questions.json').then(res => res.json());
        
        setQuizzes(response.quizzes);
        setIsReady(true);

        //malll pero vamos por ahora
        setCurrQuiz(response.quizzes[0]);
        let question =  response.quizzes[0].questions?.find( ele => ele.order === 1);
        setCurrQuestion(question);
    }

    useEffect(()=>{
        console.info('Se monto el QuizContextProvider');
        setupApiData();
    },[])

    return (
        <QuizContext.Provider value={{
            isReady,  
            quizzes, setQuizzes,
            currQuiz, setCurrQuiz,
            currQuestion, setCurrQuestion,
            answersSent , setAnswersSent,
        }} >
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider