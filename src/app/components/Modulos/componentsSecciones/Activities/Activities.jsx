'use client';
import { useState, useContext, useEffect } from 'react';
import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { Success, Failed } from './Alerts';
import { BtnActivies } from './Buttons/BtnActivities';
export const Activities = () => {
    const { data, indexContext, setIndexContext } = useContext(DataActivitiesContext);

    const [showAlert, setShowAlert] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null); // Estado para la opción seleccionada

    // Función para actualizar el índice que viene desde el compoenente BtnActivies
    const updateIndexActivities = (newIndex) => {
        if (newIndex >= 0 && newIndex < data.length) {
            setIndexContext(newIndex);
        }
    };

    const Questions = [
        { index: 1, label: data[indexContext].A, value: data[indexContext].A },
        { index: 2, label: data[indexContext].B, value: data[indexContext].B },
        { index: 3, label: data[indexContext].C, value: data[indexContext].C },
        { index: 4, label: data[indexContext].D, value: data[indexContext].D }
    ]

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue); // Guardamos la opción seleccionada
        setIsCorrect(selectedValue === data[indexContext].Respuesta);
        setShowAlert(selectedValue !== data[indexContext].Respuesta);
    };

    useEffect(() => {
        setIsCorrect(false);
        setShowAlert(false);
        setSelectedOption(null); // Reseteamos la opción seleccionada al cambiar de pregunta
    }, [indexContext]);

    return (
        <div >
            <h6 className="text-center mt-3">
                <p>{data[indexContext].Enunciado}</p>
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
                <Failed correctOpcion={data[indexContext].Respuesta} justificacion={data[indexContext].Explicacion} />
            }
            <BtnActivies indexActivities={indexContext} updateIndex={updateIndexActivities} answered={selectedOption === null} />
        </div>
    )
}