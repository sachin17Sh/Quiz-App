import { useCallback, useState } from "react"
import QUESTIONS from "../Questions.js"
import "../assets/css/Quiz.css"
import QuizTrophy from "../assets/images/quiz-complete.png"
import Timer from "./Timer.jsx"

export default function Quiz() {
    const [answerState, setAnswerState] = useState('')
    const [userAnswers, setUserAnswers] = useState([])
    const activeQuestionIndex = answerState === '' ? userAnswers.length  : userAnswers.length-1;   //this will help to find the active question index like if we have 1 question answered it will show the second question to use as index start from zero
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length

    const handleSelectedAnswers = useCallback(function handleSelectedAnswers(selectedAnswer) {
        setAnswerState('Answered')
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer]
        })

        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState('correct')
            } else {
                setAnswerState('wrong')
            }
            setTimeout(()=>{
                setAnswerState('')
            },2000)
        },1000)
    }, [activeQuestionIndex])

    const handleSkipAnswers = useCallback(() => handleSelectedAnswers(null), [handleSelectedAnswers])

    if (quizIsComplete) {
        return <div id="summary">
            <img src={QuizTrophy} alt="trophy" />
            <h2>Quiz Completed!</h2>
        </div>
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    shuffledAnswers.sort(() => Math.random() - 0.5)
    return (
        <>
            <div id="quiz">
                <div id="question">
                    <Timer key={activeQuestionIndex}
                        timeout={10000}
                        onTimeout={handleSkipAnswers} />
                    <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                    <ul id="answers">
                        {shuffledAnswers.map((answer) => {
                            const isSelected =  userAnswers[userAnswers.length-1] === answer;
                            let cssClass = '';

                            if(answerState === 'Answered' && isSelected){
                                cssClass = 'selected'
                            } 

                            if((answerState === 'correct' || answerState === 'wrong')&& isSelected){
                                cssClass = answerState;
                            }
 
                            return <li key={answer} className="answer">
                                <button onClick={() => handleSelectedAnswers(answer)} className={cssClass}>
                                {answer}
                                </button>
                            </li>
                        }
                            
                        )}
                    </ul>
                </div>
            </div>
        </>


    )
}
