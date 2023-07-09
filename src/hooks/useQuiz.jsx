import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import { useSystem } from "./useSystem";

export const useQuiz = () =>{ // TODO: REFACTOR
    const context = useContext(QuizContext);
    const {getApiData, trace} = useSystem();

    const getIsReady = () =>{
        return context.isReady;
    }

    const initApiData = async (setQuizzes,setIsReady, setCurrQuiz, setCurrQuestion) => { 
        console.log('useQuiz: initApiData')
        let url = '../../assets/questions.json';
        let key = 'questions';

        let resp = await getApiData(key, url);
        setQuizzes(resp.quizzes);
        setIsReady(true);

        //malll pero vamos por ahora
        setCurrQuiz(resp.quizzes[0]);
        let question =  resp.quizzes[0].questions?.find( ele => ele.order === 1);
        setCurrQuestion(question);
    }
    
    const resetApiData = async (setQuizzes,setIsReady, setCurrQuiz, setCurrQuestion) => { 
        initApiData(setQuizzes,setIsReady, setCurrQuiz, setCurrQuestion);
    }
    const getQuizByStation = (station)=>{
        let _quiz = context.quizzes.find( ele => ele.station_id === station.id);
        return _quiz;
    }

    const getCurrQuiz = () =>{
        return context.currQuiz;
    }

    const _getCounter = () =>{
        return getCurrQuiz().questions?.length;
    }

    const getProgess = () =>{
        let counterAnswered = getCurrQuiz().questions?.reduce((count, item) =>  count = count + (item.answer? 1 : 0) , 0 );
        return 100 * counterAnswered / _getCounter();
    }

    const getCurrQuestion = ()=>{
        return context.currQuestion;
    }

    const _getQuestionByOrder = (order) =>{
        return getCurrQuiz().questions?.find( ele => ele.order === order);
    }

    const answerCurrQuestion = (option)=>{
        let question = getCurrQuestion();
        question.answer = option.id;
        question.correct = option.correct;

        let q_order = question.order;
        context.setCurrQuestion(JSON.parse(JSON.stringify(question)));
        trace('useQuiz:answerCurrQuestion:setCurrQuestion', question);

setTimeout(() => {
    question = _getQuestionByOrder(q_order);
    context.setCurrQuestion(question);
}, 300);
        
    }

    const isLastQuestion = ()=>{
        let currentQuestion = getCurrQuestion();
        if(!currentQuestion) return false; 

        let idx = currentQuestion.order + 1; 
        return idx > _getCounter();
    }
    const isFirstQuestion = ()=>{
        let currentQuestion = getCurrQuestion();
        if(!currentQuestion) return false; 
        
        let idx = currentQuestion.order - 1; 
        return idx <= 0;
    }

    const moveNext = ()=>{
        let currentQuestion = getCurrQuestion();
        let idx = currentQuestion.order + 1; 
        
        let question;
        
        if(idx > _getCounter()){
            question = currentQuestion; 
        }else{
            question = _getQuestionByOrder(idx);
            currentQuestion.current = false; 
            question.current = true; 
        }    
        context.setCurrQuestion(question);
        trace('useQuiz:moveNext:setCurrQuestion', question);

        return question;
    }

    const movePrev = ()=>{
        let currentQuestion = getCurrQuestion();
        let idx = currentQuestion.order - 1; 
        
        let question;
        
        if(idx <= 0){
            question = currentQuestion; 
        }else{
            question = _getQuestionByOrder(idx);
            currentQuestion.current = false; 
            question.current = true; 
        }    
        context.setCurrQuestion(question);
        trace('useQuiz:movePrev:setCurrQuestion', question);

        return question;
    }

    const resetQuizSend = ()=>{ //TODO: RESET ANSWERS
        context.setAnswersSent(false);
        trace('useQuiz:resetQuizSend:setAnswersSent', false);

    }

    const isQuizSent = ()=>{
        return context.answersSent;
    }

    const sendAnswers = ()=>{
        context.setAnswersSent(true);
        trace('useQuiz:sendAnswers:setAnswersSent', true);
    }

    const setTimerQuiz = (timer)=>{ //TODO: REVIEW EACH SECOND
        getCurrQuiz().timer = timer;
    }

    const getScore = ()=>{
        return getCurrQuiz().questions?.reduce((total,item) =>  total = total + (item.correct? item.score : 0) , 0 );
    }
    
    const getTimer = ()=>{
        return getCurrQuiz().timer;
    }

    const getQuestions = ()=>{
        return getCurrQuiz().questions;
    }

    const setCurrQuiz = (quiz)=>{
        context.setCurrQuiz(quiz);
        trace('useQuiz:setCurrQuiz:setCurrQuiz', quiz);

        let question =  quiz?.questions?.find( ele => ele.order === 1);
        context.setCurrQuestion(question);
        trace('useQuiz:setCurrQuiz:setCurrQuestion', question);

    }

    const getCorrectAnswer = (quiz)=>{
        let _correct = quiz.options.filter( (o) => o.correct);
        return _correct[0];
    }

    return {
        getIsReady, initApiData, resetApiData, isQuizSent, getCurrQuiz, resetQuizSend,
        getProgess, setTimerQuiz,
        getCurrQuestion, answerCurrQuestion,
        moveNext, movePrev,
        isFirstQuestion, isLastQuestion,
        sendAnswers, getQuestions,
        getTimer, getScore,
        getQuizByStation, setCurrQuiz,
        getCorrectAnswer,
    }
}
