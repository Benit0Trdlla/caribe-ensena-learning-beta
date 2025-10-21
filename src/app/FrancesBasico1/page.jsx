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
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(EnglishBasic1, {
//     returnTo: '/EnglishBasic1',
// });