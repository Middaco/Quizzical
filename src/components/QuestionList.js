import Question from './Question'

export default function QuestionList(props){
    {/**Create an usestate which will hold the information of each question
        At the current state when a button is clicked and the 'show results'
        button is pushed, Question is re-rendered with 'isSelected' as false
        Having the question in useState should display the Questions properly */}
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
                        isSelected={false}
                        showResult={props.showResult}
                    />
                )
                }
            )}
        </div>
    )
}