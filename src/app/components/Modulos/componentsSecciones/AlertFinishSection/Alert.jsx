'use client'
import Link from "next/link"
import { usePathData } from "@/app/hooks/usePathData"
import { FinishSectionContext } from "@/app/contexts/FinishSection-context"
import { calculatePercentageCorrect, setLastModuloAndSeccion } from "@/app/lib"
import { useContext } from "react"

export const Alert = ({ seccionNumber }) => {
    const TotalPreguntasSheets = 35
    const { finished, setFinished } = useContext(FinishSectionContext)
    const { cursoName, cursoLevel } = usePathData()

    const porcentajeCorrectas = calculatePercentageCorrect(cursoName, cursoLevel, `Seccion-${seccionNumber}`);

    const DeleteSeccion = (cursoName, cursoLevel, seccionNumber) => {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};
            if (typeof previousAnswers === 'object' && previousAnswers[cursoLevel] && previousAnswers[cursoLevel][seccionNumber]) {
                delete previousAnswers[cursoLevel][seccionNumber];
                if (!previousAnswers[cursoLevel][seccionNumber]) {
                    localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));
                }
            }
        }
        setFinished(false)
    };

    const recalculatePercentage = (cursoName, cursoLevel, seccionNumber) => {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};
            if (typeof previousAnswers === 'object' && previousAnswers[cursoLevel]) {
                const percentageCompleted = previousAnswers[cursoLevel].percentageCompleted;

                // Calcular la cantidad de preguntas respondidas
                const preguntasRespondidas = Object.keys(previousAnswers[cursoLevel][seccionNumber])
                    .filter(key => key !== 'seccionCompleted' && key !== 'percentageCompleted').length;

                // Calcular el porcentaje de preguntas respondidas
                const percentageCompletedSeccion = ((preguntasRespondidas / TotalPreguntasSheets) * 100).toFixed(0);

                // Calcular el nuevo porcentaje
                const newPercentage = percentageCompleted - percentageCompletedSeccion;

                // Actualizar el porcentaje
                previousAnswers[cursoLevel].percentageCompleted = newPercentage;

                localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));
            }
        }
    }

    const recalculateQuestionsData = (cursoName, cursoLevel, seccionNumber) => {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};

            if (typeof previousAnswers === 'object' && previousAnswers[cursoLevel] && previousAnswers[cursoLevel][seccionNumber]) {
                const preguntas = Object.values(previousAnswers[cursoLevel][seccionNumber]);

                const totalPreguntasSaved = preguntas.length - 1;
                const preguntasCorrectas = preguntas.filter(pregunta => pregunta.isCorrect).length;
                const preguntasIncorrectas = totalPreguntasSaved - preguntasCorrectas;

                const { mountCorrect = 0, mountIncorrect = 0 } = previousAnswers[cursoLevel].questionsData || {};

                // Actualizar los contadores en base a los cambios de esta sección
                const updatedCorrect = mountCorrect - preguntasCorrectas; // Resta las correctas de la sección
                const updatedIncorrect = mountIncorrect - preguntasIncorrectas; // Resta las incorrectas de la sección

                // Evitar valores negativos
                previousAnswers[cursoLevel].questionsData = {
                    mountCorrect: Math.max(0, updatedCorrect),
                    mountIncorrect: Math.max(0, updatedIncorrect)
                };

                localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));

                // Recalcular el porcentaje
                recalculatePercentage(cursoName, cursoLevel, seccionNumber)

                // Luego de actualizar los contadores, elimina la sección
                DeleteSeccion(cursoName, cursoLevel, seccionNumber);
            }
        }
    };

    return (
        <>
            {finished && (
                <div className="LevelCompleted" >
                    <div className='alert alert-light' role='alert'>
                        <h4 className="alert-heading mb-3">{`Sección ${seccionNumber} Completada!`}</h4>
                        <img src="/Images/Home.png" alt="Imagen de nivel completado" width={200} height={200} />
                        <hr />
                        <div className="d-grid gap-2 w-50 mx-auto">
                            {porcentajeCorrectas < 75 && <h5 className="text-center"><small>Tu porcentaje de respuestas correctas es de: {porcentajeCorrectas} % debes resetear la sección</small></h5>}
                            {porcentajeCorrectas > 75 &&
                                <Link href={`/${cursoName}/${cursoLevel}/${seccionNumber + 1}`} className="btn btn-primary" onClick={() => { setLastModuloAndSeccion(cursoName, cursoLevel, seccionNumber); setFinished(false) }}>
                                    Siguiente nivel
                                </Link>
                            }
                            <button className="btn btn-danger" onClick={() => recalculateQuestionsData(cursoName, cursoLevel, `Seccion-${seccionNumber}`)}>
                                <a href={`/${cursoName}/${cursoLevel}/${seccionNumber}`} className="text-white text-decoration-none">
                                    Resetear la sección
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}