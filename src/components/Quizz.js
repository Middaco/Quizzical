import QuestionList from './QuestionList'
import { useState, useEffect } from 'react'

export default function Quizz(){
    const [questions, setQuestions] = useState([])
    const [showResult, setShowResult] = useState(false)

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
            .then(response => response.json())
            .then(data => setQuestions(data.results))
    }, [])

    function handleClick(){
        setShowResult(oldValue => !oldValue)
    }

    if (!questions.length) {
        return <h1>Loading questions...</h1>;
    }

    return (
        <div className="quizz-container">
            {/**create a button to check the answers */}
            <QuestionList
                questions={questions}
                showResult={showResult}
            />
            
            {
                showResult?
                <div style={{display:'flex', flexDirection:'row', alignItems:"baseline"}}>
                    <p>You scored /5 correct answers</p>
                    <button
                        style={{marginInlineStart:'10px'}}
                        className='menu-button'
                        onClick={handleClick}
                    >
                        Play again
                    </button>
                </div>
                    
                :
                    <button 
                        className="menu-button"
                        onClick={handleClick}    
                    >
                        Check answers
                    </button>
            }
            
        </div>
    )
}