// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "Francés Básico 2",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

export default function FrancesBasico2() {
    return (
        <>
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Francés Básico 2"} curso={"FrancesBasico2"}>
                        <AccordionModulos title={"Módulo 1 - Narración en Pasado y Comparación"} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                Introducción completa al Passé Composé (P.C.) con auxiliares avoir y être. El Imparfait (hábito y descripción) y la diferenciación P.C. / Imparfait. Introducción a la comparación simple y los comparativos de superioridad e inferioridad (plus... que, moins... que).
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2 - Pronombres y Sustitución"} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                Introducción y consolidación de los pronombres de objeto directo/indirecto (le, la, lui, leur). La clave es el orden de los pronombres. Uso de los pronombres y (lugar, cosa con à) y en (cantidad, cosa con de).
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3 - Viajes, Compras y Logística"} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                Dominio del vocabulario para viajar, comer y hacer compras. Actos de habla esenciales para las interacciones más corrientes de la vida moderna, como pedir indicaciones y manejar el transporte público. Gramática práctica: la voz pasiva (introducción) y la expresión de cantidad (tout, tous).
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4 - Habilidades, Relativos e Hipótesis Simple"} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                Uso de los verbos modales pouvoir, vouloir, devoir. Pronombres relativos simples: qui, que, où. La expresión de la necesidad (il faut / il ne faut pas). La hipótesis real (si + presente + presente/futuro). Vocabulario de salud y enfermedad.
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación">
                            <strong>Presentación del curso</strong>
                        </p>
                        <p><strong>¡Bienvenido a Francés básico 2 :  Pre-Intermedio (A2)!</strong></p>
                        <p>
                            Este curso se enfoca en el dominio del pasado y la interacción en contextos reales como viajes, compras y exposición de problemas personales. El estudiante podrá relatar brevemente un recuerdo y entender situaciones relacionadas con el trabajo y los estudios. Se refuerza el uso de pronombres para evitar repeticiones.
                        </p>
                        <p id="Contenidos">
                            <strong>Contenidos de los Módulos</strong>
                        </p>
                        <p><strong>🎯 Objetivo general:</strong></p>
                        <p>Consolidar estructuras del presente y dominar los tiempos del pasado, los pronombres y el vocabulario funcional para situaciones reales: viajes, compras y vida diaria.</p>
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
                                    <td>Narración en <br /> Pasado y <br /> Comparación</td>
                                    <td>Passé composé con avoir y être; Imparfait; contraste entre P.C. e Imparfait; comparativos de superioridad, igualdad e inferioridad (plus... que, aussi... que, moins... que).</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Pronombres y <br /> Sustitución</td>
                                    <td>Pronombres de objeto directo e indirecto (le, la, lui, leur); pronombres y y en; orden de los pronombres en la oración; sustitución para evitar repeticiones.</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Viajes, Compras y Logística</td>
                                    <td>Vocabulario de viajes, compras, hoteles y transporte; actos de habla funcionales (pedir, reservar, reclamar); voz pasiva (introducción); expresión de cantidad (tout, tous).</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Habilidades, Relativos e <br /> Hipótesis Simple</td>
                                    <td>Verbos modales (pouvoir, vouloir, devoir); pronombres relativos simples (qui, que, où); expresiones de necesidad (il faut / il ne faut pas); hipótesis real (si + présent + futur); vocabulario de salud.
                                    </td>
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