'use client'
import { useHidratationSolution } from '@/app/hooks/useHidratationSolution'

export const ProgressBar = ({ moduloPercentage }) => {
    const isClient = useHidratationSolution();

    return (
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width: isClient && `${moduloPercentage}%` }} >
                {isClient ? `${moduloPercentage}%` : 'Cargando...'}
            </div>
        </div>
    )
}