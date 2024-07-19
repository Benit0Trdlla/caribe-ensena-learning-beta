import ModalCursos from "./ModalCursos"
import NombresCursos from "./NombresCursos"
export default function Cursos() {
    return (
        <div className="col-md-3">
            <div className="accordion" id="accordionExample1">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            CURSOS
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
                        <NombresCursos CursosInfo={[
                            { Id: "ModalOne", Title: "Enseñapaz" },
                            { Id: "ModalTwo", Title: "Access to Training" },
                            { Id: "ModalThree", Title: "Derechos Humanos" },
                            { Id: "ModalFour", Title: "Robótica" },
                            { Id: "ModalFive", Title: "Educación Financiera" },
                        ]} />
                        <ModalCursos id="ModalOne" title="Enseñapaz">
                            <p>
                                Enseñapaz es un programa de formación en educación y cultura de paz dirigido a los docentes de nuestras escuelas,
                                centrándose en los territorios y contextos del Caribe Colombiano.
                                Este proyecto tiene como objetivo promover la paz en Colombia a través de los acuerdos de paz establecidos en 2016,
                                en consonancia con la Ley 1732 de 2015, que hace referencia a la cátedra de paz y los objetivos de desarrollo
                                sostenible con la Agenda 2030.
                            </p>
                            - Módulos: 4
                            <br />
                            <br />
                            <p>
                                - Duración de la formación: 2 horas por módulo, un total de 8 horas.
                                Se recomienda hacer cada módulo por semana, por lo tanto la duración es de un mes y medio aproximadamente.
                            </p>
                        </ModalCursos>
                        <ModalCursos id="ModalTwo" title="Access to Training">
                            <p>
                                4KT
                            </p>
                            - Módulos: 4
                            <br />
                            <br />
                            <p>
                                - Duración de la formación: 2 horas por módulo, un total de 8 horas.
                                Se recomienda hacer cada módulo por semana, por lo tanto la duración es de un mes y medio aproximadamente.
                            </p>
                        </ModalCursos>
                    </div>
                </div>
            </div>
        </div>
    )
}