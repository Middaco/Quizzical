export default function Question(props){
    function handleClick(event, isCorrect){
        const className = isCorrect? 'correct-answer' : 'wrong-answer'
        event.target.classList.toggle(className)
    }
    return (
        <div className="question-container">
            <h2>{props.question}</h2>
            {props.answers.map((answer) => (
                <button 
                    onClick={(event) => handleClick(event, answer.isCorrect)}
                    className ="question-option"
                >
                    {answer.answer}
                </button>
            ))}
            
            <hr/>
        </div>
    )
}