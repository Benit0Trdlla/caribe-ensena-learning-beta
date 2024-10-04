'use client'
import Image from 'next/image'
import Link from 'next/link'
export const Header = ({ ImgUrl, href }) => {
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-md bg-white">
                    <div className="container d-flex">
                        <Image src={ImgUrl} width={60} height={60} className="navbar-brand img-fluid" alt="Logo Proyecto Genius" style={{ width: "auto" }} />
                        <div className='d-flex justify-content-center'>
                            <button className='btn border ms-2 ms-lg-0 d-flex align-items-center gap-2' type='button'>
                                <div className="point" />
                                <style>
                                    {`
                                        .point {
                                            bottom: 5px;
                                            left: 5px;
                                            width: 6px;
                                            height: 6px;
                                            background-color: rgb(0, 255, 0);
                                            border-radius: 25px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                        }

                                        .point::before {
                                            content: "";
                                            position: absolute;
                                            width: 1px;
                                            height: 1px;
                                            background-color: rgb(0, 255, 0);
                                            border-radius: 25px;
                                            animation: loop 1s 0s infinite;
                                        }

                                        @keyframes loop {
                                            0% {
                                                background-color: rgb(0, 255, 0);
                                                width: 1px;
                                                height: 1px;
                                            }
                                            100% {
                                                background-color: rgba(0, 255, 0, 0);
                                                width: 30px;
                                                height: 30px;
                                            }
                                        }
                                    `}
                                </style>
                                ¡Únete al evento!
                            </button>
                        </div>
                        <ul className="navbar-nav ms-auto">
                            <Link href={href} className="btn btn-info" style={{ backgroundColor: "#beefff", borderColor: "#beefff" }}>
                                <small>Volver</small>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="d-flex justify-content-center">
                <hr className="w-75 border-secondary m-0" />
            </div>
        </>
    )
}