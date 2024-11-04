'use client'
import Link from "next/link"
import { usePathData } from "@/app/hooks/usePathData"
import { FinishSectionContext } from "@/app/contexts/FinishSection-context"
import { useContext } from "react"
export const Alert = ({ seccionNumber }) => {
    const { finished, setFinished } = useContext(FinishSectionContext)
    const { cursoName, cursoLevel } = usePathData()

    return (
        <>
            {finished && (
                <div className="LevelCompleted" >
                    <div className='alert alert-light' role='alert'>
                        <button type="button" className="btn-close float-end" data-bs-dismiss="alert" aria-label="Close" onClick={() => setFinished(false)}></button>
                        <h4 className="alert-heading mb-3">{`Sección ${seccionNumber} Completada!`}</h4>
                        <img src="/Images/Home.png" alt="Imagen de nivel completado" width={200} height={200} />
                        <hr />
                        <Link href={`/${cursoName}/${cursoLevel}/${seccionNumber + 1}`} className="btn btn-primary" onClick={() => setFinished(false)}>
                            Comienza el siguiente nivel aquí
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}