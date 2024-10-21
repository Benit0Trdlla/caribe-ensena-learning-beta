'use client';
import { useState, useContext, useEffect } from 'react';
import { useParams } from 'next/navigation'
import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { saveLocalStorage, readLocalStorage } from '@/app/lib';
import { usePathData } from '@/app/hooks/usePathData';
import { Success, Failed } from './Alerts';
import { BtnActivies } from './Buttons/BtnActivities';

export const Activities = () => {
    const { data, indexContext, setIndexContext } = useContext(DataActivitiesContext);

    // Obtener el nombre y nivel del curso desde la URL
    const { cursoName, cursoLevel } = usePathData();

    // Obtener el numero de la seccion desde la URL
    const params = useParams()
    const number = parseInt(params.number);

    // Seleccionar las 5 preguntas correspondientes para cada seccion
    const startIndex = (number - 1) * 5;
    const endIndex = startIndex + 5;
    const selectedQuestions = data.slice(startIndex, endIndex);

    // Reiniciar el índice de las preguntas al cambiar de sección
    useEffect(() => {
        setIndexContext(0);
    }, [params.number]);

    const [showAlert, setShowAlert] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null); // Estado para la opción seleccionada

    // Función para actualizar el índice recibido desde el componente hijo 'BtnActivies'
    const updateIndexActivities = (newIndex) => {
        if (newIndex >= 5) return
        if (newIndex >= 0) setIndexContext(newIndex);
    };

    const Questions = [
        { index: 1, label: selectedQuestions[indexContext].A, value: selectedQuestions[indexContext].A },
        { index: 2, label: selectedQuestions[indexContext].B, value: selectedQuestions[indexContext].B },
        { index: 3, label: selectedQuestions[indexContext].C, value: selectedQuestions[indexContext].C },
        { index: 4, label: selectedQuestions[indexContext].D, value: selectedQuestions[indexContext].D }
    ]

    // Obtener las respuestas anteriores del localStorage
    const { respuestaUser, respuestaCorrecta, isCorrect: isCorrectLocalStorage, seccionCompleted, percentageCompleted } = readLocalStorage(cursoName, cursoLevel, `Seccion-${number}`, indexContext);

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue); // Guardamos la opción seleccionada
        saveLocalStorage(cursoName, cursoLevel, `Seccion-${number}`, indexContext, selectedQuestions[indexContext].Respuesta, selectedValue, data.length);
        setIsCorrect(selectedValue === selectedQuestions[indexContext].Respuesta);
        setShowAlert(selectedValue !== selectedQuestions[indexContext].Respuesta);
    };

    useEffect(() => {
        setIsCorrect(false);
        setShowAlert(false);
        setSelectedOption(null); // Reseteamos la opción seleccionada al cambiar de pregunta
    }, [indexContext]);

    return (
        <>
            <h6 className="text-center mt-3">{selectedQuestions[indexContext].Enunciado}</h6>
            {Questions.map((q) => (
                <div className="form-check" key={q.index}>
                    <input
                        className="form-check-input border border-secondary border-2"
                        type="radio"
                        name="flexRadioDefault"
                        value={q.value}
                        checked={respuestaUser ? respuestaUser === q.value : selectedOption === q.value} // Controlamos cuál está seleccionado
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">
                        {q.label}
                    </label>
                </div>
            ))}
            {respuestaUser ? (
                isCorrectLocalStorage ? <Success /> : <Failed correctOpcion={respuestaCorrecta} justificacion={selectedQuestions[indexContext].Explicacion} />
            ) : (
                isCorrect ? <Success /> : showAlert && <Failed correctOpcion={selectedQuestions[indexContext].Respuesta} justificacion={selectedQuestions[indexContext].Explicacion} />
            )}
            <BtnActivies indexActivities={indexContext} updateIndex={updateIndexActivities} answered={respuestaUser ? false : selectedOption == null} />
        </>
    )
}   