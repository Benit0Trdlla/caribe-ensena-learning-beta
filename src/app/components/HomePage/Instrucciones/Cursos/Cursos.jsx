import ModalCursos from "./ModalCursos"
import NombresCursos from "./NombresCursos"
export default function Cursos() {
    return (
        <div className="col-md-3">
            <div className="accordion" id="accordion1">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            CURSOS
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordion1">
                        <NombresCursos CursosInfo={[
                            // { Id: "ModalOne", Title: "Enseñapaz" },
                            { Id: "ModalOne", Title: "Tica" },
                            { Id: "ModalTwo", Title: "Tica 2" },
                            { Id: "ModalThree", Title: "New skills" },
                            { Id: "ModalFour", Title: "Poket" },
                        ]} />
                        <ModalCursos id="ModalOne" title="Tica">
                            <p>
                                Este curso introductorio está diseñado para jóvenes entre 12 y 17 años interesados en iniciarse en el mundo de la robótica y la electrónica con Arduino. A través de lecturas, videos y actividades prácticas, aprenderán los fundamentos de la electrónica, la programación básica, el uso de sensores, y cómo crear sus primeros circuitos y prototipos inteligentes.
                            </p>
                            <p>-  Cantidad de Módulos: 4</p>
                            <p>
                                <strong> 🧰 Recursos del Curso</strong>
                            </p>
                            <ul>
                                <li><strong>Placa Arduino UNO</strong></li>
                                <li><strong>Cable USB</strong></li>
                                <li><strong>Protoboard (placa de pruebas)</strong> </li>
                                <li><strong>Resistencias (220Ω, 10kΩ)</strong></li>
                                <li><strong>LEDs de colores</strong></li>
                                <li><strong>Pulsadores</strong></li>
                                <li><strong>Sensor de luz (LDR)</strong></li>
                                <li><strong>Sensor de temperatura (TMP36 o NTC)</strong></li>
                                <li><strong>Cables de conexión (jumpers)</strong></li>
                            </ul>
                        </ModalCursos>
                        <ModalCursos id="ModalTwo" title="Tica 2">
                            <p>
                                TICA 2 es la segunda parte del curso de introducción a la robótica y programación con Arduino. En esta etapa, nos enfocamos en conectar la teoría con proyectos reales, profundizando en el uso de sensores, comunicación serial, motores y tecnologías inalámbricas. El objetivo es que cada estudiante logre diseñar y construir prototipos funcionales que resuelvan problemas concretos en su entorno.
                            </p>
                            <p>-  Cantidad de Módulos: 4</p>
                            <p>
                                <strong> 🧰 Recursos del Curso</strong>
                            </p>
                            <ul>
                                <li><strong>Placa Arduino UNO</strong></li>
                                <li><strong>Cable USB</strong></li>
                                <li><strong>Protoboard (placa de pruebas)</strong> </li>
                                <li><strong>Resistencias (220Ω, 10kΩ)</strong></li>
                                <li><strong>LEDs de colores</strong></li>
                                <li><strong>Pulsadores</strong></li>
                                <li><strong>Sensor de luz (LDR)</strong></li>
                                <li><strong>Sensor de temperatura (TMP36 o NTC)</strong></li>
                                <li><strong>Cables de conexión (jumpers)</strong></li>
                                <li><strong>PC con IDE de Arduino instalado</strong></li>
                                <li><strong>Videos tutoriales y PDFs descargables</strong></li>
                            </ul>
                        </ModalCursos>
                        <ModalCursos id="ModalThree" title="New skills">
                            <p>Este programa está diseñado para equiparte con las habilidades y conocimientos necesarios para destacarte en la economía verde y sostenible. A lo largo del curso, explorarás conceptos fundamentales de sostenibilidad, descubrirás trayectorias profesionales emergentes y adquirirás competencias esenciales en energías renovables y gestión de recursos. "New Skills" te prepara para enfrentar los desafíos del futuro con confianza y creatividad, ofreciéndote una experiencia de aprendizaje única y transformadora.</p>
                            <p>- Cantidad de Módulos: 4</p>
                        </ModalCursos>
                        <ModalCursos id="ModalFour" title="Poket">
                            <p>
                                El curso "POKET" busca que la educación financiera sea una experiencia divertida, dinámica y práctica. Está diseñado para jóvenes de 12 a 18 años y tiene una duración estimada de 3 a 4 meses. A través de métodos como experiencias gamificadas, retos interactivos y simulaciones, se propone ayudar a los estudiantes a desarrollar habilidades financieras sólidas.
                            </p>
                            <p>- Cantidad de Módulos: 4</p>
                            <p>
                                <strong>Recursos del Curso</strong>
                            </p>
                            <p>Los recursos que se emplearán en el curso "Poket" son:</p>
                            <ul>
                                <li><strong>Plataforma Virtual:</strong> Ofrece acceso a actividades interactivas, videos y desafíos en línea.</li>
                                <li><strong>Materiales Didácticos:</strong> Incluyen guías ilustradas, hojas de trabajo y juegos de mesa imprimibles.</li>
                                <li><strong>Simulaciones y Juegos:</strong> Herramientas interactivas como "escape rooms financieros" y "mercados de valores virtuales".</li>
                                <li><strong>Encuentros Presenciales:</strong> Espacios diseñados para aplicar conocimientos en actividades prácticas y competencias amistosas. También se incluyen dinámicas como "El Gran Reto del Ahorro", "Bolsa de Valores en Vivo", "Construye tu Score de Crédito" y el juego “Poket” en tiempo real, cada una con enfoques interactivos y lúdicos.</li>
                            </ul>
                        </ModalCursos>
                    </div>
                </div>
            </div>
        </div>
    )
}