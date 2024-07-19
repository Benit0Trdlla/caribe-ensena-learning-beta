export default function Secciones({ children, title }) {
    return (
        <div className="dropdown mb-1">
            <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {title === "Ciencias exactas y educación financiera" ? (
                    <small>
                        Ciencias exactas y <br />
                        educación financiera.
                    </small>
                ) : (
                    <small className="text-break">{title}</small>
                )}
            </button>
            <ul className="dropdown-menu">
                {children}
            </ul>
        </div>
    )
}