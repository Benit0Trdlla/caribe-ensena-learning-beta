export default function Convenios() {
    return (
        <div className="col-md-3">
            <div className="accordion" id="accordionExample3">
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed px-sm-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <small>CONVENIOS ORGANIZACIONES</small>
                        </button>
                    </h4>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                        <div className="accordion-body">
                            <small>
                                Si eres una organización o universidad y deseas que tu curso, taller o diplomado se ofrezca desde nuestra plataforma
                                envíanos un correo a: <br /><strong>proyectocel@caribeensena.org</strong>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}