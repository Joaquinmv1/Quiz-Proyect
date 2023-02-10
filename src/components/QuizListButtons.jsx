import React from 'react'
import { questions } from '../questions'
import { QuizButtons } from './QuizButtons';

export const QuizListButtons = ({ currentQuestion, newQuestion, time, areDisable, handleClickQuestions }) => {

    const handleClickQuestion = (isCorrect, e) => {
        newQuestion(isCorrect, e)
    }

    const handleClick = () => {
        handleClickQuestions()
    }

    return (
        <>
            <section className="container-top">
                <h2 className='h2-top'>Pregunta<span> {currentQuestion + 1} de {questions.length}</span></h2>
            </section>
            <div className="container-center">
                <div className='question'>{questions[currentQuestion].title}</div>
            </div>
            <div className="container-answers">
                {time > 5 ? <p style={{ color: 'green', fontWeight: "bold", fontSize:"1.1rem"  }}>Tiempo restante:{time}</p> : <p style={{ color: 'red', fontWeight: "bold", fontSize:"1.1rem"  }}>Tiempo restante:{time}</p>}
                <div className='answer'>
                    {questions[currentQuestion].options.map((answer, index) => (
                        <QuizButtons key={index} answer={answer} handleClickQuestion={handleClickQuestion} areDisable={areDisable}/>
                    ))}
                    {time === 0 && <button onClick={handleClick}>Continuar</button>}
                </div>
            </div>
        </>
    )
}

