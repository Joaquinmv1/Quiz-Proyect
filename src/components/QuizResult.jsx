import React, { useState } from 'react'
import { questions } from '../questions'
import { QuizAnswers } from './QuizAnswers'

export const QuizResult = ({punctuation,answersShow, currentQuestion, answersResponse }) => {
    const [visibility,setVisibility ] = useState(false);

    return (
        <>
            {visibility ? <QuizAnswers currentQuestion={currentQuestion} answersResponse={answersResponse}/> :  <section className='reset'>
                <h2>Muchas gracias por participar!</h2>
                <h2>Tu puntuacion fue {punctuation} de {questions.length}</h2>
                <button className='btn-option' onClick={() => window.location.href = "/"} >Volver a jugar</button>
                <button className='btn-option' onClick={()=> {
                    setVisibility(true)
                    answersShow()
                    }}>Ver Respuestas</button>
            </section>}
           
        </>
  )
}

