'use client'
import './styles.css';
import Link from "next/link"
import { useState } from "react"
import { readPercentage } from "@/app/lib"
import { ProgressBar } from "../../ProgressBar"

export const CardCourses = ({ cursoName, ImgUrl, title }) => {
    const [hover, setHover] = useState(false)

    const { Modulo1, Modulo2, Modulo3, Modulo4 } = readPercentage(cursoName);

    const ModuloData = [
        { number: 'Modulo 1', percentage: Modulo1 },
        { number: 'Modulo 2', percentage: Modulo2 },
        { number: 'Modulo 3', percentage: Modulo3 },
        { number: 'Modulo 4', percentage: Modulo4 },
    ];

    return (
        <div className='col-12 col-md-6 col-lg-4 mt-2 d-flex justify-content-center align-items-center'>
            <div className={`card ${hover ? "cardHover" : ""} ms-lg-4 ms-md-3`}>
                <Link prefetch={true} href={`/${cursoName}`}>
                    <img src={`/Images/Logo_Cursos/${ImgUrl}.png`} width={"150px"} height={"150px"} style={{ objectFit: "cover" }} alt="" />
                </Link>

                <p className="fs-5 fw-bold">{title}</p>
                <p onClick={() => setHover(!hover)} style={{ cursor: "pointer" }}>Conoce el progreso</p>

                <div className="card__content">
                    <div className="d-flex justify-content-end m-0">
                        <button type="button" className="btn-close" onClick={() => setHover(!hover)}></button>
                    </div>

                    {ModuloData.map((modulo) => (
                        <div className='mb-3' key={modulo.number}>
                            <p className="card__title">{modulo.number}</p>
                            <ProgressBar moduloPercentage={modulo.percentage} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}