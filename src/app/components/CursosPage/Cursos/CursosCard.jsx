import "./styles.css";
import Botones from "./Botones/Botones";
import Link from "next/link";
export default function CursosCard({ CursosInfo }) {
    return (
        <>
            {CursosInfo.map((curso) => (
                <div className="col-12 col-md-6 col-lg-4" key={curso.Id}>
                    <div className="curso-card">
                        <Link href={curso.href}>
                            <img src={curso.ImgUrl} alt={`Imagen de ${curso.Title}`} className="curso-logo img-fluid" />
                        </Link>
                        <div className="curso-title fs-6">
                            {curso.Title}
                        </div>
                        {/* Botones levels */}
                        <Botones BtnHref={curso.href} />
                    </div>
                </div>
            ))}
        </>
    )
}