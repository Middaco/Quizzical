import Question from './Question'

export default function QuestionList(props){
    return (
        <div className='question-wrapper'>
            {props.questions.map((question, index) => {
                console.log(props.answers)
                return (
                    <Question
                        key={index}
                        question={question.question}
                        answers={props.answers[index]}
                        isSelected={false}
                        showResult={props.showResult}
                    />
                )
                }
            )}
        </div>
    )
}