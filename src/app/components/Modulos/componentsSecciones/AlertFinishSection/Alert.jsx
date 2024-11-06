'use client'
import Link from "next/link"
import { usePathData } from "@/app/hooks/usePathData"
import { FinishSectionContext } from "@/app/contexts/FinishSection-context"
import { calculatePercentageCorrect } from "@/app/lib"
import { useContext } from "react"
export const Alert = ({ seccionNumber }) => {
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
                            <button className="btn btn-danger" onClick={() => DeleteSeccion(cursoName, cursoLevel, `Seccion-${seccionNumber}`)}>
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