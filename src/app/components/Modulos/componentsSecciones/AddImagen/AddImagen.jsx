export const AddImagen = ({ alt, dataUrl }) => {
    return (
        <div className="row container">
            {dataUrl.split(',').map((imagen, index) => (
                <div className="col-6" key={index}>
                    <button type="button" className="bg-transparent border-0 px-0 my-2" data-bs-toggle="modal" data-bs-target={`#ModalImagen-${index}`}>
                        <img src={imagen.trim()} alt={alt} className="img-fluid" />
                    </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id={`ModalImagen-${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body mx-auto d-flex">
                                    <img src={imagen.trim()} alt={alt} className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}