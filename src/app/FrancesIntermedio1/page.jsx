// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "Francés Intermedio 1",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

export default function FrancesIntermedio1() {
    return (
        <>
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Francés Intermedio 1"} curso={"FrancesIntermedio1"}>
                        <AccordionModulos title={"Módulo 1 - Expresión de la Voluntad y la Condición"} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                El Conditionnel Présent (cortesía, consejo, sugerencia). Uso del Futur Simple para planes y predicciones. Subjonctif Présent para expresar deseo, voluntad y locuciones impersonales (il faut que, il vaudrait mieux que). Frases condicionales: Hipótesis Irrealizable (si + Imparfait + Condicional).
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2 - Argumentación y Conectores Lógicos"} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                Expresión de la Causa (parce que, puisque, grâce à, en raison de). Expresión de la Consecuencia (donc, alors, c’est pourquoi, de sorte que). La Concesión simple (même si, malgré). Uso de los pronombres posesivos (le tien, la mienne).
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3 - Estudios, Vida Social y Discurso Reportado"} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                Vocabulario de universidad (mémoire, master, L3, débouchés). La investigación (délimiter le sujet, établir une bibliographie). Introducción al Discurso Indirecto (Style Indirect). Conjugación de Plus-que-parfait.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4 - Narración Compleja y Precisión Léxica"} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                El gérondif (en + participe) y être en train de. Uso avanzado de pronombre relativo dont. Expresiones para parecer (avoir l’air, sembler, paraître). Revisión de preposiciones temporales (avant que + Subjuntivo, après que + Indicativo).
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación">
                            <strong>Presentación del curso</strong>
                        </p>
                        <p><strong>¡Bienvenido a Francés intermedio 1 : Intermedio (B1)!</strong></p>
                        <p>
                            Este curso permite al estudiante participar en debates, narrar eventos complejos y expresar juicios y opiniones con matices. Se introduce el Subjuntivo para expresar deseo, emoción y finalidad, y el uso de conectores lógicos (causa/consecuencia).
                        </p>
                        <p id="Contenidos">
                            <strong>Contenidos de los Módulos</strong>
                        </p>
                        <p><strong>🎯 Objetivo general:</strong></p>
                        <p>Desarrollar autonomía comunicativa, opinar, argumentar y describir situaciones complejas. Introducción al subjuntivo, conectores lógicos y discurso indirecto.</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Módulo</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Contenidos temáticos principales</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Expresión de  <br /> la Voluntad y <br /> la Condición</td>
                                    <td>Conditionnel présent (cortesía, consejo); Futur simple (planes y predicciones); Subjonctif présent (deseo, emoción, obligación); hipótesis irreal (si + imparfait + conditionnel).</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Argumentación y <br /> Conectores Lógicos</td>
                                    <td>Conectores de causa (parce que, puisque, grâce à) y consecuencia (donc, alors, de sorte que); concesión (même si, malgré); pronombres posesivos (le mien, la tienne).</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Estudios, Vida <br /> Social y Discurso Reportado</td>
                                    <td>Léxico académico y profesional; redacción de textos formales; introducción al discurso indirecto (style indirect); plus-que-parfait; estructura de informes y narraciones.</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Narración Compleja y <br /> Precisión Léxica</td>
                                    <td>Gérondif (en + participe); être en train de; pronombre relativo dont; expresiones de apariencia (avoir l’air, sembler); preposiciones temporales complejas (avant que, après que).</td>
                                </tr>
                            </tbody>
                        </table>
                        <p id='Recursos'>
                            <strong>Recursos del Curso</strong>
                        </p>
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
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(EnglishBasic1, {
//     returnTo: '/EnglishBasic1',
// });