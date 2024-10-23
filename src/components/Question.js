import { parseEntities } from "parse-entities"

export default function Question(props){
    function handleClick(event, indexOfAnswers){
        const selectedAnswers = document.getElementsByClassName("question-option " + indexOfAnswers + " selected-answer")
        for(let indexOfAnswer = 0; indexOfAnswer < selectedAnswers.length; indexOfAnswer++){
            selectedAnswers[indexOfAnswer].classList.toggle('selected-answer')
        }
        event.target.classList.toggle('selected-answer')
    }

    function showResult(isSelected, isCorrect){
        if(isCorrect){
            return 'correct-answer'
        }
        if(isSelected){   
            return 'wrong-answer'
        }
        

    }
    return (
        <div className="question-container">
            <h2>{parseEntities(props.question)}</h2>
            {props.answers.map((answer, indexOfAnswer) => (
                <button 
                    onClick={(event) => {
                        props.deselectAllAnswers(props.indexOfAnswers)
                        props.selectAnswer(answer, props.indexOfAnswers, indexOfAnswer)
                        handleClick(event, props.indexOfAnswers)
                    }}
                    className ={`question-option ${props.indexOfAnswers} ${props.showResult && showResult(answer.isSelected, answer.isCorrect)}`}
    
                >
                    {parseEntities(answer.answer)}
                </button>
            ))}
            
            <hr/>
        </div>
    )
}