export default function Question(props){
    function handleClick(event, isCorrect){
        const className = isCorrect? 'correct-answer' : 'wrong-answer'
        event.target.classList.toggle(className)
    }
    return (
        <div className="question-container">
            <h2>{props.question}</h2>

            <button 
                onClick={(event) => handleClick(event, props.answers[0].isCorrect)}
                className ="question-option"
            >
                {props.answers[0].answer}
            </button>
            <button 
                onClick={(event) => handleClick(event, props.answers[1].isCorrect)}
                className ="question-option"
            >
                {props.answers[1].answer}
            </button>
            <button 
                onClick={(event) => handleClick(event, props.answers[2].isCorrect)}
                className ="question-option"
            >
                {props.answers[2].answer}
            </button>
            <button 
                onClick={(event) => handleClick(event, props.answers[3].isCorrect)}
                className ="question-option"
            >
                {props.answers[3].answer}
            </button>
            <hr/>
        </div>
    )
}