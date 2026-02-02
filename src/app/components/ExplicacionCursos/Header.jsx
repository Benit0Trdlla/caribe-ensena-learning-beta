'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Point } from '../Modulos'
import { useLinkMeet } from '../../hooks/useLinkMeet'
import { useUser } from "@auth0/nextjs-auth0/client";
const URL_SHEETS = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWEDU8Ty2Bz_cMSvvm-YxRWXima4w5dD1VoLwAZYTOZ756z3RQkAwphrX6_F74BWnWN9VJbUvgz7_0/pub?output=csv"
export const Header = ({ ImgUrl, href, indexMeet }) => {
    const { user } = useUser();

    const { data, isLoading, error } = useLinkMeet(URL_SHEETS)
    if (error) return <div>{error.message}</div>

    const conditionalHref = user ? `/Cursos` : `/`;

    return (
        <>
            <header id="header" className=''>
                <nav className="navbar navbar-expand-md z-1">
                    <div className="container z-2">
                        <Image src={ImgUrl} width={60} height={60} priority={true} className="navbar-brand img-fluid" alt="Logo Proyecto Genius" style={{ width: "auto" }} />
                        <div className='d-flex justify-content-center'>
                            {!isLoading &&
                                <a href={`https://${data[indexMeet].URL}`} title={data[indexMeet].Title} className='btn border me-4 ms-lg-0 d-flex align-items-center gap-2' target="_blank" type='button'>
                                    <Point />
                                    {/* ¡Únete al evento! */}
                                </a>
                            }
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className="navbar-nav ms-auto gap-3">
                                <Link prefetch={true} href={`${href}/Progreso`} className="btn btn-info" style={{ backgroundColor: "#beefff", borderColor: "#beefff" }}>
                                    <small>Mi Progreso</small>
                                </Link>
                                <Link href={conditionalHref} className="btn btn-info" style={{ backgroundColor: "#beefff", borderColor: "#beefff" }}>
                                    <small>Volver</small>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="d-flex justify-content-center">
                <hr className="w-75 border-secondary m-0" />
            </div>
        </>
    )
}