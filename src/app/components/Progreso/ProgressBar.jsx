'use client'
import { useState, useContext } from "react"
export const ProgressBar = () => {
    return (
        <div className='container text-center'>
            <div className='m-5'>
                <p>Modulo 1</p>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: `${progressModulo1}%` }}>{`${progressModulo1}%`}</div>
                </div>
            </div>
            <div className='m-5'>
                <p>Modulo 2</p>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: `${progressModulo2}%` }}>{`${progressModulo2}%`}</div>
                </div>
            </div>
            <div className='m-5'>
                <p>Modulo 3</p>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: `${progressModulo3}%` }}>{`${progressModulo3}%`}</div>
                </div>
            </div>
            <div className='m-5'>
                <p>Modulo 4</p>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: `${progressModulo4}%` }}>{`${progressModulo4}%`}</div>
                </div>
            </div>
        </div>
    )
}