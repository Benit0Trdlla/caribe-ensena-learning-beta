'use client'
import { useHidratationSolution } from '@/app/hooks/useHidratationSolution'
export const ShowPuntaje = () => {
    // Hidration problem, solution
    const isClient = useHidratationSolution()

    let puntaje = 0
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
        puntaje = localStorage.getItem('puntaje') || 0;
    }

    return (
        <div className="d-flex justify-content-center">
            <div className='shadow-sm ms-lg-auto p-3 m-2 border border-secondary-subtle rounded position-responsive'>
                <p className='fs-5 mb-0'>Puntos obtenidos: {isClient ? puntaje : '...'}</p>
            </div>
        </div>
    )
}