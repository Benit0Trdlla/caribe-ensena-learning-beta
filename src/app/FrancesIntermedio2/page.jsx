// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "Francés Intermedio 2",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

export default function FrancesIntermedio2() {
    return (
        <>
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Francés Intermedio 2"} curso={"FrancesIntermedio2"}>
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
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(EnglishBasic1, {
//     returnTo: '/EnglishBasic1',
// });