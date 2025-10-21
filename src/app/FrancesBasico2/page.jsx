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
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(EnglishBasic1, {
//     returnTo: '/EnglishBasic1',
// });