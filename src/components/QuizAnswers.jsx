import React from 'react'
import { questions } from '../questions'

export const QuizAnswers = ({ currentQuestion, answersResponse }) => {

    return (
        <>
            <section className="reset">
                <h2>Respuestas</h2>
                <h3>{questions[currentQuestion].title}</h3>
                <h3>
                    {questions[currentQuestion].options.filter((question) => question.isCorrect)[0].respuesta}
                </h3>
                <button className='btn-option' onClick={answersResponse}>{currentQuestion === questions.length - 1 ? "volver a jugar" : "siguiente"}</button>
            </section>
        </>
    )
}
