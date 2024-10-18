export default function Question(props){
    function handleClick(){}
    const answers = props.incorrect_answers
    answers.splice(Math.floor(Math.random() * answers.length), 0, props.correct_answer)
    return (
        <div className="question-container">
            <h2>{props.question}</h2>

            <button 
                onClick={handleClick}
                className ="question-option"
            >
                {answers[0]}
            </button>
            <button 
                onClick={handleClick}
                className ="question-option"
            >
                {answers[1]}
            </button>
            <button 
                onClick={handleClick}
                className ="question-option"
            >
                {answers[2]}
            </button>
            <button 
                onClick={handleClick}
                className ="question-option"
            >
                {answers[3]}
            </button>
            <hr/>
        </div>
    )
}