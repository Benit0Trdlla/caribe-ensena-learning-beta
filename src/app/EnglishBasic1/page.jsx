import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "English Basic 1",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

function EnglishBasic1() {
    return (
        <>
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"English Basic 1"} curso={"EnglishBasic1"}>
                        <AccordionModulos title={"Módulo 1 - Getting Started: Primeros pasos en inglés."} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                Este módulo te introduce al idioma inglés desde lo más esencial. Aprenderás el alfabeto, la pronunciación básica, los saludos, cómo presentarte, dar tu información personal y hablar de los días, meses y fechas.
                            </p>
                            <p>
                                También empezarás a usar el verbo to be y vocabulario útil para el aula. Mediante audios, videos y ejercicios interactivos, comenzarás a comunicarte en inglés desde el primer día.
                            </p>
                            <p>🔹 <strong>Temas clave:</strong>  alfabeto, saludos, datos personales, nacionalidades, verbo to be, días y meses.</p>
                            <p>🔹 <strong>Recursos:</strong>  audios de pronunciación, diálogos simples, videos explicativos y actividades de opción múltiple.</p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2 - Daily Life and Routines: Tu vida diaria en inglés."} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                En este módulo aprenderás a hablar de tu rutina, decir la hora, expresar frecuencia y dar indicaciones simples. Aprenderás vocabulario relacionado con la familia, los lugares de tu ciudad y tus hobbies.
                            </p>
                            <p>
                                El uso del presente simple te permitirá describir tus actividades cotidianas y compartir tus gustos y opiniones.
                            </p>
                            <p>🔹<strong>Temas clave:</strong> rutinas, horas, familia, lugares, direcciones, hobbies y frecuencia.</p>
                            <p>🔹<strong>Recursos:</strong> ejercicios de comprensión lectora y auditiva, preguntas tipo test, audios reales y pequeños diálogos.</p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3 - Everyday Situations: Situaciones del día a día."} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                Este módulo te prepara para desenvolverte en situaciones reales como pedir comida, comprar ropa, describir personas y objetos, hablar del clima y contar experiencias pasadas.
                            </p>
                            <p>
                                Aprenderás nuevas expresiones útiles para interactuar en tiendas y restaurantes, además de practicar los adjetivos y los comparativos básicos.
                            </p>
                            <p>🔹<strong>Temas clave:</strong> comida, compras, descripciones, verbos can/cant, clima y pasado simple (was/were).</p>
                            <p>🔹<strong>Recursos:</strong> diálogos en audio y video, actividades tipo test, escenarios cotidianos para resolver preguntas.</p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4 - Personal Experiences & Travel: Viajes y experiencias personales."} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                En este último módulo, aprenderás a hablar de transporte, planear actividades, expresar sentimientos, contar tus viajes, hablar de salud y mantener conversaciones breves en contextos sociales.
                            </p>
                            <p>
                                También revisarás todo lo aprendido a lo largo del curso y reforzarás tu capacidad para participar en diálogos reales.
                            </p>
                            <p>🔹<strong>Temas clave:</strong> transporte, planes, emociones, salud, llamadas, preferencias y repaso general.</p>
                            <p>🔹<strong>Recursos:</strong> prácticas guiadas, audios, ejercicios de opción múltiple, role-plays virtuales y revisión global.</p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación">
                            <strong>Presentación del curso</strong>
                        </p>
                        <p><strong>¡Bienvenido a English Basic 1 (A1)!</strong></p>
                        <p>
                            Bienvenido al curso de English basic 1, diseñado para personas que inician su aprendizaje del idioma y desean comunicarse en situaciones cotidianas. El curso está organizado en 4 módulos progresivos, cubriendo desde lo más básico hasta conversaciones simples sobre experiencias personales y viajes.
                        </p>
                        <p>
                            Es un curso 90% autónomo, pensado para que puedas estudiar a tu ritmo, con actividades interactivas y materiales variados. Además, tendrás encuentros virtuales con profesores para practicar speaking, resolver dudas y afianzar tu aprendizaje.
                        </p>
                        <p id="Contenidos">
                            <strong>Contenidos de los Módulos</strong>
                        </p>
                        <p>
                            <strong>Módulo 1: Getting Started</strong>
                        </p>
                        <ul>
                            <li>Alfabeto y pronunciación básica.</li>
                            <li>Saludos, despedidas y presentaciones personales.</li>
                            <li>Información personal: números, nacionalidades, datos básicos.</li>
                            <li>Uso del verbo To Be en afirmaciones, negativas y preguntas.</li>
                            <li>Lenguaje en clase (instrucciones básicas).</li>
                            <li>Introducción de personas, profesiones y posesivos.</li>
                            <li>Días, meses y fechas en diferentes formatos.</li>
                        </ul>
                        <p>Temas transversales: colores, emociones básicas, demonstratives (this, that), possessives, spelling, short messages.</p>
                        <p>Encuentro virtual: pronunciación, role-plays de presentaciones y saludos.</p>
                        <p>
                            <strong>Módulo 2: Daily Life and Routines</strong>
                        </p>
                        <ul>
                            <li>Cómo decir la hora y hablar del tiempo diario.</li>
                            <li>Rutinas cotidianas con verbos frecuentes y adverbios de frecuencia.</li>
                            <li>Presente simple para expresar acciones diarias, opiniones y preferencias.</li>
                            <li>Familia y relaciones personales.</li>
                            <li>Lugares en la ciudad y uso de there is / there are.</li>
                            <li>Indicaciones y ubicaciones dentro y fuera de edificios.</li>
                            <li>Vocabulario sobre hobbies y tiempo libre.</li>
                        </ul>
                        <p>Temas transversales: phrasal verbs simples, colores, pronombres posesivos, expresiones cortas, emociones y mensajes breves.</p>
                        <p>Encuentro virtual: práctica de rutinas, direcciones y conversaciones básicas sobre hobbies.</p>
                        <p>
                            <strong>Módulo 3: Everyday Situations</strong>
                        </p>
                        <ul>
                            <li>Alimentos, bebidas y comidas del día.</li>
                            <li>Pedir en restaurantes usando “would like”.</li>
                            <li>Compras: vocabulario, precios y colores.</li>
                            <li>Descripción de personas y objetos con adjetivos y comparativos básicos.</li>
                            <li>Uso de can / cant para habilidades y permisos.</li>
                            <li>Vocabulario sobre clima y estaciones.</li>
                            <li>Conversaciones simples en pasado con el verbo was/were y expresiones de opinión sobre experiencias pasadas.</li>
                        </ul>
                        <p>Temas transversales: countable/uncountable nouns, some/any, short polite expressions, emociones, describir objetos, precios, opiniones.</p>
                        <p>Encuentro virtual: role-plays de compras, pedidos en restaurantes y descripción de personas u objetos.</p>
                        <p>
                            <strong>Módulo 4: Personal Experiences & Travel</strong>
                        </p>
                        <ul>
                            <li>Vocabulario de transporte y cómo preguntar cómo llegar a sitios.</li>
                            <li>Planes futuros y organización de actividades.</li>
                            <li>Viajes, vacaciones y emociones asociadas.</li>
                            <li>Hablar de salud, el cuerpo y expresar malestar.</li>
                            <li>Gustos, preferencias y comparaciones simples.</li>
                            <li>Conversaciones sociales cortas, llamadas telefónicas y notas breves.</li>
                            <li>Revisión y práctica general de lo aprendido.</li>
                        </ul>
                        <p>Temas transversales: phone conversations, invitations, emotions, short notes, phrasal verbs sociales, feelings, basic comparatives.</p>
                        <p>Encuentro virtual: role-plays sobre viajes, salud, llamadas telefónicas y expresión de opiniones.</p>
                        <p id='Recursos'>
                            <strong>Recursos del Curso</strong>
                        </p>
                        <ul>
                            <li>Lecturas breves: diálogos, descripciones y mensajes reales.</li>
                            <li>Audios y videos: pronunciación, listening y contextos reales.</li>
                            <li>Actividades interactivas:
                                <ul>
                                    <li>Preguntas de opción múltiple (MCQ).</li>
                                    <li>Matching presentado en formato MCQ.</li>
                                    <li>Identificación de imágenes correctas.</li>
                                    <li>Ordenar frases seleccionando opciones.</li>
                                    <li>Detectar errores en frases (error spotting MCQ).</li>
                                    <li>Mini conversaciones con opciones de respuesta.</li>
                                </ul>
                            </li>
                            <li>Role-plays virtuales en los encuentros con profesores para practicar speaking y fluidez.</li>
                        </ul>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

export default withPageAuthRequired(EnglishBasic1, {
    returnTo: '/EnglishBasic1',
});