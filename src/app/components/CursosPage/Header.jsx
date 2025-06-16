import Image from 'next/image'
import Link from 'next/link'
export const Header = ({ ImgUrl }) =>{
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-md bg-white">
                    <div className="container">
                        <Image src={ImgUrl} width={60} height={60} className="navbar-brand img-fluid" alt="Logo Proyecto Genius" style={{ width: "auto" }} priority={true} />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto gap-3">
                                <li className="nav-item">
                                    <Link href="/" className="btn btn-info" style={{ backgroundColor: "#beefff", borderColor: "#beefff" }}><small>Home</small></Link>
                                </li>
                                <li className="nav-item">
                                    <Link prefetch={true} href="/Cursos/Progreso" className="btn btn-info" style={{ backgroundColor: "#beefff", borderColor: "#beefff" }} ><small>Mi progreso</small></Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/api/auth/logout" className="btn btn-info" style={{ backgroundColor: "#beefff", borderColor: "#beefff" }}><small>Cerrar sesión</small></a>
                                </li>
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