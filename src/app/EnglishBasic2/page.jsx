// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "English Basic 2",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

export default function EnglishBasic2() {
    return (
        <>
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"English Basic 2"} curso={"EnglishBasic2"}>
                        <AccordionModulos title={"Módulo 1 - Fundamentals and Basic Communication(Fundamentos y Comunicación Básica)."} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                Este módulo consolida tus conocimientos de A1 y te prepara para comunicarte en situaciones cotidianas con más detalle. Aquí reforzarás estructuras esenciales y ampliarás tu vocabulario para hablar de ti, de las personas cercanas y describir aspectos básicos de tu entorno.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2 - Routines and Daily Activities (Rutinas y Actividades Diarias)."} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                Aquí aprenderás a hablar de tus rutinas, pasatiempos y actividades cotidianas, utilizando más vocabulario y nuevas estructuras gramaticales. Comenzarás a contar historias simples en pasado y expresar tus preferencias y opiniones.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3 - Everyday Life and Environment (Vida Cotidiana y Entorno)."} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                Este módulo amplía tu vocabulario sobre la vida diaria, transporte, compras y situaciones en la ciudad. También comenzarás a hablar de acciones futuras y practicarás cómo hacer y responder preguntas en diferentes tiempos verbales.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4 - Travel and Experiences (Viajes y Experiencias)."} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                En este último módulo, te enfocarás en viajes, experiencias personales y conversaciones sociales más complejas. Aprenderás a compartir historias, expresar emociones, opiniones y desenvolverte en distintas situaciones sociales y culturales.
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación"><strong>Presentación del curso</strong></p>
                        <p><strong>¡Bienvenido a English Basic 2 (A2)!</strong></p>
                        <p>
                            Este curso es la continuación del nivel A1 y está diseñado para ayudarte a comunicarte con mayor confianza y seguridad en inglés en situaciones cotidianas, viajes y conversaciones sobre experiencias personales.
                        </p>
                        <p>
                            A lo largo de 4 módulos, aprenderás nueva gramática, ampliarás tu vocabulario y mejorarás tus habilidades para hablar, comprender, leer y escribir. Tendrás acceso a recursos interactivos y encuentros virtuales con profesores para practicar lo aprendido y resolver dudas.
                        </p>
                        <p>
                            El curso es 90% autónomo, basado en actividades dinámicas como lecturas, audios, videos y ejercicios interactivos, especialmente preguntas tipo multiple choice, matching, selección de imágenes y errores comunes, diseñadas para mantener el aprendizaje ágil y práctico.
                        </p>
                        <p id="Contenidos"><strong>Contenidos de los Módulos</strong></p>
                        <p className='mb-0'><strong>Módulo 1: Fundamentals and Basic Communication</strong></p>
                        <p>(Fundamentos y Comunicación Básica)</p>
                        <ul>
                            <li><strong>Sección 1:</strong> Presentaciones personales y saludos (expresiones de cortesía, introducciones).</li>
                            <li><strong>Sección 2:</strong> Verbos en presente simple y presente continuo (acciones habituales vs. acciones en progreso).</li>
                            <li><strong>Sección 3:</strong> familia, amigos, descripciones físicas.</li>
                            <li><strong>Sección 4:</strong> Wh-questions (who, what, where, when, why, how).</li>
                            <li><strong>Sección 5:</strong> Artículos y plurales regulares/irregulares.</li>
                            <li><strong>Sección 6:</strong> Adjetivos calificativos y comparativos básicos (big, bigger).</li>
                            <li><strong>Sección 7:</strong> Práctica oral y comprensión auditiva básica mediante diálogos simples.</li>
                        </ul>
                        <p><strong>Recursos</strong></p>
                        <ul>
                            <li>Audios de conversaciones y diálogos reales.</li>
                            <li>Videos explicativos sobre estructuras gramaticales.</li>
                            <li>Ejercicios interactivos:
                                <ul>
                                    <li>Multiple choice para identificar respuestas correctas.</li>
                                    <li>Matching (emparejar imágenes con palabras o frases).</li>
                                    <li>Ordenar frases.</li>
                                    <li>Preguntas con imágenes para describir personas o situaciones.</li>
                                </ul>
                            </li>
                        </ul>
                        <p><strong>Módulo 2: Routines and Daily Activities (Rutinas y Actividades Diarias)</strong></p>
                        <ul>
                            <li><strong>Sección 1:</strong> Verbos modales básicos (can, must) para expresar habilidad u obligación.</li>
                            <li><strong>Sección 2:</strong> hobbies, deportes, tiempo libre.</li>
                            <li><strong>Sección 3:</strong> Preposiciones de tiempo y lugar (in, on, at, under, next to).</li>
                            <li><strong>Sección 4:</strong> Pasado simple (verbos regulares e irregulares).</li>
                            <li><strong>Sección 5:</strong> Adverbios de frecuencia (always, usually, sometimes, never).</li>
                            <li><strong>Sección 6:</strong> Expresiones de gustos y preferencias (like, love, hate).</li>
                            <li><strong>Sección 7:</strong> Escritura de textos cortos (emails, notas) y comprensión lectora sencilla.</li>
                        </ul>
                        <p><strong>Recursos</strong></p>
                        <ul>
                            <li>Audios con relatos sobre rutinas y hobbies.</li>
                            <li>Videos de situaciones reales (gente hablando de pasatiempos).</li>
                            <li>Ejercicios interactivos:
                                <ul>
                                    <li>Preguntas de selección múltiple.</li>
                                    <li>Identificar el error en frases.</li>
                                    <li>Relacionar imágenes con acciones.</li>
                                    <li>Mini diálogos con opciones de respuesta.</li>
                                </ul>
                            </li>
                        </ul>
                        <p><strong>Módulo 3: Everyday Life and Environment (Vida Cotidiana y Entorno)</strong></p>
                        <ul>
                            <li><strong>Sección 1:</strong> Vocabulario: comida, compras, transporte.</li>
                            <li><strong>Sección 2:</strong> Futuro simple (will) para planes y predicciones.</li>
                            <li><strong>Sección 3:</strong> Preguntas en pasado y futuro.</li>
                            <li><strong>Sección 4:</strong> Uso de have/has para posesión y experiencias.</li>
                            <li><strong>Sección 5:</strong> Comparativos y superlativos (bigger, the biggest).</li>
                            <li><strong>Sección 6:</strong> Expresiones para pedir y dar direcciones.</li>
                            <li><strong>Sección 7:</strong> Práctica oral y auditiva con situaciones reales (shopping, asking for help).</li>
                        </ul>
                        <p><strong>Recursos</strong></p>
                        <ul>
                            <li>Audios de situaciones reales (compras, transporte, restaurantes).</li>
                            <li>Videos de escenas cotidianas.</li>
                            <li>Ejercicios interactivos:
                                <ul>
                                    <li>Escoger la respuesta correcta en diálogos.</li>
                                    <li>Matching entre frases y lugares.</li>
                                    <li>Selección de imágenes correctas.</li>
                                    <li>Role-plays virtuales sobre compras o pedir direcciones.</li>
                                </ul>
                            </li>
                        </ul>
                        <p><strong>Módulo 4: Travel and Experiences (Viajes y Experiencias)</strong></p>
                        <ul>
                            <li><strong>Sección 1:</strong> Vocabulario: viajes, clima, vacaciones.</li>
                            <li><strong>Sección 2:</strong> Presente perfecto para experiencias (Have you ever…?).</li>
                            <li><strong>Sección 3:</strong> Verbos modales para consejos y obligaciones (should, have to).</li>
                            <li><strong>Sección 4:</strong> Descripciones de lugares y personas.</li>
                            <li><strong>Sección 5:</strong> Expresar emociones y opiniones (happy, nervous, I think…).</li>
                            <li><strong>Sección 6:</strong> Comprensión de textos simples y diálogos (cartas, correos, posts).</li>
                            <li><strong>Sección 7:</strong> Repaso general y actividades integradoras de speaking y listening.</li>
                        </ul>
                        <p><strong>Recursos</strong></p>
                        <ul>
                            <li>Audios sobre viajes y experiencias personales.</li>
                            <li>Videos con entrevistas y relatos reales.</li>
                            <li>Ejercicios interactivos:
                                <ul>
                                    <li>Preguntas multiple choice sobre historias.</li>
                                    <li>Escuchar y seleccionar la respuesta correcta.</li>
                                    <li>Matching de frases con emociones.</li>
                                    <li>Role-plays virtuales sobre planes de viaje o contar experiencias.</li>
                                </ul>
                            </li>
                        </ul>
                        <p id='Recursos'><strong>Recursos del Curso - English Basic 2 (A2)</strong></p>
                        <ul>
                            <li><strong>Audios y videos reales:</strong> con diálogos, escenas cotidianas y diferentes acentos, para mejorar tu comprensión auditiva y acostumbrarte al inglés auténtico.</li>
                            <li><strong>Lecturas cortas y textos prácticos:</strong> adaptados a tu nivel, con temas de la vida diaria, viajes, rutinas y experiencias, que te permiten enriquecer vocabulario y estructuras gramaticales.</li>
                            <li><strong>Ejercicios interactivos:</strong> tipo multiple choice, matching (emparejar palabras con imágenes o frases), selección de respuestas correctas, identificar errores y actividades visuales que hacen el aprendizaje más entretenido y eficaz.</li>
                            <li><strong>Práctica de pronunciación:</strong> audios con repetición y actividades para mejorar tu acento y comprensión de sonidos específicos.</li>
                            <li><strong>Role-plays virtuales:</strong> encuentros en línea con profesores para practicar conversaciones reales, resolver dudas y ganar confianza al hablar.</li>
                            <li><strong>Material de autoevaluación:</strong> pruebas cortas y actividades de repaso para verificar tu progreso después de cada módulo o tema clave.</li>
                            <li><strong>Acceso online permanente:</strong> a todos los materiales del curso, para que puedas estudiar a tu ritmo, revisar las lecciones o practicar cuando lo necesites.</li>
                        </ul>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(EnglishBasic2, {
//     returnTo: '/EnglishBasic2',
// });