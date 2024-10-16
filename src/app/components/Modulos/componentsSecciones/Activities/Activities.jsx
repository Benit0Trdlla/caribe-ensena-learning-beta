'use client';
import { useState, useContext, useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation'
import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { saveLocalStorage } from '@/app/lib/saveLocalStorage';
import { Success, Failed } from './Alerts';
import { BtnActivies } from './Buttons/BtnActivities';
export const Activities = () => {
    const { data, indexContext, setIndexContext } = useContext(DataActivitiesContext);

    // Obtener el nombre del curso desde la URL
    const pathname = usePathname()
    const curso = pathname.split('/')[1];
    console.log(curso);

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

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue); // Guardamos la opción seleccionada
        setIsCorrect(selectedValue === selectedQuestions[indexContext].Respuesta);
        setShowAlert(selectedValue !== selectedQuestions[indexContext].Respuesta);
    };

    useEffect(() => {
        setIsCorrect(false);
        setShowAlert(false);
        setSelectedOption(null); // Reseteamos la opción seleccionada al cambiar de pregunta
    }, [indexContext]);

    return (
        <div>
            <h6 className="text-center mt-3">
                {selectedQuestions[indexContext].Enunciado}
            </h6>
            {Questions.map((q) => (
                <div className="form-check" key={q.index}>
                    <input
                        className="form-check-input border border-secondary border-2"
                        type="radio"
                        name="flexRadioDefault"
                        value={q.value}
                        checked={selectedOption === q.value} // Controlamos cuál está seleccionado
                        onChange={handleOptionChange}
                    />
                    <label className="form-check-label">
                        {q.label}
                    </label>
                </div>
            ))}
            {isCorrect &&
                <Success />
            }
            {showAlert &&
                <Failed correctOpcion={selectedQuestions[indexContext].Respuesta} justificacion={selectedQuestions[indexContext].Explicacion} />
            }
            <BtnActivies indexActivities={indexContext} updateIndex={updateIndexActivities} answered={selectedOption === null} />
        </div>
    )
}