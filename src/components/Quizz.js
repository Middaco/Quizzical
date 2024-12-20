import QuestionList from './QuestionList'
import { useState, useEffect } from 'react'

export default function Quizz(){
    const [questions, setQuestions] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [answers, setAnswers] = useState([])
    const [signal, setSignal] = useState(0)

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
            .then(response => response.json())
            .then(data => setQuestions(data.results))
    }, [signal])

    function handleClick(){
        if(showResult){
            setQuestions([])
            setSignal(oldSignal => oldSignal + 1)
            setAnswers([])
        }
        setShowResult(oldValue => !oldValue)
    }

    if (!questions.length) {
        return <h1>Loading questions...</h1>;
    }

    //Define the answers state, in order to avoid re-rendering the answers and 
    //not change the order of the Answers. Also this will help on keeping the 
    //selected answer SELECTED
    if(!answers.length){
        const tempArrayOfArrays = []
        let tempArrayOfAnswers = []
        questions.forEach(question => {
            question.incorrect_answers.forEach((answer) => tempArrayOfAnswers.push(
                {
                    answer: answer, 
                    isCorrect: false, 
                    isSelected: false
                }
            ))
            tempArrayOfAnswers.splice(Math.floor(Math.random() * tempArrayOfAnswers.length), 0, {
                answer: question.correct_answer,
                isCorrect: true,
                isSelected: false
            })
            tempArrayOfArrays.push(tempArrayOfAnswers)
            tempArrayOfAnswers = []
        })
        setAnswers(tempArrayOfArrays)
    }

    function selectAnswer(answer, index, indexOfAnswer){
        setAnswers(oldAnswers => {
            oldAnswers[index][indexOfAnswer] = {
                ...answer,
                isSelected: true
            }
            return oldAnswers
        })
    }

    function deselectAllAnswers(indexOfAnswers){
        setAnswers(oldAnswers => {
            let i = 0;
            for(i = 0; i < oldAnswers[indexOfAnswers].length; i++){
                oldAnswers[indexOfAnswers][i].isSelected = false;
            }
            
            return oldAnswers
        })
    }

    function computeNumberOfCorrectAnswers(){
        let correctAnswersSelected = 0
        answers.forEach(answerList =>{ 
            answerList.forEach(answer =>{
                if(answer.isCorrect && answer.isSelected){
                    correctAnswersSelected += 1
                } 
            })
        })
        return correctAnswersSelected
    }
    
    return (
        <div className="quizz-container">
            {/**create a button to check the answers */}
            <QuestionList
                questions={questions}
                answers={answers}
                showResult={showResult}
                selectAnswer={selectAnswer}
                deselectAllAnswers={deselectAllAnswers}
            />
            
            {
                showResult?
                <div style={{display:'flex', flexDirection:'row', alignItems:"baseline"}}>
                    <p>You scored {computeNumberOfCorrectAnswers()}/5 correct answers</p>
                    <button
                        style={{marginInlineStart:'10px'}}
                        className='menu-button'
                        onClick={handleClick}
                    >
                        Play again
                    </button>
                </div>
                    
                :
                    <button 
                        className="menu-button"
                        onClick={handleClick}    
                    >
                        Check answers
                    </button>
            }
            
        </div>
    )
}