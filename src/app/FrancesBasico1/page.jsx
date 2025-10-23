// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "Francés Básico 1",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

export default function FrancesBasico1() {
    return (
        <>
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Francés Básico 1"} curso={"FrancesBasico1"}>
                        <AccordionModulos title={"Módulo 1 - Primeros Contactos e Identidad"} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                Introducción a la fonética, la acentuación, los saludos y despedidas, el uso de pronombres sujeto y el presente del verbo être (ser/estar). Temas como el género de los sustantivos y el trato personal (tú vs. vous).
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2 - Mi Entorno y Posesión"} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                Introducción a los artículos determinados e indeterminados, la negación simple (ne... pas), el presente de avoir (tener), y las expresiones de dirección/ubicación. Se trabaja la descripción de la familia y la profesión.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3 - Acciones Cotidianas y Planes"} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                Conjugación de verbos regulares en -er y algunos irregulares clave. Introducción a los verbos pronominales/reflexivos. Expresar la rutina diaria y el futuro próximo (futur proche). Vocabulario de alimentos y restaurantes.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4 - Ubicación, Rutina y Cantidades Iniciales"} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                Uso de las preposiciones de lugar (ej. à, en, chez), artículos contractos (au, du), partitivos (du, de la, des), la negación del partitivo (ne... pas de), y el imperativo (instrucciones). Introducción a la hora y la fecha.
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación">
                            <strong>Presentación del curso</strong>
                        </p>
                        <p><strong>¡Bienvenido a Francés básico 1 : Principiantes (A1)!</strong></p>
                        <p>
                            Este curso se enfoca en establecer los elementos básicos de la comunicación, permitiendo al estudiante presentarse, hablar de su entorno inmediato y manejar interacciones de la vida diaria. El objetivo es que el estudiante pueda desenvolverse bien en la mayoría de las situaciones cotidianas. Se pone especial énfasis en la fonética inicial y la correcta conjugación de los verbos fundamentales (être, avoir, verbos en -er).
                        </p>
                        <p id="Contenidos">
                            <strong>Contenidos de los Módulos</strong>
                        </p>
                        <p><strong>🎯 Objetivo general:</strong></p>
                        <p>Adquirir las bases del idioma francés, presentarse, describir su entorno y desenvolverse en situaciones cotidianas básicas con pronunciación y gramática correctas.</p>
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
                                    <td>Primeros Contactos <br /> e Identidad</td>
                                    <td>Alfabeto y fonética inicial; saludos y despedidas; pronombres personales sujeto; verbo être (ser/estar); género y número de sustantivos; trato formal e informal (tu / vous).
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Mi Entorno <br /> y Posesión</td>
                                    <td>Artículos definidos e indefinidos; verbo avoir (tener); negación simple (ne... pas); vocabulario de familia, profesiones y objetos personales; expresiones de ubicación y dirección.</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Acciones Cotidianas <br /> y Planes</td>
                                    <td>Verbos regulares en -er y algunos irregulares comunes (aller, faire); verbos pronominales básicos; futuro próximo (futur proche); vocabulario de rutinas, comidas y restaurantes.</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Ubicación, Rutina y <br /> Cantidades Iniciales</td>
                                    <td>Preposiciones de lugar (à, en, chez); artículos contractos (au, du); partitivos (du, de la, des); negación del partitivo (ne... pas de); uso del imperativo; la hora y la fecha.</td>
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