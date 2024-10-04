import Image from 'next/image'
import Link from 'next/link'
export const AliadosSection = () => {
    return (
        <div className="container py-2 mt-0" id='aliados'>
            <div className="text-center">
                <h4 className="rounded-pill p-3 mx-auto" style={{ backgroundColor: "#beefff", width: "fit-content" }}>Aliados</h4>
                <hr className="w-75 mx-auto" />
            </div>
            <div className="d-flex flex-column align-items-center">
                <p className="me-1">Con el apoyo de</p>
                <div className="d-flex flex-column flex-lg-row">
                    <Link href="https://www.se.com/ww/en/" target="_blank">
                        <Image src="/Images/Logo/Aliados/logo-schneider.png" width={200} height={200} alt="Logo de nuestro aliado Schneider" />
                    </Link>
                </div>
            </div>
        </div>
    )
}