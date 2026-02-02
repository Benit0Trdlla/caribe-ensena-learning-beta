// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "English Intermediate 2",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

export default function EnglishIntermediate2() {
    return (
        <>
            <div className="container english-background-root">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"English Intermediate 2"} curso={"EnglishIntermediate2"}>
                        <AccordionModulos title={"Módulo 1 - Fundamentos y Expresión Personal."} collapseNumber={"collapseOne"}>
                            <hr />
                            <ul>
                                <li>Descripciones de personas y rutinas</li>
                                <li>Narración de experiencias pasadas</li>
                                <li>Vocabulario: salud, ropa, personalidad</li>
                                <li>Gramática: presente simple/continuo, pasado simple/continuo, “used to”</li>
                            </ul>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2 - Futuro y Modalidades."} collapseNumber={"collapseTwo"}>
                            <hr />
                            <ul>
                                <li>Hablar de planes, predicciones y deseos</li>
                                <li>Usar condicionales y verbos modales</li>
                                <li>Vocabulario: emociones, clima, música, trabajo</li>
                                <li>Gramática: futuro (will, going to), presente perfecto, wish, modales</li>
                            </ul>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3 - Acciones y Consecuencias."} collapseNumber={"collapseThree"}>
                            <hr />
                            <ul>
                                <li>Narrar hechos complejos, voz pasiva y estilo indirecto</li>
                                <li>Discutir noticias, crímenes, cine</li>
                                <li>Vocabulario: cine, crimen, medios</li>
                                <li>Gramática: modales pasados, voz pasiva, phrasal verbs, reported speech</li>
                            </ul>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4 - Perspectivas y Consolidación."} collapseNumber={"collapseFour"}>
                            <hr />
                            <ul>
                                <li>Comunicación formal e indirecta</li>
                                <li>Consolidación de tiempos y estructuras</li>
                                <li>Vocabulario: negocios, ciencia, ciudades inteligentes</li>
                                <li>Gramática: tercera condicional, reported speech, cuantificadores</li>
                            </ul>
                        </AccordionModulos>
                    </LeftColumn>


                    <RightColumn>
                        <p id="Presentación"><strong>Presentación del curso</strong></p>
                        <p><strong>¡Bienvenido a English intermediate 2!</strong></p>
                        <p>
                            Este curso de English intermediate 2 está diseñado para desarrollar fluidez, confianza y precisión en la comunicación oral y escrita. Se basa en un enfoque comunicativo que integra gramática, vocabulario y pronunciación, utilizando temas actuales y situaciones de la vida real para mantener la motivación de los estudiantes. Cada módulo permite avanzar en complejidad, consolidar estructuras previas y prepararse para contextos académicos, profesionales o personales en el uso del inglés.
                        </p>

                        <p id="Contenidos"><strong>Contenidos de los Módulos</strong></p>
                        <p><strong>Módulo 1: Fundamentos y Expresión Personal</strong></p>
                        <p><strong>Unidad temática (eje central):</strong></p>
                        <ul>
                            <li>Describir personas, rutinas y experiencias pasadas, consolidando estructuras básicas que permitan una comunicación fluida y precisa.</li>
                        </ul>

                        <p><strong>Tiempos verbales clave:</strong></p>
                        <ul>
                            <li>Presente simple y continuo</li>
                            <li>Pasado simple y continuo</li>
                            <li>“Used to” para hábitos y estados pasados</li>
                        </ul>
                        <p><strong>Temas gramaticales específicos:</strong></p>
                        <ul>
                            <li>Pronombres y adjetivos (personales, posesivos)</li>
                            <li>Genitivo sajón</li>
                            <li>Preposiciones de lugar y movimiento</li>
                        </ul>
                        <p><strong>Vocabulario / temas léxicos relevantes:</strong></p>
                        <ul>
                            <li>Adjetivos de personalidad</li>
                            <li>Ropa y moda</li>
                            <li>Salud y lesiones</li>
                            <li>Verbos de alta frecuencia y frases verbales</li>
                            <li>Descripciones físicas y rasgos personales</li>
                        </ul>
                        <p><strong>Secciones del módulo:</strong></p>
                        <ol>
                            <li><strong>Visión General y Objetivos del Módulo </strong>
                                <ul>
                                    <li>Conectar conocimientos previos con nuevas estructuras y vocabulario para la vida diaria.</li>
                                    <li>Recurso: Entry Checker y Files 1-3.</li>
                                </ul>
                            </li>
                            <li><strong>Gramática Principal</strong>
                                <ul>
                                    <li>Ejercicios con ejemplos reales y práctica guiada.</li>
                                    <li>Recursos: Grammar Banks, actividades fotocopiables.</li>
                                </ul>
                            </li>
                            <li><strong>Expansión de Vocabulario</strong>
                                <ul>
                                    <li>Introducción en contexto, clasificación y uso en frases.</li>
                                    <li>Recursos: Vocabulary Banks, Pocket Book.</li>
                                </ul>
                            </li>
                            <li><strong>Enfoque en Pronunciación</strong>
                                <ul>
                                    <li>Sonidos vocálicos, acentuación y entonación.</li>
                                </ul>
                            </li>
                            <li><strong>Desarrollo de Habilidades Receptivas</strong>
                                <ul>
                                    <li>Lectura de artículos sociales, escucha de conversaciones reales.</li>
                                </ul>
                            </li>
                            <li><strong>Desarrollo de Habilidades Productivas</strong>
                                <ul>
                                    <li>Conversaciones sobre descripciones, rutinas y opiniones.</li>
                                    <li>Escritura de textos breves descriptivos.</li>
                                </ul>
                            </li>
                            <li><strong>Consolidación y Aplicación Práctica</strong>
                                <ul>
                                    <li>Role-plays, revisión integrada Files 1-2, autoevaluación.</li>
                                </ul>
                            </li>
                        </ol>

                        <p><strong>Módulo 2: Futuro y Modalidades</strong></p>
                        <p><strong>Unidad temática (eje central):</strong></p>
                        <ul>
                            <li>Expresión de planes, predicciones, situaciones hipotéticas y uso de modales para expresar obligaciones, habilidades y deseos.</li>
                        </ul>
                        <p><strong>Tiempos verbales clave:</strong></p>
                        <ul>
                            <li>Futuro (will, going to, presente continuo)</li>
                            <li>Primer y segundo condicional</li>
                            <li>Presente perfecto simple y continuo</li>
                            <li>“Wish” para deseos y arrepentimientos</li>
                        </ul>
                        <p><strong>Temas gramaticales específicos:</strong></p>
                        <ul>
                            <li>Gerundios e infinitivos</li>
                            <li>Obligation (have to, must, should)</li>
                            <li>Habilidad y posibilidad (can, could, be able to)</li>
                            <li>Used to / be used to / get used to</li>
                        </ul>
                        <p><strong>Vocabulario / temas léxicos relevantes:</strong></p>
                        <ul>
                            <li>Medio ambiente y clima</li>
                            <li>Música, sueño, emociones</li>
                            <li>Trabajo y estudios</li>
                            <li>Expresiones con “take”</li>
                        </ul>
                        <p><strong>Secciones del módulo:</strong></p>
                        <ol>
                            <li><strong>Visión General y Objetivos del Módulo </strong>
                                <ul>
                                    <li>Navegar entre matices de tiempo y modalidad.</li>
                                    <li>Recurso: Files 4-6.</li>
                                </ul>
                            </li>
                            <li><strong>Gramática Principal</strong>
                                <ul>
                                    <li>Discriminación entre futuros, modales y condicionales.</li>
                                </ul>
                            </li>
                            <li><strong>Expansión de Vocabulario</strong>
                                <ul>
                                    <li>Actividades de emparejamiento y producción.</li>
                                </ul>
                            </li>
                            <li><strong>Enfoque en Pronunciación</strong>
                                <ul>
                                    <li>Frases enlazadas, entonación en condicionales y “wish.”.</li>
                                </ul>
                            </li>
                            <li><strong>Desarrollo de Habilidades Receptivas</strong>
                                <ul>
                                    <li>Lectura sobre pronósticos, vida social; escucha sobre planes y deseos.</li>
                                </ul>
                            </li>
                            <li><strong>Desarrollo de Habilidades Productivas</strong>
                                <ul>
                                    <li>Debates sobre el futuro, deseos y música.</li>
                                    <li>Redacción de artículos y diarios.</li>
                                </ul>
                            </li>
                            <li><strong>Consolidación y Aplicación Práctica</strong>
                                <ul>
                                    <li>Inglés funcional para vida social.</li>
                                    <li>Revisión Files 3-6.</li>
                                </ul>
                            </li>
                        </ol>
                        <p><strong>Módulo 3: Acciones y Consecuencias</strong></p>
                        <p><strong>Unidad temática (eje central):</strong></p>
                        <ul>
                            <li>Describir acciones complejas, reportar eventos y utilizar estructuras como voz pasiva, modales pasados y verbos de percepción.</li>
                        </ul>
                        <p><strong>Tiempo verbales clave:</strong></p>
                        <ul>
                            <li>Pasado perfecto</li>
                            <li>Voz pasiva en presente, pasado y estructuras como “have something done”</li>
                            <li>Modales pasados (might have, must have)</li>
                        </ul>
                        <p><strong>Temas gramaticales específicos:</strong></p>
                        <ul>
                            <li>Reported speech (reporting verbs)</li>
                            <li>Verbos de percepción + gerundio/infinitivo</li>
                            <li>Phrasal verbs</li>
                        </ul>
                        <p><strong>Vocabulario / temas léxicos relevantes:</strong></p>
                        <ul>
                            <li>Cine y medios audiovisuales</li>
                            <li>Crimen y justicia</li>
                            <li>Partes del cuerpo</li>
                            <li>Medios de comunicación</li>
                        </ul>
                        <p><strong>Secciones del módulo:</strong></p>
                        <ol>
                            <li><strong>Visión General y Objetivos del Módulo </strong>
                                <ul>
                                    <li>Usar ejemplos de cine y noticias para motivar el aprendizaje.</li>
                                    <li>Recurso: Files 7-8.</li>
                                </ul>
                            </li>
                            <li><strong>Gramática Principal</strong>
                                <ul>
                                    <li>Tablas comparativas para modales pasados y voz pasiva.</li>
                                </ul>
                            </li>
                            <li><strong>Expansión de Vocabulario</strong>
                                <ul>
                                    <li>Clips de cine y debates sobre noticias/crímenes.</li>
                                </ul>
                            </li>
                            <li><strong>Enfoque en Pronunciación</strong>
                                <ul>
                                    <li>Weak forms, consonantes mudas, variaciones de “u.”.</li>
                                </ul>
                            </li>
                            <li><strong>Desarrollo de Habilidades Receptivas</strong>
                                <ul>
                                    <li>Lecturas sobre cine y crímenes; escucha de reportajes.</li>
                                </ul>
                            </li>
                            <li><strong>Desarrollo de Habilidades Productivas</strong>
                                <ul>
                                    <li>Debates, narración de crímenes, creación de noticias.</li>
                                </ul>
                            </li>
                            <li><strong>Consolidación y Aplicación Práctica</strong>
                                <ul>
                                    <li>Proyectos como boletines de noticias o cortos de cine.</li>
                                    <li>Revisión Files 7-8.</li>
                                </ul>
                            </li>
                        </ol>
                        <p><strong>Módulo 4: Perspectivas y Consolidación</strong></p>
                        <p><strong>Unidad temática (eje central):</strong></p>
                        <ul>
                            <li>Comunicación indirecta, condicionales y consolidación de todas las estructuras vistas, aplicadas a temas de negocios, ciudades y ciencia.</li>
                        </ul>
                        <p><strong>Tiempos verbales clave:</strong></p>
                        <ul>
                            <li>Reported speech (oraciones y preguntas)</li>
                            <li>Tercera condicional</li>
                            <li>Pasado perfecto</li>
                            <li>Consolidación de todos los tiempos</li>
                        </ul>
                        <p><strong>Temas gramaticales específicos:</strong></p>
                        <ul>
                            <li>Cuantificadores (all, every, both, etc.)</li>
                            <li>Artículos (a, an, the, cero artículo)</li>
                            <li>Uso auxiliar de be, do, have</li>
                        </ul>
                        <p><strong>Vocabulario / temas léxicos relevantes:</strong></p>
                        <ul>
                            <li>Publicidad y negocios</li>
                            <li>Ciudades inteligentes</li>
                            <li>Ciencia y tecnología</li>
                            <li>Prefijos y sufijos</li>
                        </ul>
                        <p><strong>Secciones del módulo:</strong></p>
                        <ol>
                            <li><strong>Visión General y Objetivos del Módulo </strong>
                                <ul>
                                    <li>Importancia de la precisión gramatical.</li>
                                    <li>Recurso: Files 9-10.</li>
                                </ul>
                            </li>
                            <li><strong>Gramática Principal</strong>
                                <ul>
                                    <li>Reported speech y tercera condicional.</li>
                                </ul>
                            </li>
                            <li><strong>Expansión de Vocabulario</strong>
                                <ul>
                                    <li>Prefijos, sufijos y colocaciones.</li>
                                </ul>
                            </li>
                            <li><strong>Enfoque en Pronunciación</strong>
                                <ul>
                                    <li>Estrés en familias de palabras y pausas.</li>
                                </ul>
                            </li>
                            <li><strong>Desarrollo de Habilidades Receptivas</strong>
                                <ul>
                                    <li>Lecturas sobre ciencia, ciudades, negocios.</li>
                                </ul>
                            </li>
                            <li><strong>Desarrollo de Habilidades Productivas</strong>
                                <ul>
                                    <li>Debates sobre negocios, ciencia, tecnología.</li>
                                    <li>Redacción de artículos y biografías.</li>
                                </ul>
                            </li>
                            <li><strong>Consolidación y Aplicación Práctica</strong>
                                <ul>
                                    <li>Inglés funcional en situaciones formales.</li>
                                    <li>Proyecto final integrador o simulación de examen.</li>
                                    <li>Revisión acumulativa.</li>
                                </ul>
                            </li>
                        </ol>
                        <p id='Recursos'><strong>📚 Recursos del Curso</strong></p>
                        <ul>
                            <li><strong>Students Book & Workbook</strong>(English File B2.2)</li>
                            <li><strong>Grammar Banks</strong> (reglas y ejercicios claros)</li>
                            <li><strong>Vocabulary Banks y Pocket Book</strong> (listas y práctica de vocabulario)</li>
                            <li><strong>Online Practice</strong>(ejercicios interactivos, audios, vídeos)</li>
                            <li><strong>Sound Bank</strong> (videos para practicar pronunciación)</li>
                            <li><strong>Practical English</strong> (videos y situaciones cotidianas)</li>
                            <li><strong>Revise & Check</strong> (revisión y autoevaluación)</li>
                            <li><strong>Teachers Guide</strong> (actividades extra y fichas fotocopiables)</li>
                            <li><strong>Use of English B2</strong> (para refuerzo de gramática y vocabulario)</li>
                            <li><strong>Videos auténticos</strong> (entrevistas, conversaciones reales)</li>
                        </ul>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(EnglishIntermediate2, {
//     returnTo: '/EnglishIntermediate2',
// });