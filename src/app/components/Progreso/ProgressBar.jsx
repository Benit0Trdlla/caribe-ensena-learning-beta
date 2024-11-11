'use client'
import { readPercentage } from "@/app/lib/readPercentage";
import { useState, useEffect } from 'react'

export const ProgressBar = ({ cursoName }) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const { Modulo1, Modulo2, Modulo3, Modulo4 } = readPercentage(cursoName);

    return (

        <div className='container text-center'>
            <div className='m-5'>
                <p>Modulo 1</p>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: isClient && `${Modulo1}%` }} >
                        {isClient && `${Modulo1}%`}
                    </div>
                </div>
            </div>
            <div className='m-5'>
                <p>Modulo 2</p>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: isClient && `${Modulo2}%` }}>
                        {isClient && `${Modulo2}%`}
                    </div>
                </div>
            </div>
            <div className='m-5'>
                <p>Modulo 3</p>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: isClient && `${Modulo3}%` }}>
                        {isClient && `${Modulo3}%`}
                    </div>
                </div>
            </div>
            <div className='m-5'>
                <p>Modulo 4</p>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: isClient && `${Modulo4}%` }}>
                        {isClient && `${Modulo4}%`}
                    </div>
                </div>
            </div>
        </div>
    )
}