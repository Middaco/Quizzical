import Question from './Question'
import { useState, useEffect } from 'react'

export default function Quizz(){
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        console.log("Use effect run!")
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
            .then(response => response.json())
            .then(data => setQuestions(data.results))

        }, [])
    console.log(questions)

    if (!questions.length) {
        return <h1>Loading questions...</h1>;
    }

    return (
        <div className="questions-wrapper">
            {questions.map((question, index) => 
                <Question
                    key={index}
                    question={question.question}
                />
            )}
        </div>
    )
}