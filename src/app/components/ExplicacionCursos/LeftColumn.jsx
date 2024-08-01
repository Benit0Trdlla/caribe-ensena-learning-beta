export default function LeftColumn({ title, children }) {
    return (
        <div className="col-md-6 px-3 lh-lg" style={{ height: "400px" }}>
            <div className="d-flex flex-column justify-content-center ">
                <p className="text-center fw-bold mt-3">
                    Conocé los Módulos de {title}.
                </p>
                {children}
                <div className="d-flex justify-content-center ">
                    <a href="/Cursos" className="btn w-50 mt-3" style={{ backgroundColor: "#beefff", borderColor: "#beefff" }}>Iniciar</a>
                </div>
            </div>
        </div>
    )
}