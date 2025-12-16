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
                        <AccordionModulos title={"Módulo 1 - Debate, Concesión e Hipótesis Avanzada"} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                Expresión de la Oposición y Concesión completa (malgré, bien que, quoique, même si). Subjuntivo en estructuras de concesión (ej. quoi que, quel que soit). Hipótesis con Conditionnel Passé (au cas où + Condicional). El Futur Antérieur (para acción futura anterior).
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2 - Comunicación Profesional y Argumentación Formal"} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                Vocabulario para la empresa, la investigación y el debate social. Expresar la personalidad y las competencias. Actos de habla para defender/refutar argumentos. Verbos de 3ª conjugación y verbos de gestión (réserver, louer, resiliér un contrat).
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3 - Estructuras Sintácticas Complejas y Énfasis"} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                Dominio de los pronombres y y en (usos con verbos). Subjonctif Passé. Pronombres relativos compuestos (lequel, duquel, auquel). Énfasis y puesta en relieve (C'est... qui/que). La restricción (ne... que).
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4 - Dominio del Discurso Indirecto y Habilidades Especializadas"} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                Discurso Indirecto (Style Indirect) en su totalidad: transformación de tiempos verbales (ej. Futuro a Condicional) y adverbios temporales. Expresión de la finalidad (pour que, afin de). Reconocimiento del registro formal y familiar (registres soutenu, standard et familier).
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación">
                            <strong>Presentación del curso</strong>
                        </p>
                        <p><strong>¡Bienvenido a Francés intermedio 2: Avanzado (B2)!</strong></p>
                        <p>
                            Este curso se centra en la fluidez y la precisión. El estudiante debe ser capaz de utilizar estructuras complejas para expresar oposición, hipótesis y finalidad, y de adaptar el registro a situaciones formales o informales. Se incluyen temas de vida asociativa y sindical, profesional y tecnológica, además del dominio completo del Discurso Indirecto.
                        </p>
                        <p id="Contenidos">
                            <strong>Contenidos de los Módulos</strong>
                        </p>
                        <p><strong>🎯 Objetivo general:</strong></p>
                        <p>Lograr fluidez y precisión en la comunicación oral y escrita, empleando estructuras avanzadas, registros adecuados y argumentación compleja en contextos académicos o profesionales.</p>
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
                                    <td>Debate, Concesión e <br /> Hipótesis Avanzada</td>
                                    <td>Expresiones de oposición y concesión (bien que, quoique, même si); Subjonctif en estructuras de concesión; hipótesis avanzada (si + conditionnel passé); Futur antérieur.</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Comunicación Profesional y<br /> Argumentación Formal</td>
                                    <td>Léxico de empresa y tecnología; redacción de correos y presentaciones; actos de habla para refutar y defender; verbos de gestión y acción administrativa.</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Estructuras Sintácticas Complejas y <br /> Énfasis</td>
                                    <td>Pronombres y y en (usos avanzados); Subjonctif passé; pronombres relativos compuestos (lequel, duquel, auquel); énfasis (c’est… qui/que); restricción (ne... que).</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Dominio del Discurso Indirecto y Habilidades Especializadas</td>
                                    <td>Discurso indirecto completo (transformación de tiempos y adverbios); finalidad (pour que, afin de); registros de lengua (soutenu, standard, familier); análisis y debate.</td>
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