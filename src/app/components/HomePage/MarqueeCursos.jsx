import Marquee from "react-fast-marquee";
import { CURSOS } from "@/app/lib/consts";
import Link from "next/link";
export const MarqueeCursos = () => {
    return (
        <div id="Marquee" className="p-0 p-sm-4">
            <h4 className="mb-4 text-center fs-2">Conoce nuestros cursos</h4>
            <hr className="w-75 mx-auto" />
            <p className="text-center">Estos los cursos que ofrecemos en <strong>CEL</strong> para que puedas aprender y mejorar tus habilidades. <br />Si quieres estar actulizado en el mundo de la educación, no dudes en unirte a nuestra comunidad. Siguenos en nuestras redes para no perderte las actualizaciones.</p>

            <Marquee gradient gradientWidth={50} pauseOnHover={true}>
                {CURSOS.map((curso) => (
                    <div key={curso.Id} className="d-flex flex-column align-items-center text-center px-4 my-5">
                        <Link href={curso.href} prefetch={true} className="link-secondary text-decoration-none">
                            <img src={curso.ImgUrl} alt={curso.Title} className="img-fluid" width={128} height={128} />
                            <p className="fw-medium fs-5 fst-italic">{curso.Title}</p>
                        </Link>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}