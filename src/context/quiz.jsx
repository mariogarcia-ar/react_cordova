import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { AppContext } from ".";
import { useQuiz } from "../hooks/useQuiz";

export const QuizContext = createContext();

function QuizContextProvider({children}){ //TODO SACAR UPDATEVIEW
    const [isReady, setIsReady] = useState(false)
    const [quizzes, setQuizzes] = useState({})
    const [currQuiz, setCurrQuiz] = useState({})
    const [currQuestion, setCurrQuestion] = useState({})
    const [answersSent , setAnswersSent] = useState(false);

    // trigger when the AppContext is ready
    const contextApp = useContext(AppContext)
    const {initApiData, resetApiData} = useQuiz();
    useEffect(()=>{
        if(contextApp.isReadyApp){
            console.info('isReadyApp: Se monto el QuizContextProvider');
            initApiData(setQuizzes,setIsReady, setCurrQuiz, setCurrQuestion);
        }
    },[contextApp.isReadyApp])

    useEffect(()=>{
        if(contextApp.resetSystem){
            console.info('resetApiData: Se reseteo el QuizContextProvider');
            resetApiData(setQuizzes,setIsReady, setCurrQuiz, setCurrQuestion);
        }
    },[contextApp.resetSystem])

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