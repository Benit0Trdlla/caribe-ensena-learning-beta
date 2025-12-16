// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "Educación Emocional",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

export default function EducacionEmocional() {
    return (
        <>
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Educación Emocional"} curso={"EducacionEmocional"}>
                        <AccordionModulos title={"Módulo 1 - 🧭 Mi Mundo Interior (Autoconocimiento e Identidad)"} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                El punto de partida. Aquí el estudiante construye una base sólida de quién es.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2 - 🧠 Capitán de mi Mente (Regulación Emocional)"} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                Herramientas prácticas para "hackear" el estrés y la ansiedad.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3 - 🤝 Convivencia y Redes (Habilidades Sociales)"} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                Enfocado en el entorno y la Ley 1620.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4 - 🚀 Mi Proyecto de Vida (Futuro y Autonomía)"} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                La proyección hacia el futuro, vital para la Educación Media.
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <div id="Presentación">
                            <p><strong>🎓 Presentación general</strong></p>
                            <p>
                                Diseñado por la <strong>Fundación Caribe Enseña</strong>, este es un programa educativo de vanguardia dirigido a adolescentes entre <strong>10 y 17 años.</strong> Más que un curso, es una experiencia de aprendizaje híbrida que combina tecnología, psicología y pedagogía activa para dar cumplimiento a la <strong>Nueva Ley de Educación Emocional (Ley 2503 de 2025)</strong>  y la <strong> Ley de Convivencia Escolar (Ley 1620).</strong>
                            </p>
                            <p>
                                Entendemos que la adolescencia hoy se vive en dos mundos: el presencial y el digital. Por eso, nuestra metodología ofrece herramientas prácticas para fortalecer la salud mental, prevenir riesgos psicosociales y construir un proyecto de vida sólido, utilizando un lenguaje cercano y formatos que conectan con la juventud actual.
                            </p>
                            <ul>
                                <li><strong>Público:</strong> 10 a 17 años.</li>
                                <li><strong>Formato:</strong> 4 Módulos | 28 Secuencias Totales.</li>
                                <li><strong>Enfoque Legal:</strong> Ley 1620 (Convivencia), Ley 2503 (Cátedra Emocional).</li>
                            </ul>
                        </div>
                        <div id="Contenidos">
                            <p><strong>Contenidos de los Módulos</strong></p>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Módulo</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Enfoque/Logro</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>🧭 Mi Mundo Interior <br />(Autoconocimiento e Identidad)</td>
                                        <td>
                                            <ul>
                                                <li>Diferenciación entre identidad offline y online, neurociencia del cerebro adolescente y fortalecimiento de la autoestima.</li>
                                                <li>El estudiante podrá responder "¿Quién soy?" más allá de los likes y las etiquetas sociales.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>🧠 Capitán de mi Mente (Regulación Emocional)</td>
                                        <td>
                                            <ul>
                                                <li>Técnicas de mindfulness, gestión de la frustración académica, manejo de la ira y prevención de la depresión.</li>
                                                <li>El estudiante adquiere un "kit de emergencia" emocional para gestionar crisis y presiones cotidianas.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>🤝 Convivencia y Redes <br />(Habilidades Sociales)</td>
                                        <td>
                                            <ul>
                                                <li>Comunicación asertiva, resolución pacífica de conflictos, prevención del ciberbullying, empatía y liderazgo positivo.</li>
                                                <li>Mejora del clima escolar y desarrollo de relaciones interpersonales sanas y seguras.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>🚀 Mi Proyecto de Vida (Futuro y Autonomía)</td>
                                        <td>
                                            <ul>
                                                <li>Descubrimiento vocacional (Ikigai), toma de decisiones éticas, prevención de riesgos (consumo, sexualidad) y planteamiento de metas SMART.</li>
                                                <li>El estudiante traza un plan de acción concreto para su transición a la vida adulta.</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div id='Recursos'>
                            <p><strong>🛠️ Recursos en Plataforma</strong></p>
                            <ol>
                                <li>
                                    <strong>🎬 Video-Clases:</strong>
                                    <ul>
                                        <li>Contenido dinámico en las secuencias 3, 5 y 7 de cada módulo.</li>
                                        <li>Narrativa storytelling, ágil y visualmente atractiva para mantener la atención.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>📄 Workbooks y Guías Interactivas:</strong>
                                    <ul>
                                        <li>Material descargable (PDF) para realizar "Retos Personales" y ejercicios de introspección en casa o en el aula.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>🎧 Audios de Inmersión:</strong>
                                    <ul>
                                        <li>Podcasts breves y guiones de meditación guiada para entrenar la calma y la atención plena.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>🧪 Laboratorios Grupales:</strong>
                                    <ul>
                                        <li>Guías paso a paso para que los docentes o líderes estudiantiles repliquen dinámicas sociales y debates en el salón de clases.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong>✅ Sistema de Evaluación Continua:</strong>
                                    <ul>
                                        <li>Quices interactivos al final de cada secuencia con retroalimentación pedagógica inmediata para asegurar la comprensión de los conceptos.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(EnglishBasic1, {
//     returnTo: '/EnglishBasic1',
// });