import Secciones from "./Secciones"
export default function Areas() {
    return (
        <div className="col-md-3">
            <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ÁREAS
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                        <div className="accordion-body">
                            <Secciones title="Ciencias sociales y humanas">
                                <li><a className="dropdown-item" href="#">Enseñapaz</a></li>
                                <li><a className="dropdown-item" href="#">Derechos Humanos </a></li>
                            </Secciones>
                            <Secciones title="Tecnología">
                                <li><a className="dropdown-item" href="#">Robótica</a></li>
                                <li><a className="dropdown-item" href="#">Access to training</a></li>
                            </Secciones>
                            <Secciones title="Artes">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </Secciones>
                            <Secciones title="Ciencias ambientales">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </Secciones>
                            <Secciones title="Ciencias exactas y educación financiera">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </Secciones>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}