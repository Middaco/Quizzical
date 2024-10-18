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
    console.log(questions)
    return (
        <div className="questions-wrapper">
            {questions.map((question, index) => 
                <Question
                    key={index}
                    question={question.question}
                    incorrect_answers={question.incorrect_answers}
                    correct_answer={question.correct_answer}
                />
            )}
        </div>
    )
}