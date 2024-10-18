import Question from './Question'
import { useState, useEffect } from 'react'

export default function Quizz(){
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
            .then(response => response.json())
            .then(data => setQuestions(data.results))
        }, [])

    if (!questions.length) {
        return <h1>Loading questions...</h1>;
    }

    return (
        <div className="questions-wrapper">
            {/**create a button to check the answers */}
            {questions.map((question, index) => {
                const answers = []
                question.incorrect_answers.forEach((answer) => answers.push({
                    answer: answer,
                    isCorrect: false
                }))
                answers.splice(Math.floor(Math.random() * answers.length), 0, {
                    answer: question.correct_answer,
                    isCorrect: true
                })
                return (
                    <Question
                        key={index}
                        question={question.question}
                        answers={answers}
                    />
                )
            }
                
            )}
        </div>
    )
}