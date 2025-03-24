import { useState } from "react"
import QUESTIONS from "../Questions.js"
import "../assets/css/Quiz.css"
import QuizTrophy from "../assets/images/quiz-complete.png"


export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([])
    const activeQuestionIndex = userAnswers.length;   //this will help to find the active question index like if we have 1 question answered it will show the second question to use as index start from zero
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length

    function handleSelectedAnswers(selectedAnswer) {
        setUserAnswers((prevAnswers) => {
            return [...prevAnswers, selectedAnswer]
        })
    }

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
                    <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                    <ul id="answers">
                        {shuffledAnswers.map((answer) => (
                            <li key={answer} className="answer">
                                <button onClick={() => handleSelectedAnswers(answer)}>{answer}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>


    )
}
