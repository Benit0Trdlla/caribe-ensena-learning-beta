export const AddImagen = ({ url, alt }) => {
    return (
        <div className="col-6">
            <button type="button" class="bg-transparent border-0 px-0 my-2" data-bs-toggle="modal" data-bs-target="#ModalImagen">
                <img src={url} alt={alt} className="img-fluid" />
            </button>


            {/* <!-- Modal --> */}
            <div className="modal fade" id="ModalImagen" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mx-auto d-flex">
                            <img src={url} alt={alt} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}