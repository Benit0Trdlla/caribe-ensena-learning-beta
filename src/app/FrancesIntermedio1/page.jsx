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
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(EnglishBasic1, {
//     returnTo: '/EnglishBasic1',
// });