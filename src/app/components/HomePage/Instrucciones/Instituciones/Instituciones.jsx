export default function Instituciones() {
    return (
        <div className="col-md-3">
            <div className="accordion" id="accordionExample4">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            <small>INSTITUCIONES EDUCATIVAS</small>
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample4">
                        <div className="accordion-body">
                            <small>
                                Si los alumnos de tu institución educativa quieren formarse en alguno de nuestros cursos,
                                talleres o programas ofrecidos envíanos un correo a: <br />
                                <a href="mailto:proyectocel@caribeensena.org" className="text-decoration-none text-black fw-bold">proyectocel@caribeensena.org</a>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
