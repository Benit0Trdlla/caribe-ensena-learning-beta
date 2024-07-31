import "./styles.css";
import Botones from "./Botones/Botones";
export default function CursosCard({ CursosInfo }) {
    return (
        <>
            {CursosInfo.map((curso) => (
                <div className="col-12 col-md-6 col-lg-4" key={curso.Id}>
                    <div className="curso-card">
                        <a href={curso.href}>
                            <img src={curso.ImgUrl} alt={`Imagen de ${curso.Title}`} className="curso-logo img-fluid border" />
                        </a>
                        <div className="curso-title  fs-6">
                            {curso.Title}
                        </div>
                        {/* Botones levels */}
                        <Botones />
                    </div>
                </div>
            ))}
        </>
    )
}