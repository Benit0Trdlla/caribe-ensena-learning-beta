import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, Header, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "Tica",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

function TicaPage() {
    return (
        <>
            {/* <Header ImgUrl="/Images/Logo_Cursos/Ensenapaz.png" href="/Cursos" indexMeet={0} /> */}
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Tica"} curso={"Tica"}>
                        <AccordionModulos title={"Módulo 1: Exploradores de la Robótica"} collapseNumber={"collapseOne"}>
                            {/* <strong>Tema 1: Introducción a la Paz en Colombia</strong> */}
                            <hr />
                            <p>
                                A través de juegos de ensamblaje y exploración de motores, los estudiantes descubrirán cómo la robótica puede resolver problemas del campo. Construirán un "robot oruga" con materiales simples como cartón, gomas elásticas y baterías.
                            </p>
                            {/* <strong>Tema 2: Identidad y Diversidad como Punto de Partida para Reconocer Nuestras Diferencias</strong>
                            <hr />
                            <p>
                                Este tema se centra en la diversidad cultural y étnica de Colombia, enfatizando su papel esencial en la construcción de la paz en los territorios. Se examina cómo la diversidad puede ser una fortaleza en lugar de una fuente de conflicto y se promueve el reconocimiento y la celebración de las diferencias para fomentar la cohesión social y la convivencia pacífica.
                            </p> */}
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2: Motores en Acción"} collapseNumber={"collapseTwo"}>
                            {/* <strong>Tema 1: Resolución Pacífica de Conflictos</strong> */}
                            <hr />
                            <p>
                                Diseñarán pequeños vehículos con motores reciclados y probarán diferentes sistemas de tracción para recorrer superficies rurales. Se enfrentarán a un "circuito de obstáculos" donde deberán mejorar su diseño para mayor eficiencia.
                            </p>
                            {/* <strong>Tema 2: Construyendo Puentes</strong>
                            <hr />
                            <p>
                                Este tema trata sobre cómo fomentar la convivencia y la comunicación entre diferentes grupos sociales afectados por la guerra
                                para construir una paz duradera. Se discuten estrategias para superar la desconfianza y el resentimiento,
                                promoviendo el diálogo y la cooperación entre comunidades diversas para alcanzar una paz inclusiva.
                            </p> */}
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3: Sensores para la Agricultura"} collapseNumber={"collapseThree"}>
                            {/* <strong>Tema 1: Ciudadanía Activa y Participación</strong> */}
                            <hr />
                            <p>
                                Construirán sensores caseros de humedad y luz con materiales accesibles, aplicándolos en huertos y cultivos. Usarán "el reto del riego inteligente" donde deben automatizar un pequeño sistema de agua según las mediciones.
                            </p>
                            {/* <strong>Tema 2: Aprendizaje Basado en Proyectos (ABP) para la Paz</strong>
                            <hr />
                            <p>
                                Se presentan los pasos para implementar el Aprendizaje Basado en Proyectos (ABP) en las aulas educativas,
                                con un enfoque en la construcción de paz. Se guía a los docentes en la identificación de problemas,
                                construcción de objetivos y justificación de proyectos que promuevan la paz y la cohesión social.
                            </p> */}
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4: Robótica para Soluciones Rurales"} collapseNumber={"collapseFour"}>
                            {/* <strong>Tema 1: Empoderamiento Integral de Mujeres y Liderazgo Femenino en la Construcción de Paz</strong> */}
                            <hr />
                            <p>
                                En equipos, diseñarán prototipos para tareas agrícolas como riego automatizado, recolección o transporte ligero. Presentarán sus soluciones en una "Feria Tecnológica Rural" para compartir ideas innovadoras con la comunidad.
                            </p>
                            {/* <strong>Tema 2: Resiliencia, Transformación Positiva y Promoción de la Equidad de Género</strong>
                            <hr />
                            <p>
                                Se exploran estrategias para desarrollar la resiliencia de las mujeres y superar traumas en contextos de
                                conflicto. Se discuten actividades creativas y terapéuticas para la expresión y el procesamiento
                                constructivo de experiencias difíciles. Además, se enfatiza la importancia de la equidad de género y
                                la participación activa de las mujeres en ámbitos sociales y políticos, destacando sus fortalezas
                                individuales y colectivas.
                            </p> */}
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación">
                            <strong>Presentación del curso</strong>
                        </p>
                        <p>
                            Este curso está diseñado para acercar la robótica a estudiantes en entornos rurales de forma divertida, accesible y aplicada. Durante 3-4 meses, los estudiantes aprenderán a construir robots con materiales reciclados y componentes esenciales como motores y sensores, resolviendo problemas reales del campo.
                        </p>
                        <p id="Contenidos">
                            <strong>Contenidos de los Módulos</strong>
                        </p>
                        <ul>
                            <li><strong>Módulo 1: Exploradores de la Robótica</strong><br />
                                A través de juegos de ensamblaje y exploración de motores, los estudiantes descubrirán cómo la robótica puede resolver problemas del campo. Construirán un "robot oruga" con materiales simples como cartón, gomas elásticas y baterías.
                            </li>
                            <li><strong>Módulo 2: Motores en Acción</strong> <br />
                                Diseñarán pequeños vehículos con motores reciclados y probarán diferentes sistemas de tracción para recorrer superficies rurales. Se enfrentarán a un "circuito de obstáculos" donde deberán mejorar su diseño para mayor eficiencia.
                            </li>
                            <li><strong>Módulo 3: Sensores para la Agricultura</strong><br />
                                Construirán sensores caseros de humedad y luz con materiales accesibles, aplicándolos en huertos y cultivos. Usarán "el reto del riego inteligente" donde deben automatizar un pequeño sistema de agua según las mediciones.
                            </li>
                            <li><strong>Módulo 4: Robótica para Soluciones Rurales</strong> <br />
                                En equipos, diseñarán prototipos para tareas agrícolas como riego automatizado, recolección o transporte ligero. Presentarán sus soluciones en una "Feria Tecnológica Rural" para compartir ideas innovadoras con la comunidad.
                            </li>
                        </ul>
                        <p id='Recursos'>
                            <strong>Recursos del Curso</strong>
                        </p>
                        <ul>
                            <li><strong>Plataforma Virtual:</strong> Acceso a tutoriales, desafíos y guías de construcción paso a paso.</li>
                            <li><strong>Materiales Didácticos:</strong> Planos ilustrados, kits con motores y pilas, hojas de actividades y experimentos.</li>
                            <li><strong>Simulaciones y Juegos:</strong> Retos de "robots en acción" donde deben construir, mejorar y probar sus diseños.</li>
                            <li><strong>Encuentros Presenciales:</strong> Talleres prácticos para ensamblar, probar y perfeccionar los robots creados por los estudiantes.</li>
                        </ul>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

export default withPageAuthRequired(TicaPage, {
    returnTo: '/Tica',
});