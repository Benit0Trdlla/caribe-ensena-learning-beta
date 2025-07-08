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
                                <li className="dropdown-item">English Basic 1</li>
                                <li className="dropdown-item">English Basic 2</li>
                                <li className="dropdown-item">English Intermediate 1</li>
                                <li className="dropdown-item">English Intermediate 2</li>
                            </Secciones>
                            <Secciones title="Tecnología">
                                <li className="dropdown-item">Tica</li>
                                <li className="dropdown-item">Tica 2</li>
                                <li className="dropdown-item">Python Project Pro</li>
                            </Secciones>
                            {/* <Secciones title="Artes">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </Secciones> */}
                            <Secciones title="Ciencias ambientales">
                                <li className="dropdown-item">New Skills</li>
                            </Secciones>
                            <Secciones title="Ciencias exactas y educación financiera">
                                <li className="dropdown-item">Poket</li>
                            </Secciones>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}