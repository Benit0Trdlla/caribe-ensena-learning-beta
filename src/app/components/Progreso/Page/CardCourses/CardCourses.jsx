'use client'
import { useState, useEffect } from "react"
import { readPercentage } from "@/app/lib/readPercentage"
import Link from "next/link"
import './styles.css';

export const CardCourses = ({ cursoName, ImgUrl }) => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    const [hover, setHover] = useState(false)

    if (cursoName === "New skills") {
        cursoName = "Newskills"
    }
    const { Modulo1, Modulo2, Modulo3, Modulo4 } = readPercentage(cursoName);

    return (
        <div className='col-12 col-md-6 col-lg-4 mt-5 d-flex justify-content-center align-items-center'>
            <div className={`card ${hover ? "cardHover" : ""} ms-lg-4 ms-md-3`}>
                <Link href={`/${cursoName}`}>
                    <img src={`/Images/Logo_Cursos/${ImgUrl}.png`} width={"150px"} height={"150px"} style={{ objectFit: "cover" }} alt="" />
                </Link>
                <p className="fs-5 fw-bold">{cursoName}</p>
                <p onClick={() => setHover(!hover)} style={{ cursor: "pointer" }}>Conoce el progreso</p>
                <div className="card__content">
                    <div className="d-flex justify-content-end m-0">
                        <button type="button" className="btn-close" onClick={() => setHover(!hover)}></button>
                    </div>
                    <div className='mb-3'>
                        <p className="card__title">Modulo 1</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: isClient && `${Modulo1}%` }}>
                                <small>
                                    {isClient && `${Modulo1}%`}
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <p className="card__title">Modulo 2</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: isClient && `${Modulo2}%` }}>
                                {isClient && `${Modulo2}%`}
                            </div>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <p className="card__title">Modulo 3</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: isClient && `${Modulo3}%` }}>
                                {isClient && `${Modulo3}%`}
                            </div>
                        </div>
                    </div>
                    <div className='mb-2'>
                        <p className="card__title">Modulo 4</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: isClient && `${Modulo4}%` }}>
                                {isClient && `${Modulo4}%`}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}