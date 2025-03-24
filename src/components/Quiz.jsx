import { useState } from "react"

export default function Quiz() {
    const[activeQuestion, setActiveQuestion] = useState([])
    const[userAnswers, setUserAnswers] = useState([])
  return (
    <>
      <p>Currently active Questions</p>
    </>
  )
}
