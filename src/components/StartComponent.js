export default function StartComponent(props){
    return (
        <>
            <h1>Quizzical</h1>
            <p>Are you ready to prove your knowledge?</p>
            <button 
                className="quizz-btn"
                onClick={props.handleClick}
            >
                Start Quizzical!
            </button>
        </>
    )
}