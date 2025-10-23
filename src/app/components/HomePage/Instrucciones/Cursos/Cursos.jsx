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
                            { Id: "ModalFive", Title: "English Basic 1" },
                            { Id: "ModalSix", Title: "English Basic 2" },
                            { Id: "ModalSeven", Title: "English Intermediate 1" },
                            { Id: "ModalEight", Title: "English Intermediate 2" },
                            { Id: "ModalNine", Title: "Francés Básico 1" },
                            { Id: "ModalTen", Title: "Francés Básico 2" },
                            { Id: "ModalEleven", Title: "Francés Intermedio 1" },
                            { Id: "ModalTwelve", Title: "Francés Intermedio 2" },
                            { Id: "ModalThirteen", Title: "Python Project Pro" },
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
                        <ModalCursos id="ModalFive" title="English Basic 1">
                            <p>
                                Diseñado para personas que inician su aprendizaje del idioma y desean comunicarse en situaciones cotidianas. El curso está organizado en 4 módulos progresivos, cubriendo desde lo más básico hasta conversaciones simples sobre experiencias personales y viajes.
                                Es un curso 90% autónomo, pensado para que puedas estudiar a tu ritmo, con actividades interactivas y materiales variados. Además, tendrás encuentros virtuales con profesores para practicar speaking, resolver dudas y afianzar tu aprendizaje.
                            </p>
                            <p>- Cantidad de Módulos: 4</p>
                            <p>
                                <strong>Recursos del Curso</strong>
                            </p>
                            <ul>
                                <li>Lecturas breves: diálogos, descripciones y mensajes reales.</li>
                                <li>Audios y videos: pronunciación, listening y contextos reales.</li>
                                <li>Actividades interactivas:
                                    <ul>
                                        <li>Preguntas de opción múltiple (MCQ).</li>
                                        <li>Matching presentado en formato MCQ.</li>
                                        <li>Identificación de imágenes correctas.</li>
                                        <li>Ordenar frases seleccionando opciones.</li>
                                        <li>Detectar errores en frases (error spotting MCQ).</li>
                                        <li>Mini conversaciones con opciones de respuesta.</li>
                                    </ul>
                                </li>
                                <li>Role-plays virtuales en los encuentros con profesores para practicar speaking y fluidez.</li>
                            </ul>
                        </ModalCursos>
                        <ModalCursos id="ModalSix" title="English Basic 2">
                            <p>
                                Continuación del nivel A1 y está diseñado para ayudarte a comunicarte con mayor confianza y seguridad en inglés en situaciones cotidianas, viajes y conversaciones sobre experiencias personales.
                                A lo largo de 4 módulos, aprenderás nueva gramática, ampliarás tu vocabulario y mejorarás tus habilidades para hablar, comprender, leer y escribir. Tendrás acceso a recursos interactivos y encuentros virtuales con profesores para practicar lo aprendido y resolver dudas.
                            </p>
                            <p>- Cantidad de Módulos: 4</p>
                            <p>
                                <strong>Recursos del Curso</strong>
                            </p>
                            <ul>
                                <li>Audios y videos reales.</li>
                                <li>Lecturas cortas y textos prácticos.</li>
                                <li>Ejercicios interactivos.</li>
                                <li>Práctica de pronunciación.</li>
                                <li>Role-plays virtuales.</li>
                                <li>Material de autoevaluación.</li>
                                <li>Acceso online permanente.</li>
                            </ul>
                        </ModalCursos>
                        <ModalCursos id="ModalSeven" title="English Intermediate 1">
                            <p>
                                diseñado para hablantes de español y busca que los estudiantes hablen inglés con confianza y seguridad. La metodología se basa en el principio:
                                <br /><strong>Grammar + Vocabulary + Pronunciation = Confident Speaking</strong><br />
                                Cada lección integra estos tres pilares, empleando situaciones reales, humor e historias atractivas para facilitar el aprendizaje y mantener la motivación.
                            </p>
                            <p>- Cantidad de Módulos: 4</p>
                            <p>
                                <strong>📚 Recursos del Curso</strong>
                            </p>
                            <ul>
                                <li>Students Book (Libro del Estudiante).</li>
                                <li>Workbook (Libro de Ejercicios).</li>
                                <li>Practical English.</li>
                                <li>Online Practice.</li>
                                <li>Teachers Guide y Oxford Premium Resources.</li>
                            </ul>
                        </ModalCursos>
                        <ModalCursos id="ModalEight" title="English Intermediate 2">
                            <p>
                                Diseñado para desarrollar fluidez, confianza y precisión en la comunicación oral y escrita. Se basa en un enfoque comunicativo que integra gramática, vocabulario y pronunciación, utilizando temas actuales y situaciones de la vida real para mantener la motivación de los estudiantes. Cada módulo permite avanzar en complejidad, consolidar estructuras previas y prepararse para contextos académicos, profesionales o personales en el uso del inglés.
                            </p>
                            <p>- Cantidad de Módulos: 4</p>
                            <p>
                                <strong>📚 Recursos del Curso</strong>
                            </p>
                            <ul>
                                <li>Students Book & Workbook (English File B2.2).</li>
                                <li>Grammar Banks (reglas y ejercicios claros).</li>
                                <li>Online Practice (ejercicios interactivos, audios, vídeos).</li>
                                <li>Sound Bank (videos para practicar pronunciación).</li>
                                <li>Practical English (videos y situaciones cotidianas).</li>
                                <li>Revise & Check (revisión y autoevaluación).</li>
                                <li>Teachers Guide (actividades extra y fichas fotocopiables).</li>
                                <li>Use of English B2 (para refuerzo de gramática y vocabulario).</li>
                                <li>Videos auténticos (entrevistas, conversaciones reales).</li>
                            </ul>
                        </ModalCursos>
                        <ModalCursos id="ModalNine" title="Francés Básico 1">
                            <p>
                                Este curso se enfoca en establecer los elementos básicos de la comunicación, permitiendo al estudiante presentarse, hablar de su entorno inmediato y manejar interacciones de la vida diaria. El objetivo es que el estudiante pueda desenvolverse bien en la mayoría de las situaciones cotidianas. Se pone especial énfasis en la fonética inicial y la correcta conjugación de los verbos fundamentales (être, avoir, verbos en -er).
                            </p>
                            <p>- Cantidad de Módulos: 4</p>
                            <p><strong>📚 Recursos del Curso</strong></p>
                            <p>
                                Los recursos necesarios para el autoaprendizaje deben ser constantes a lo largo de los cuatro niveles (A1-B2) y están directamente soportados por los materiales proporcionados:
                            </p>
                            <ul>
                                <li>
                                    <strong>Audio y Vídeo:</strong> Contienen documentos sonoros y transcripciones para verificar la comprensión oral. Permite escuchar a <strong>hablantes nativos.</strong>
                                </li>
                                <li>
                                    <strong>Ejercicios de Sistematización: </strong>Cada tema debe incluir ejercicios de <strong>comprobación de progreso, </strong>incluyendo ejercicios de aplicación y preguntas <strong>Multiple Choice</strong> (Choisissez la ou les bonne(s) réponse(s)).
                                </li>
                                <li>
                                    <strong>Guía de Pronunciación: </strong>Necesaria para familiarizarse con la pronunciación francesa, especialmente la <strong>acentuación y los sonidos nasales.</strong> Debe tener una guía de <strong>signos fonéticos.</strong>
                                </li>
                                <li>
                                    <strong>Portafolio / Autoevaluación:</strong> Permite al estudiante <strong>notar los diferentes momentos de su aprendizaje así como sus progresos. </strong>Se recomienda un <strong>test de evaluación</strong> con sus correcciones.
                                </li>
                                <li>
                                    <strong>Anexos Gramaticales: </strong>Incluye un <strong>ayuda-memoria de gramática y conjugación,</strong> y resúmenes de <strong>participios pasados más frecuentes.</strong>
                                </li>
                            </ul>
                        </ModalCursos>
                        <ModalCursos id="ModalTen" title="Francés Básico 2">
                            <p>
                                Este curso se enfoca en el dominio del pasado y la interacción en contextos reales como viajes, compras y exposición de problemas personales. El estudiante podrá relatar brevemente un recuerdo y entender situaciones relacionadas con el trabajo y los estudios. Se refuerza el uso de pronombres para evitar repeticiones.
                            </p>
                            <p>- Cantidad de Módulos: 4</p>
                            <p><strong>📚 Recursos del Curso</strong></p>
                            <p>
                                Los recursos necesarios para el autoaprendizaje deben ser constantes a lo largo de los cuatro niveles (A1-B2) y están directamente soportados por los materiales proporcionados:
                            </p>
                            <ul>
                                <li>
                                    <strong>Audio y Vídeo:</strong> Contienen documentos sonoros y transcripciones para verificar la comprensión oral. Permite escuchar a <strong>hablantes nativos.</strong>
                                </li>
                                <li>
                                    <strong>Ejercicios de Sistematización: </strong>Cada tema debe incluir ejercicios de <strong>comprobación de progreso, </strong>incluyendo ejercicios de aplicación y preguntas <strong>Multiple Choice</strong> (Choisissez la ou les bonne(s) réponse(s)).
                                </li>
                                <li>
                                    <strong>Guía de Pronunciación: </strong>Necesaria para familiarizarse con la pronunciación francesa, especialmente la <strong>acentuación y los sonidos nasales.</strong> Debe tener una guía de <strong>signos fonéticos.</strong>
                                </li>
                                <li>
                                    <strong>Portafolio / Autoevaluación:</strong> Permite al estudiante <strong>notar los diferentes momentos de su aprendizaje así como sus progresos. </strong>Se recomienda un <strong>test de evaluación</strong> con sus correcciones.
                                </li>
                                <li>
                                    <strong>Anexos Gramaticales: </strong>Incluye un <strong>ayuda-memoria de gramática y conjugación,</strong> y resúmenes de <strong>participios pasados más frecuentes.</strong>
                                </li>
                            </ul>
                        </ModalCursos>
                        <ModalCursos id="ModalEleven" title="Francés Intermedio 1">
                            <p>
                                Este curso permite al estudiante participar en debates, narrar eventos complejos y expresar juicios y opiniones con matices. Se introduce el Subjuntivo para expresar deseo, emoción y finalidad, y el uso de conectores lógicos (causa/consecuencia).
                            </p>
                            <p>- Cantidad de Módulos: 4</p>
                            <p><strong>📚 Recursos del Curso</strong></p>
                            <p>
                                Los recursos necesarios para el autoaprendizaje deben ser constantes a lo largo de los cuatro niveles (A1-B2) y están directamente soportados por los materiales proporcionados:
                            </p>
                            <ul>
                                <li>
                                    <strong>Audio y Vídeo:</strong> Contienen documentos sonoros y transcripciones para verificar la comprensión oral. Permite escuchar a <strong>hablantes nativos.</strong>
                                </li>
                                <li>
                                    <strong>Ejercicios de Sistematización: </strong>Cada tema debe incluir ejercicios de <strong>comprobación de progreso, </strong>incluyendo ejercicios de aplicación y preguntas <strong>Multiple Choice</strong> (Choisissez la ou les bonne(s) réponse(s)).
                                </li>
                                <li>
                                    <strong>Guía de Pronunciación: </strong>Necesaria para familiarizarse con la pronunciación francesa, especialmente la <strong>acentuación y los sonidos nasales.</strong> Debe tener una guía de <strong>signos fonéticos.</strong>
                                </li>
                                <li>
                                    <strong>Portafolio / Autoevaluación:</strong> Permite al estudiante <strong>notar los diferentes momentos de su aprendizaje así como sus progresos. </strong>Se recomienda un <strong>test de evaluación</strong> con sus correcciones.
                                </li>
                                <li>
                                    <strong>Anexos Gramaticales: </strong>Incluye un <strong>ayuda-memoria de gramática y conjugación,</strong> y resúmenes de <strong>participios pasados más frecuentes.</strong>
                                </li>
                            </ul>
                        </ModalCursos>
                        <ModalCursos id="ModalTwelve" title="Francés Intermedio 2">
                            <p>
                                Este curso se centra en la fluidez y la precisión. El estudiante debe ser capaz de utilizar estructuras complejas para expresar oposición, hipótesis y finalidad, y de adaptar el registro a situaciones formales o informales. Se incluyen temas de vida asociativa y sindical, profesional y tecnológica, además del dominio completo del Discurso Indirecto.
                            </p>
                            <p>- Cantidad de Módulos: 4</p>
                            <p><strong>📚 Recursos del Curso</strong></p>
                            <p>
                                Los recursos necesarios para el autoaprendizaje deben ser constantes a lo largo de los cuatro niveles (A1-B2) y están directamente soportados por los materiales proporcionados:
                            </p>
                            <ul>
                                <li>
                                    <strong>Audio y Vídeo:</strong> Contienen documentos sonoros y transcripciones para verificar la comprensión oral. Permite escuchar a <strong>hablantes nativos.</strong>
                                </li>
                                <li>
                                    <strong>Ejercicios de Sistematización: </strong>Cada tema debe incluir ejercicios de <strong>comprobación de progreso, </strong>incluyendo ejercicios de aplicación y preguntas <strong>Multiple Choice</strong> (Choisissez la ou les bonne(s) réponse(s)).
                                </li>
                                <li>
                                    <strong>Guía de Pronunciación: </strong>Necesaria para familiarizarse con la pronunciación francesa, especialmente la <strong>acentuación y los sonidos nasales.</strong> Debe tener una guía de <strong>signos fonéticos.</strong>
                                </li>
                                <li>
                                    <strong>Portafolio / Autoevaluación:</strong> Permite al estudiante <strong>notar los diferentes momentos de su aprendizaje así como sus progresos. </strong>Se recomienda un <strong>test de evaluación</strong> con sus correcciones.
                                </li>
                                <li>
                                    <strong>Anexos Gramaticales: </strong>Incluye un <strong>ayuda-memoria de gramática y conjugación,</strong> y resúmenes de <strong>participios pasados más frecuentes.</strong>
                                </li>
                            </ul>
                        </ModalCursos>
                        <ModalCursos id="ModalThirteen" title="Python Project Pro">
                            <p>Este curso ha sido diseñado para que aprendas a programar desde cero en Python, uno de los lenguajes más poderosos y demandados en el mundo tecnológico.</p>
                            <p>Aquí no solo aprenderás teoría: crearás proyectos reales que te darán confianza y habilidades prácticas para tu camino como programador.</p>
                            <p>🛠<strong>Recursos del curso</strong></p>
                            <p>✅ Videos prácticos paso a paso.</p>
                            <p>✅ Materiales de lectura (PDF/HTML) con ejemplos y ejercicios.</p>
                            <p>✅ Ejercicios prácticos en cada módulo.</p>
                            <p>✅ Proyectos guiados para reforzar tu aprendizaje.</p>
                            <p>✅ Libros recomendados:</p>
                            <ul>
                                <li>Ultimate Python: De cero a experto</li>
                                <li>Python para todos</li>
                                <li>Python para principiantes</li>
                                <li>Learn Python the Hard Way</li>
                            </ul>
                        </ModalCursos>
                    </div>
                </div>
            </div>
        </div>
    )
}