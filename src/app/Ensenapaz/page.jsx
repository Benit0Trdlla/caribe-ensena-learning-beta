import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Header from "../components/ExplicacionCursos/Header";
import RightColumn from "../components/ExplicacionCursos/RightColumn";
import LeftColumn from "../components/ExplicacionCursos/LeftColumn";
import AccordionModulos from "../components/ExplicacionCursos/AccordionModulos";

export const metadata = {
    title: "Ensenapaz",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

function EnsenapazPage() {
    return (
        <>
            <Header ImgUrl="/Images/Logo_Cursos/Ensenapaz.png" href="/Cursos" />
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Ensenapaz"} curso={"Ensenapaz"}>
                        <AccordionModulos title={"Módulo 1: Introducción a la Paz en Colombia e Identidad y Diversidad"} collapseNumber={"collapseOne"}>
                            <strong>Tema 1: Introducción a la Paz en Colombia</strong>
                            <hr />
                            <p>
                                Este tema aborda la historia y el desarrollo del conflicto armado en Colombia,
                                destacando los principales eventos, actores involucrados y sus consecuencias en
                                la sociedad. Se exploran las iniciativas y acuerdos de paz,
                                y se analiza la importancia de la reconciliación y la justicia transicional
                                para construir una paz duradera.
                            </p>
                            <strong>Tema 2: Identidad y Diversidad como Punto de Partida para Reconocer Nuestras Diferencias</strong>
                            <hr />
                            <p>
                                Este tema se centra en la diversidad cultural y étnica de Colombia, enfatizando su papel esencial en la construcción de la paz en los territorios. Se examina cómo la diversidad puede ser una fortaleza en lugar de una fuente de conflicto y se promueve el reconocimiento y la celebración de las diferencias para fomentar la cohesión social y la convivencia pacífica.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2: Resolución Pacífica de Conflictos y Construyendo Puentes"} collapseNumber={"collapseTwo"}>
                            <strong>Tema 1: Resolución Pacífica de Conflictos</strong>
                            <hr />
                            <p>
                                Se explora la importancia de la resolución pacífica de conflictos, proporcionando herramientas y
                                técnicas para manejar y resolver desacuerdos de manera constructiva. Se analiza cómo la comunicación efectiva,
                                la negociación y la mediación pueden prevenir la escalada de conflictos y promover soluciones colaborativas.
                            </p>
                            <strong>Tema 2: Construyendo Puentes</strong>
                            <hr />
                            <p>
                                Este tema trata sobre cómo fomentar la convivencia y la comunicación entre diferentes grupos sociales afectados por la guerra
                                para construir una paz duradera. Se discuten estrategias para superar la desconfianza y el resentimiento,
                                promoviendo el diálogo y la cooperación entre comunidades diversas para alcanzar una paz inclusiva.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3: Ciudadanía Activa para una Paz Duradera"} collapseNumber={"collapseThree"}>
                            <strong>Tema 1: Ciudadanía Activa y Participación</strong>
                            <hr />
                            <p>
                                Se destaca la importancia de ser ciudadanos activos y responsables en la promoción de una paz duradera.
                                Se exploran los derechos y responsabilidades cívicas y cómo la participación activa en la comunidad y
                                en la toma de decisiones puede contribuir a la construcción de una sociedad más justa y pacífica.
                            </p>
                            <strong>Tema 2: Aprendizaje Basado en Proyectos (ABP) para la Paz</strong>
                            <hr />
                            <p>
                                Se presentan los pasos para implementar el Aprendizaje Basado en Proyectos (ABP) en las aulas educativas,
                                con un enfoque en la construcción de paz. Se guía a los docentes en la identificación de problemas,
                                construcción de objetivos y justificación de proyectos que promuevan la paz y la cohesión social.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4: Mujeres y Construcción de Paz: Superando Desafíos en Contexto de Conflicto Armado"} collapseNumber={"collapseFour"}>
                            <strong>Tema 1: Empoderamiento Integral de Mujeres y Liderazgo Femenino en la Construcción de Paz</strong>
                            <hr />
                            <p>
                                Este tema se enfoca en cómo empoderar a las mujeres y fortalecer su liderazgo en la construcción de paz.
                                Se discuten herramientas prácticas para abordar la doble victimización, crear espacios seguros,
                                fomentar la solidaridad, y fortalecer el liderazgo personal y comunitario de las mujeres.
                                También se resalta la importancia de integrar enfoques de género y derechos humanos en estrategias pedagógicas
                                y proyectos.
                            </p>
                            <strong>Tema 2: Resiliencia, Transformación Positiva y Promoción de la Equidad de Género</strong>
                            <hr />
                            <p>
                                Se exploran estrategias para desarrollar la resiliencia de las mujeres y superar traumas en contextos de
                                conflicto. Se discuten actividades creativas y terapéuticas para la expresión y el procesamiento
                                constructivo de experiencias difíciles. Además, se enfatiza la importancia de la equidad de género y
                                la participación activa de las mujeres en ámbitos sociales y políticos, destacando sus fortalezas
                                individuales y colectivas.
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <strong id="Presentación">Establecer una Cátedra de Paz Integral y Adaptada a las Necesidades Regionales</strong>
                        <br /><br />
                        En el marco de los principios y objetivos del Objetivo de Desarrollo Sostenible (ODS) 16,
                        que promueve la paz, la justicia y la construcción de instituciones sólidas, presentamos la iniciativa de establecer
                        una Cátedra de Paz integral y adaptada a las necesidades regionales del Caribe Colombiano.
                        Esta cátedra tiene como objetivo principal capacitar a docentes comprometidos y capacitados para fomentar una
                        cultura de paz, convivencia y transformación positiva en sus comunidades educativas y territorios. <strong>Objetivos Generales:</strong> <br /><br />
                        <strong>Capacitar a Docentes:</strong> Equipar a los educadores con prácticas educativas centradas en la paz, la convivencia y la resolución pacífica de conflictos. <br /><br />
                        <strong>Integrar la Educación para la Paz:</strong> Incorporar el enfoque de Educación para la Paz en el currículo escolar de 50 escuelas rurales, asegurando que los principios de paz sean una parte fundamental de la educación de nuestros jóvenes. <br /><br />
                        <strong>Promover la Equidad y la Inclusión:</strong> Fomentar la creación de espacios educativos equitativos, inclusivos y con igualdad de oportunidades, con un enfoque especial en el género. <br /><br />
                        <strong>Fortalecer Habilidades Socioemocionales:</strong> Impactar positivamente a nuestros estudiantes al desarrollar sus habilidades socioemocionales y ciudadanas, esenciales para una convivencia pacífica y armoniosa.
                        <br /><br />
                        <strong>Objetivos Específicos:</strong>
                        <hr className="w-50" />
                        <strong>Capacitar a Docentes en Prácticas Educativas Centrada en la Paz:</strong> Proveer a los educadores de herramientas y estrategias que les permitan enseñar y promover la paz y la convivencia en sus aulas. <br />
                        <strong>Integrar el Enfoque de Educación para la Paz en el Currículo Escolar:</strong> Adaptar los planes de estudio para incluir conceptos y prácticas relacionadas con la paz, asegurando que los estudiantes comprendan y valoren la importancia de vivir en armonía. <br />
                        <strong>Crear un Ambiente de Aprendizaje Seguro y Participativo:</strong> Establecer un entorno en el que los valores de paz sean promovidos activamente y en el que los estudiantes se sientan seguros y motivados para participar y aprender. <br />
                        <strong>Fortalecer Habilidades Socioemocionales y Ciudadanas de los Estudiantes:</strong>  Desarrollar en los estudiantes habilidades esenciales como la empatía, la resolución pacífica de conflictos y la participación ciudadana.
                        <br /><br />
                        <strong>Enseñapaz: Programa de Formación en Educación y Cultura de Paz</strong>
                        <hr className="w-100" />
                        Es un programa de formación diseñado para los docentes de nuestras escuelas, con un enfoque particular en los territorios y contextos del Caribe Colombiano. Este programa se propone como una herramienta esencial para construir una cultura de paz desde las aulas, capacitando a los maestros para que sean agentes de cambio en sus comunidades. A través de talleres teóricos y prácticos, actividades colaborativas y proyectos de aprendizaje, los docentes aprenderán a:
                        <br />
                        - Promover la paz y la convivencia en sus aulas. <br />
                        - Resolver conflictos de manera pacífica y constructiva. <br />
                        - Crear un ambiente de inclusión y equidad. <br />
                        - Desarrollar en los estudiantes habilidades socioemocionales y ciudadanas. <br />
                        <br />
                        <strong id="Contenidos">Presentación del Curso: Establecimiento de una Cátedra de Paz Integral Bienvenidos al curso sobre el Establecimiento de una Cátedra de Paz Integral.</strong>
                        <br /><br />
                        Este curso está diseñado para capacitar a docentes en la promoción de una cultura de paz, convivencia y transformación positiva en sus comunidades educativas y territorios del Caribe Colombiano. Nuestro curso  abarca una variedad de contenidos para ofrecer una formación completa y aplicada.
                        <br />
                        <strong>Nuestro curso contiene</strong> <br />
                        <ul>
                            <li>Textos en Formato PDF: Los textos proporcionan una base teórica sólida sobre los temas del curso, como la paz en Colombia, la identidad y diversidad, y la resolución pacífica de conflictos. Estos documentos están diseñados para ofrecer información detallada y contextualizada que sirve de referencia y guía para los participantes.
                            </li>
                            <li>Audios: Los archivos de audio incluyen podcasts y entrevistas con expertos en temas relacionados con la paz y la resolución de conflictos. Estos audios ofrecen explicaciones detalladas, reflexiones adicionales y análisis de casos que complementan la información escrita. Se utilizan para profundizar en los conceptos y proporcionar perspectivas prácticas y teóricas.</li>
                            <li>Videos: Los videos proporcionan demostraciones visuales y ejemplos prácticos de los conceptos discutidos. Incluyen presentaciones, casos de estudio, y simulaciones de situaciones relacionadas con la paz y la convivencia. Los videos están diseñados para ilustrar cómo aplicar los principios aprendidos en contextos reales y ofrecer visualizaciones claras de los conceptos clave</li>
                        </ul>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

export default withPageAuthRequired(EnsenapazPage, {
    returnTo: '/Ensenapaz',
});