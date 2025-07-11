'use client'
import { ProgressBar } from "./ProgressBar"
import { useHidratationSolution } from '@/app/hooks/useHidratationSolution'

export const Modal = ({ moduloPercentage, showInfo, onClose, total, inCorrect, correct }) => {
    const isClient = useHidratationSolution();
    return (
        <>
            {showInfo && isClient &&
                <div className='alert alert-light LevelCompleted' role='alert'>
                    <button type="button" className="btn-close float-end" onClick={onClose} aria-label="Close"></button>
                    <h1 className="fs-5">Chequea tu progreso</h1>
                    <hr />
                    <h4 className="alert-heading mb-3">Respuestas incorrectas: {inCorrect}</h4>
                    <h4 className="alert-heading mb-3">Respuestas correctas: {correct}</h4>
                    <h4 className="alert-heading mb-3">Total de preguntas: {correct + inCorrect} de {total}</h4>
                    <hr />
                    <div className="mx-auto">
                        <p className='mb-3'>Tu progreso en este modulo es de:</p>
                        <ProgressBar moduloPercentage={moduloPercentage} />
                    </div>
                </div>
            }
        </>
    );
}
