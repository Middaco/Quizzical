import Question from './Question'

export default function QuestionList(props){
    return (
        <div className='question-wrapper'>
            {props.questions.map((question, index) => {
                return (
                    <Question
                        key={index}
                        indexOfAnswers={index}
                        question={question.question}
                        answers={props.answers[index]}
                        showResult={props.showResult}
                        selectAnswer={props.selectAnswer}
                    />
                )
                }
            )}
        </div>
    )
}