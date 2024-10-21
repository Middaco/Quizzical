export default function Question(props){
    function handleClick(event, isSelected){
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
            <h2>{props.question}</h2>
            {props.answers.map((answer, indexOfAnswer) => (
                <button 
                    onClick={(event) => {
                        props.selectAnswer(answer, props.indexOfAnswers, indexOfAnswer)
                        handleClick(event, answer.isSelected)
                    }}
                    className ={`question-option ${props.showResult && showResult(answer.isSelected, answer.isCorrect)}`}
                    
                >
                    {answer.answer}
                </button>
            ))}
            
            <hr/>
        </div>
    )
}