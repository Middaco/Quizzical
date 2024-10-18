import QuestionList from './QuestionList'
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
        <div className="quizz-container">
            {/**create a button to check the answers */}
            <QuestionList
                questions={questions}
            />
            
            <button className="results-button">Check answers</button>
        </div>
    )
}