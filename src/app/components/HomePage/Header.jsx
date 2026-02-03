import Image from 'next/image'
import Link from 'next/link'
export const Header = ({ imgUrl }) => {
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-md bg-white">
                    <div className="container">
                        <Image src={imgUrl} width={65} height={65} className="navbar-brand img-fluid" alt="Logo Proyecto Genius" style={{ width: "auto" }} />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto gap-3">
                                <li className="nav-item">
                                    <a href="#services" className="nav-link text-secondary"><small>Servicios</small></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#preguntas" className="nav-link text-secondary"><small>Preguntas Frecuentes</small></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#instrucciones" className="nav-link text-secondary"><small>Instrucciones</small></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#Marquee" className="nav-link text-secondary"><small>Cursos</small></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#donate" className="nav-link text-black rounded-4 shadow bg-body-tertiary px-2" style={{width: "fit-content"}}><strong> Haz tu donación</strong></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#aliados" className="nav-link text-black"><small> Aliados</small></a>
                                </li>
                                <Link prefetch={true} href="/Ingresar" className="btn btn-info" style={{ backgroundColor: "#beefff", borderColor: "#beefff" }}><small>Iniciar</small></Link>
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