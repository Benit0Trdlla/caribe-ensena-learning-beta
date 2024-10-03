'use client';
import { useState } from 'react';
export const Activities = ({ Enunciado }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const examplesQuestions = [
        { index: 1, label: 'Ejemplo 1', value: 'option1' },
        { index: 2, label: 'Ejemplo 2', value: 'option2' },
        { index: 3, label: 'Ejemplo 3', value: 'option3' },
        { index: 4, label: 'Ejemplo 4', value: 'option4' },
    ]
    const correctAnswer = 'option1';
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setIsCorrect(selectedValue === correctAnswer);
        setShowAlert(selectedValue !== correctAnswer);
    };
    return (
        <div >
            <h6 className="text-center mt-3">
                <p>{Enunciado}</p>
            </h6>
            {examplesQuestions.map((example) => (
                <div className="form-check" key={example.index}>
                    <input
                        className="form-check-input border border-secondary border-2"
                        type="radio"
                        name="flexRadioDefault"
                        value={example.value}
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">
                        {example.label}
                    </label>
                </div>
            ))}
            {isCorrect &&
                <div className="alert alert-success" role="alert">
                    Respuesta Correcta
                </div>
            }
            {showAlert &&
                <div className="alert alert-danger" role="alert">
                    La respuesta correcta: {correctAnswer} <a className="" data-bs-toggle="modal" data-bs-target="#Modaljustificacion"><strong>Conocé la justificación. Haz Click aquí.</strong></a>
                    {/* MODAL */}
                    <div className="modal fade" id="Modaljustificacion" aria-labelledby="ModalJustify" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body text-black">
                                    XCV
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-gray border border-dark text-black" data-bs-dismiss="modal">Ok! Gracias.</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className='d-flex justify-content-center p-4'>
                <button type="button" className="btn btn-primary me-4">Anterior</button>
                <button type="button" className="btn btn-primary">Siguiente</button>
            </div>
        </div>
    )
}