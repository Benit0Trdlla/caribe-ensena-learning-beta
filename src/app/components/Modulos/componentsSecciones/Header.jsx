import Image from 'next/image'
import Link from 'next/link'
import { Point } from './Point/Point'
export const Header = ({ ImgUrl, href }) => {
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-md bg-white">
                    <div className="container d-flex">
                        <Image src={ImgUrl} width={60} height={60} className="navbar-brand img-fluid" alt="Logo Proyecto Genius" style={{ width: "auto" }} />
                        <div className='d-flex justify-content-center'>
                            <button title='¡UNETE AL EVENTO!' className='btn border ms-2 ms-lg-0 d-flex align-items-center gap-2' type='button'>
                                <Point />
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