'use client'
import Link from "next/link"
import { usePathData } from "@/app/hooks/usePathData"
import { FinishSectionContext } from "@/app/contexts/FinishSection-context"
import { calculatePercentageCorrect, readQuestionsData } from "@/app/lib"
import { useContext } from "react"
export const Alert = ({ seccionNumber }) => {
    const { finished, setFinished } = useContext(FinishSectionContext)
    const { cursoName, cursoLevel } = usePathData()

    const porcentajeCorrectas = calculatePercentageCorrect(cursoName, cursoLevel, `Seccion-${seccionNumber}`);
    const { correct, inCorrect } = readQuestionsData(cursoName, cursoLevel);


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

    const recalculateQuestionsData = (cursoName, cursoLevel, seccionNumber) => {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            const previousAnswers = JSON.parse(localStorage.getItem(`${cursoName}`)) || {};
            if (typeof previousAnswers === 'object' && previousAnswers[cursoLevel] && previousAnswers[cursoLevel][seccionNumber]) {

                const preguntas = Object.values(previousAnswers[cursoLevel][seccionNumber]);
                const totalPreguntasSaved = preguntas.length - 1;
                const preguntasCorrectas = preguntas.filter(pregunta => pregunta.isCorrect).length;
                const preguntasIncorrectas = totalPreguntasSaved - preguntasCorrectas;

                const newCorrect = preguntasCorrectas - correct;
                const newIncorrect = preguntasIncorrectas - inCorrect;

                // Actualizar los contadores en el localStorage
                previousAnswers[cursoLevel]['questionsData'] = {
                    mountCorrect: newCorrect,
                    mountIncorrect: newIncorrect
                };
                localStorage.setItem(`${cursoName}`, JSON.stringify(previousAnswers));

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
                        <button type="button" className="btn-close float-end" data-bs-dismiss="alert" aria-label="Close" onClick={() => setFinished(false)}></button>
                        <h4 className="alert-heading mb-3">{`Sección ${seccionNumber} Completada!`}</h4>
                        <img src="/Images/Home.png" alt="Imagen de nivel completado" width={200} height={200} />
                        <hr />
                        <div className="d-grid gap-2 w-50 mx-auto">
                            {porcentajeCorrectas < 75 && <h5 className="text-center"><small>Tu porcentaje de respuestas correctas es de: {porcentajeCorrectas} % debes resetear la sección</small></h5>}
                            {porcentajeCorrectas > 75 &&
                                <Link href={`/${cursoName}/${cursoLevel}/${seccionNumber + 1}`} className="btn btn-primary" onClick={() => setFinished(false)}>
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