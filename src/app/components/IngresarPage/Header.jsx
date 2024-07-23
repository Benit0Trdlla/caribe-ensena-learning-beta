import Image from 'next/image'
import Link from 'next/link'
export default function Header({ ImgUrl, href }) {
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-md bg-white">
                    <div className="container">
                        <Image src={ImgUrl} width={80} height={60} className="navbar-brand img-fluid" alt="Logo Proyecto Genius" style={{ width: "auto" }} />
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