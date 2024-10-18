import Question from './Question'

export default function QuestionList(props){
    return (
        <div className='question-wrapper'>
            {props.questions.map((question, index) => {
                const answers = []
                question.incorrect_answers.forEach((answer) => answers.push({
                    answer: answer,
                    isCorrect: false
                }))
                answers.splice(Math.floor(Math.random() * answers.length), 0, {
                    answer: question.correct_answer,
                    isCorrect: true
                })
                return (
                    <Question
                        key={index}
                        question={question.question}
                        answers={answers}
                    />
                )
                }
            )}
        </div>
    )
}