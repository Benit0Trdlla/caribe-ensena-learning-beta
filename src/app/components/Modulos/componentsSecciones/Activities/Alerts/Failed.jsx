export const Failed = ({ correctOpcion, justificacion }) => {
    return (
        <div className="alert alert-danger text-center mt-3" role="alert">
            La respuesta correcta: {correctOpcion} <br />
            <a className="" data-bs-toggle="modal" data-bs-target="#Modaljustificacion"><strong>Conocé la justificación. Haz Click aquí.</strong></a>
            {/* MODAL */}
            <div className="modal fade" id="Modaljustificacion" aria-labelledby="ModalJustify" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body text-black">
                            {justificacion} 
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-gray border border-dark text-black" data-bs-dismiss="modal">Ok! Gracias.</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}