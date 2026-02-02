// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "English Intermediate 1",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

export default function EnglishIntermediate1() {
    return (
        <>
            <div className="container english-background-root">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"English Intermediate 1"} curso={"EnglishIntermediate1"}>
                        <AccordionModulos title={"Módulo 1 - Fundamentos y experiencias pasadas."} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                Aprenderás a presentarte, hablar de tu rutina diaria y contar hechos del pasado. Practicarás el presente simple y continuo, y el pasado simple y continuo. En vocabulario, abordarás saludos, descripciones, viajes y cómo narrar experiencias personales.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2 - Planes, reglas y habilidades."} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                Te enfocarás en expresar planes futuros, reglas, obligaciones y habilidades, usando estructuras como be going to, presente continuo con sentido de futuro y verbos modales (must, should, can, could). Trabajarás vocabulario sobre viajes, aeropuertos, emociones y cómo dar consejos.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3 - Deportes, relaciones y el cuerpo."} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                Explorarás cómo hacer comparaciones, hablar de hábitos pasados con used to, y usar la voz pasiva. Aprenderás a deducir información con modales como might, must, cant. El vocabulario incluirá relaciones personales, salud, cine y entretenimiento.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4 - Educación, trabajo y temas actuales."} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                Te centrarás en educación, el mundo laboral y noticias. Estudiarás condicionales, pasado perfecto y discurso indirecto (reported speech). El vocabulario cubrirá educación, trabajo, tecnología y cómo contar historias personales de manera más compleja.
                            </p>
                        </AccordionModulos>
                    </LeftColumn>


                    <RightColumn>
                        <p id="Presentación"><strong>Presentación del curso</strong></p>
                        <p><strong>¡Bienvenido a English intermediate 1!</strong></p>
                        <p>
                            El curso English intermediate 1 , está diseñado para hablantes de español y busca que los estudiantes hablen inglés con confianza y seguridad. La metodología se basa en el principio:
                        </p>
                        <p><strong>Grammar + Vocabulary + Pronunciation = Confident Speaking</strong></p>
                        <p>Cada lección integra estos tres pilares, empleando situaciones reales, humor e historias atractivas para facilitar el aprendizaje y mantener la motivación.</p>

                        <p id="Contenidos"><strong>Contenidos de los Módulos</strong></p>
                        <p className='mb-0'><strong>Módulo 1: Fundamentos y experiencias pasadas</strong></p>
                        <p><strong>Unidad temática:</strong> Presentaciones, rutinas y narración de hechos pasados.</p>
                        <ul>
                            <li>Presente simple</li>
                            <li>Presente continuo</li>
                            <li>Pasado simple</li>
                            <li>Pasado continuo</li>
                        </ul>
                        <p><strong>Temas gramaticales clave:</strong></p>
                        <ul>
                            <li>Orden de las palabras en preguntas</li>
                            <li>Comparación entre presente simple y continuo</li>
                            <li>Verbos regulares e irregulares en pasado</li>
                            <li>Uso de secuenciadores y preposiciones de lugar</li>
                        </ul>
                        <p><strong>Temas léxicos / comunicativos:</strong></p>
                        <ul>
                            <li>Saludos, descripciones personales, vestimenta</li>
                            <li>Viajes, vacaciones, narración de experiencias</li>
                            <li>Cómo describir imágenes y fotos del pasado</li>
                        </ul>
                        <p><strong>Temas léxicos / comunicativos:</strong></p>
                        <ol>
                            <li>Presentaciones personales y preguntas clave</li>
                            <li>Rutinas diarias y descripciones de personas</li>
                            <li>Acciones del momento y vocabulario de ropa</li>
                            <li>Situaciones cotidianas en un hotel (Practical English)</li>
                            <li>Relatar vacaciones pasadas</li>
                            <li>Narrar eventos y ubicar elementos en fotos</li>
                            <li>Retroalimentación del Módulo</li>
                        </ol>
                        <p><strong>Módulo 2: Planes, reglas y habilidades</strong></p>
                        <p><strong>Unidad temática:</strong> Planificación, normas, habilidades y expresión de opinión.</p>
                        <ul>
                            <li>Futuro con "be going to"</li>
                            <li>Futuro con presente continuo</li>
                            <li>Uso modal de "have to", "must", "can", "could", "should"</li>
                        </ul>
                        <p><strong>Temas gramaticales clave:</strong></p>
                        <ul>
                            <li>Futuro para planes y predicciones</li>
                            <li>Verbos + preposiciones</li>
                            <li>Obligación y prohibición</li>
                            <li>Habilidad y posibilidad</li>
                            <li>Cuantificadores y pronombres indefinidos</li>
                        </ul>
                        <p><strong>Temas léxicos / comunicativos:</strong></p>
                        <ul>
                            <li>Aeropuertos, viajes, llamadas telefónicas</li>
                            <li>Habilidades, emociones, sentimientos</li>
                            <li>Cómo expresar opiniones y dar consejos</li>
                        </ul>
                        <p><strong>Secuencias:</strong></p>
                        <ol>
                            <li>Planes de viaje (futuro con "going to")</li>
                            <li>Arreglos sociales (presente continuo como futuro)</li>
                            <li>Definir personas y cosas con oraciones relativas</li>
                            <li>Expresar opiniones (Practical English)</li>
                            <li>Reglas y obligaciones cotidianas</li>
                            <li>Habilidades y emociones</li>
                            <li>Retroalimentación del Módulo</li>
                        </ol>
                        <p><strong>Módulo 3: Deportes, relaciones y el cuerpo</strong></p>
                        <p><strong>Unidad temática:</strong> Comparaciones, relaciones, salud y narración.</p>
                        <p><strong>Tiempos verbales:</strong></p>
                        <ul>
                            <li>"Used to" para hábitos del pasado</li>
                            <li>Voz pasiva</li>
                            <li>Modales de deducción ("might", "must", "can’t")</li>
                        </ul>
                        <p><strong>Temas gramaticales clave:</strong></p>
                        <ul>
                            <li>Comparativos y superlativos</li>
                            <li>Expresar hábitos pasados</li>
                            <li>Voz pasiva en presente y pasado</li>
                            <li>Uso de modales para suposiciones</li>
                            <li>Cuantificadores</li>
                        </ul>
                        <p><strong>Temas léxicos / comunicativos:</strong></p>
                        <ul>
                            <li>Relaciones personales, salud y partes del cuerpo</li>
                            <li>Cine y entretenimiento</li>
                            <li>Hacer peticiones y deducciones basadas en la observación</li>
                        </ul>
                        <p><strong>Secuencias:</strong></p>
                        <ol>
                            <li>Comparaciones y descripciones</li>
                            <li>Hábitos pasados y relaciones personales</li>
                            <li>Cómo pedir cosas con cortesía (Practical English)</li>
                            <li>Salud y partes del cuerpo</li>
                            <li>Cine y voz pasiva</li>
                            <li>Deducción e interpretación de señales</li>
                            <li>Retroalimentación del Módulo</li>
                        </ol>
                        <p><strong>Módulo 4: Educación, trabajo y temas actuales</strong></p>
                        <p><strong>Unidad temática:</strong> Educación, mundo laboral, noticias y experiencias de vida.</p>
                        <p><strong>Tiempos verbales:</strong></p>
                        <ul>
                            <li>Primer y segundo condicional</li>
                            <li>Pasado perfecto</li>
                            <li>Presente perfecto</li>
                            <li>Reported speech (discurso indirecto)</li>
                        </ul>
                        <p><strong>Temas gramaticales clave:</strong></p>
                        <ul>
                            <li>Condicionales y cláusulas temporales</li>
                            <li>Obligación y prohibición (revisión)</li>
                            <li>Verbos + -ing / infinitivo</li>
                            <li>Discurso indirecto</li>
                            <li>Preguntas sin auxiliares</li>
                        </ul>
                        <p><strong>Temas léxicos / comunicativos:</strong></p>
                        <ul>
                            <li>Educación, exámenes, casas y el trabajo</li>
                            <li>Tecnología, noticias, felicidad y emociones</li>
                            <li>Historias personales y narrativas complejas</li>
                        </ul>
                        <p><strong>Secuencias:</strong></p>
                        <ol>
                            <li>Educación, exámenes y primer condicional</li>
                            <li>Hipótesis y situaciones imaginarias (2º condicional)</li>
                            <li>Reglas, habilidades y consejos</li>
                            <li>Vida laboral y gustos profesionales</li>
                            <li>Reportar lo que otros dijeron (reported speech)</li>
                            <li>Historias y narrativas con pasado perfecto</li>
                            <li>Retroalimentación del Módulo</li>
                        </ol>

                        <p id='Recursos'><strong>Recursos del Curso</strong></p>
                        <p><strong>Students Book (Libro del Estudiante)</strong></p>
                        <ul>
                            <li>12 unidades (Files) con lecciones A, B y C.</li>
                            <li>Secciones Grammar Bank, Vocabulary Bank y Sound Bank.</li>
                            <li>Disponible también en formato eBook</li>
                        </ul>
                        <p><strong>Workbook (Libro de Ejercicios)</strong></p>
                        <ul>
                            <li>Ejercicios de consolidación tras cada unidad.</li>
                            <li>Actividades de repaso “Can you remember…?”</li>
                        </ul>
                        <p><strong>Practical English</strong></p>
                        <ul>
                            <li>Vídeos para practicar inglés funcional en contextos reales.</li>
                        </ul>
                        <p><strong>Online Practice</strong></p>
                        <ul>
                            <li>Ejercicios interactivos de gramática, vocabulario, pronunciación y comprensión auditiva.</li>
                            <li>Tests de progreso con retroalimentación instantánea.</li>
                        </ul>
                        <p><strong>Teachers Guide y Oxford Premium Resources</strong></p>
                        <ul>
                            <li>Planes de clase completos.</li>
                            <li>Material fotocopiable y recursos audiovisuales.</li>
                            <li>Herramientas interactivas para clase.</li>
                        </ul>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(EnglishIntermediate1, {
//     returnTo: '/EnglishIntermediate1',
// });