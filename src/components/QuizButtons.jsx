import React from 'react'

export const QuizButtons = ({ answer, areDisable, handleClickQuestion }) => {
    return (
        <button disabled={ areDisable } onClick={(e) => handleClickQuestion(answer.isCorrect, e)}>{answer.respuesta}</button>
    )
}
