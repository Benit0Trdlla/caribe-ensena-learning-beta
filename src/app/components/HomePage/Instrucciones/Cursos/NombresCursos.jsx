export default function NombresCursos({ CursosInfo }) {
    return (
        <div className="accordion-body">
            <ul className="list-group list-group-flush">
                {CursosInfo.map((curso) => (
                    <li className="list-group-item" key={curso.Id}><a href="/" className="link-underline-light text-info" data-bs-toggle="modal" data-bs-target={`#${curso.Id}`}>{curso.Title}</a></li>
                ))}
            </ul>
        </div>
    )
}