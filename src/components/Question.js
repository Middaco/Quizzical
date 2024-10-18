export default function Question(props){
    function handleClick(){}
    return (
        <div className="question-container">
            <h2>{props.question}</h2>

            <button 
                onClick={handleClick}
                className ="question-option"
            >{props.correct_answer}</button>
            <button 
                onClick={handleClick}
                className ="question-option"
            >
                {props.incorrect_answers[0]}
            </button>
            <button 
                onClick={handleClick}
                className ="question-option"
            >
                {props.incorrect_answers[1]}
            </button>
            <button 
                onClick={handleClick}
                className ="question-option"
            >
                {props.incorrect_answers[2]}
            </button>
            <hr/>
        </div>
    )
}