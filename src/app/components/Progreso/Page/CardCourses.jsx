'use client'
import { useState, useEffect } from "react"
import { readPercentage } from "@/app/lib/readPercentage"
import Link from "next/link"
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

                <style>
                    {`
                    .card {
                        position: relative;
                        width: 350px;
                        height: 240px;
                        aspect-ratio: 16/9;
                        background-color: #f2f2f2;
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        overflow: hidden;
                        perspective: 1000px;
                        box-shadow: 0 0 0 5px #ffffff80;
                    }

                    .cardHover {
                        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    }

                    .cardHover {
                        transform: scale(1.05);
                        box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
                    }

                    .card__content {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        padding: 15px;
                        box-sizing: border-box;
                        background-color: #f2f2f2;
                        transform: rotateX(-90deg);
                        transform-origin: bottom;
                        transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    }

                    .cardHover .card__content {
                        transform: rotateX(0deg);
                    }

                    .card__title {
                        text-align: center;
                        margin-bottom: 2px;
                        font-size: 12px;
                        color: #333;
                        font-weight: 700;
                    }
                `}
                </style>
            </div>
        </div>
    )
}