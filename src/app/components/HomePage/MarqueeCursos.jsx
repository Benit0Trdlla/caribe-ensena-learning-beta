import Marquee from "react-fast-marquee";
import { CURSOS } from "@/app/lib/consts";
import Link from "next/link";
export const MarqueeCursos = () => {
    return (
        <div id="Marquee" className="p-0 p-sm-4">
            <h4 className="mb-4 text-center">Nuestros Cursos</h4>
            <Marquee gradient gradientWidth={50}>
                {CURSOS.map((curso) => (
                    <div key={curso.Id} className="d-flex flex-column align-items-center px-4">
                        <Link href={curso.href} prefetch={true}>
                            <img src={curso.ImgUrl} alt={curso.Title} className="img-fluid" width={128} height={128} />
                        </Link>
                        <p className="fw-medium">{curso.Title}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}