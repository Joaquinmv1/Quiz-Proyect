import React, { useState, useEffect } from 'react'
import { QuizListButtons } from './QuizListButtons'
import { questions } from '../questions';
import { QuizResult } from './QuizResult';

export const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [punctuation, setPunctuation] = useState(0);
    const [time, setTime] = useState(15);
    const [areDisable, setAreDisable] = useState(false);
    const [result, setResult] = useState(false);

    const newQuestion = (isCorrect, e) => {
        isCorrect && setPunctuation(punctuation + 1)
        setAreDisable(true)
        e.target.classList.add(isCorrect ? "valid" : "invalid");

        setTimeout(() => {
            e.target.classList.remove(isCorrect ? "valid" : "invalid");

            if (currentQuestion === questions.length - 1) {
                setResult(true)
            } else {
                setCurrentQuestion(currentQuestion + 1)
                setAreDisable(false)
                setTime(15)
            }
        }, 1000);
    }

    const handleClickQuestions = () => {
        setCurrentQuestion(currentQuestion + 1)
        setAreDisable(false)
        setTime(15)
    }

    const answersShow = () => {
        setCurrentQuestion(0)
    }

    const answersResponse = () => {
        if (currentQuestion === questions.length - 1) {
          window.location.href = "/"
        } else {
          setCurrentQuestion(currentQuestion + 1)
        }
      }

    useEffect(() => {
        const interval = setInterval(() => {
            if (time > 0) {
                setTime(time - 1);
            }
        }, 1000)
        time === 0 && setAreDisable(true)
        return () => clearInterval(interval)
    }, [time])

    return (
        <>
            {result ?
                <QuizResult punctuation={punctuation} currentQuestion={currentQuestion} answersShow={answersShow} answersResponse={answersResponse} />
                :
                <QuizListButtons currentQuestion={currentQuestion} handleClickQuestions={handleClickQuestions} newQuestion={newQuestion} areDisable={areDisable} time={time} />} 
        </>
    )
}
