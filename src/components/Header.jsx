import QuizLogo from "../assets/images/quiz-logo.png"
import "../assets/css/header.css"
export default function Header() {
  return (
    <>
      <header>
        <img src={QuizLogo} alt="quiz logo"/>
        <h1>React Quiz</h1>
      </header>
    </>
  )
}
