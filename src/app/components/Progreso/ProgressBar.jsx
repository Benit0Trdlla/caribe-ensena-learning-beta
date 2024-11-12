'use client'
import { useState, useEffect } from 'react'

export const ProgressBar = ({ moduloPercentage }) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar" style={{ width: isClient && `${moduloPercentage}%` }} >
                {isClient && `${moduloPercentage}%`}
            </div>
        </div>
    )
}