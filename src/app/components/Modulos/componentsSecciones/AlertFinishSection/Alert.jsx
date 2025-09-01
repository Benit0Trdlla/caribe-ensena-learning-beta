'use client'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { usePathData } from "@/app/hooks/usePathData"
import { FinishSectionContext } from "@/app/contexts/FinishSection-context"
import { calculatePercentageCorrect, setLastModuloAndSeccion, recalculateQuestionsData, readPercentage } from "@/app/lib"
import { useContext, useMemo } from "react"

export const Alert = ({ seccionNumber, urlImage }) => {
    const router = useRouter()
    const { finished, setFinished } = useContext(FinishSectionContext)
    const { cursoName, cursoLevel } = usePathData()

    const porcentajeCorrectas = calculatePercentageCorrect(cursoName, cursoLevel, `Seccion-${seccionNumber}`);

    const readPercentageMemo = useMemo(() => readPercentage(cursoName), [cursoName]);
    const { isAllModulosCompleted } = readPercentageMemo;

    const recalculate = (cursoName, cursoLevel, seccionNumber) => {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            console.log(seccionNumber);
            recalculateQuestionsData(cursoName, cursoLevel, seccionNumber);
            setFinished(false)
        }
    }

    return (
        <>
            {finished && (
                <div className="LevelCompleted" >
                    <div className='alert alert-light' role='alert'>
                        <h4 className="alert-heading mb-3">{`Sección ${seccionNumber} Completada!`}</h4>
                        <img src={urlImage ? urlImage : '/Images/Home.png'} alt="Imagen de nivel completado" className="img-fluid" width={300} height={300} />
                        <hr />
                        <div className="d-grid gap-2 w-50 mx-auto">
                            {porcentajeCorrectas < 75 && <h5 className="text-center"><small>Tu porcentaje de respuestas correctas es de: {porcentajeCorrectas} % debes resetear la sección</small></h5>}
                            {porcentajeCorrectas > 75 && !(seccionNumber === 7 && cursoLevel === 'Modulo-4') &&
                                <Link prefetch={true} href={seccionNumber === 7 ? `/${cursoName}/Modulo-${parseInt(cursoLevel.split('-')[1]) + 1}/1` : `/${cursoName}/${cursoLevel}/${seccionNumber + 1}`} className="btn btn-primary" onClick={() => { setLastModuloAndSeccion(cursoName, cursoLevel, seccionNumber); setFinished(false) }}>
                                    Siguiente nivel
                                </Link>
                            }
                            {porcentajeCorrectas > 75 && seccionNumber === 7 && cursoLevel === 'Modulo-4' && !isAllModulosCompleted &&
                                <>
                                    <h5 className="text-center"><small>Completaste la ultima seccion del curso {cursoName}, pero no completaste todos los modulos</small></h5>
                                    <button className="btn btn-danger" data-bs-dismiss="alert" aria-label="Close" onClick={() => router.refresh()}>
                                        Cerrar anuncio.
                                    </button>
                                </>
                            }
                            {porcentajeCorrectas > 75 && isAllModulosCompleted &&
                                <>
                                    <h5 className="text-center"><small>Felicidades completaste el curso {cursoName} !!!</small></h5>
                                    <button className="btn btn-danger" data-bs-dismiss="alert" aria-label="Close" onClick={() => router.refresh()}>
                                        Cerrar anuncio.
                                    </button>
                                </>
                            }
                            <button className="btn btn-danger" onClick={() => recalculate(cursoName, cursoLevel, `Seccion-${seccionNumber}`)}>
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