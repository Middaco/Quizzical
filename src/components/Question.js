export default function Question(props){
    return (
        <div className="question-container">
            <h2>{props.question}</h2>
            <button className ="question-option">First option</button>
            <button className ="question-option">Second option</button>
            <button className ="question-option">Third option</button>
            <button className ="question-option">Fourth option</button>
            <hr/>
        </div>
    )
}