// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "Proyecto Steam",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

export default function ProyectoSteam() {
    return (
        <>
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Proyecto Steam"} curso={"ProyectoSteam"}>
                        <AccordionModulos title={"Módulo 1 - 👩🏻‍🔬 Ciencia: Los secretos de mi entorno"} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                En este módulo, el estudiante deja de ser un espectador pasivo para convertirse en un detective de la naturaleza, aprendiendo a leer las pistas que el agua, el suelo y la energía le dan.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2 - 👷🏻‍♀️ Ingeniería: Manos a la obra"} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                Aquí la historia evoluciona: el estudiante usa lo que descubrió en el Módulo 1 para modificar su entorno. Pasamos del "por qué" al "cómo funciona".
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3 - 👨🏼‍💻 Tecnología: El cerebro del futuro"} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                El estudiante da el salto al futuro. Ya sabe construir estructuras (Módulo 2), ahora les dará "vida" e "inteligencia" mediante la electricidad y la lógica.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4 - 🧑🏻‍🎨 Arte y Matemáticas: Crear e innovar"} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                El gran final. El estudiante une ciencia, ingeniería y tecnología con la creatividad humana para comunicar ideas, diseñar soluciones estéticas y presentar su visión al mundo.
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <div id="Presentación">
                            <p><strong>🎓 Presentación del curso</strong></p>
                            <p><strong>¡Bienvenido a Proyecto Steam!</strong></p>
                            <p>
                                El curso “Educación STEAM: Ciencia, Tecnología, Ingeniería, Arte y Matemáticas Aplicadas” está diseñado para que los estudiantes de 12 a 16 años aprendan haciendo, a través de experiencias prácticas, proyectos colaborativos y actividades que integran la creatividad con la solución de problemas reales.
                            </p>
                            <p>
                                El programa está compuesto por 4 módulos progresivos con un total de 140 temas, donde los y las estudiantes desarrollarán competencias científicas, tecnológicas y creativas a través de un aprendizaje autónomo guiado por la plataforma, que actúa como mentor digital.
                            </p>
                            <ul>
                                <li><strong>Duración:</strong> 4 módulos (35 temas cada uno)</li>
                                <li><strong>Modalidad:</strong> Virtual/Autónoma</li>
                                <li><strong>Metodología:</strong> Aprendizaje por proyectos (Learning by Doing)</li>
                                <li><strong>Evaluación:</strong> Evidencias prácticas, reflexiones y prototipos</li>
                                <li><strong>Meta:</strong> Desarrollar pensamiento crítico, creatividad e innovación tecnológica en jóvenes</li>
                            </ul>
                        </div>
                        <div id="Contenidos">
                            <p><strong>Contenidos de los Módulos</strong></p>
                            <div className="table-responsive">
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
                                            <td>👩🏻‍🔬 Ciencia:<br />los secretos de mi entorno</td>
                                            <td>
                                                <ol>
                                                    <li><strong>El Método:</strong> Aprender a diferenciar mirar de observar, usar una bitácora y entender el valor de fallar.</li>
                                                    <li><strong>El Agua:</strong> Explorar su ciclo local, sus "superpoderes" (cohesión/adhesión) y cómo limpiarla (filtración).</li>
                                                    <li><strong>El Suelo:</strong> Analizar la vida microscópica, el pH de la tierra y crear compost.</li>
                                                    <li><strong>Plantas:</strong> Entender la anatomía vegetal, la fotosíntesis y la botánica útil (medicinal).</li>
                                                    <li><strong>Física I:</strong> Experimentar con fuerzas invisibles: gravedad, fricción, inercia y equilibrio.</li>
                                                    <li><strong>Energía:</strong> Atrapar al sol (térmica), domar al viento (eólica) y entender la energía cinética.</li>
                                                    <li><strong>Ecosistema:</strong> Comprender las redes tróficas, la biodiversidad y nuestra huella ecológica.</li>
                                                </ol>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>👷🏻‍♀️ Ingeniería:<br /> manos a la obra</td>
                                            <td>
                                                <ol>
                                                    <li><strong>Soportes:</strong> Descubrir el poder del triángulo, columnas, vigas y nudos fuertes.</li>
                                                    <li><strong>Máquinas 1:</strong> Dominar la palanca, el plano inclinado, la cuña y el tornillo.</li>
                                                    <li><strong>Máquinas 2:</strong> Construir sistemas con ejes, poleas, polipastos y engranajes.</li>
                                                    <li><strong>Mecanismos:</strong> Transformar movimientos con bielas, levas, resortes y cadenas.</li>
                                                    <li><strong>Fluidos:</strong> Controlar la fuerza del agua y aire (hidráulica y neumática) con jeringas y válvulas.</li>
                                                    <li><strong>Maker:</strong> Aprender dibujo técnico (planos), técnicas de corte de cartón y medición precisa.</li>
                                                    <li><strong>Hábitat:</strong> Diseñar refugios con ventilación pasiva, aislamiento térmico y techos seguros.</li>
                                                </ol>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>👨🏼‍💻 Tecnología:<br /> el cerebro del futuro</td>
                                            <td>
                                                <ol>
                                                    <li><strong>Lógica:</strong> Entender algoritmos, patrones, abstracción y diagramas de flujo (sin computadoras aún).</li>
                                                    <li><strong>Código:</strong> Aprender binario, píxeles, bucles y condicionales.</li>
                                                    <li><strong>Electricidad:</strong> Dominar conductores vs. aislantes, seguridad y baterías caseras (limones).</li>
                                                    <li><strong>Circuitos:</strong> Montar circuitos serie/paralelo, interruptores y usar tecnología LED.</li>
                                                    <li><strong>Motores:</strong> Crear electroimanes, el motor más simple del mundo y generadores.</li>
                                                    <li><strong>Autómatas:</strong> Construir robots mecánicos, sistemas de riego automático y máquinas de Goldberg.</li>
                                                    <li><strong>Sociedad:</strong> Analizar cómo funcionan el celular, internet, las ondas de radio y la ética digital.</li>
                                                </ol>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>🧑🏻‍🎨 Arte y Matemáticas: <br />crear e innovar</td>
                                            <td>
                                                <ol>
                                                    <li><strong>Geometría:</strong> Explorar fractales naturales, simetría, teselados y poliedros 3D.</li>
                                                    <li><strong>Medida:</strong> Desarrollar el arte de estimar, medir áreas, volúmenes y entender mapas/escalas.</li>
                                                    <li><strong>Finanzas:</strong> Presupuestos básicos, costos de proyectos, ahorro y trueque.</li>
                                                    <li><strong>Diseño:</strong> Teoría del color, ergonomía, perspectiva 3D, tipografía y fotografía.</li>
                                                    <li><strong>Sonido:</strong> Visualizar ondas, frecuencia, tono y construir instrumentos de viento/percusión.</li>
                                                    <li><strong>Narrativa:</strong> Estructura de historias (Storytelling), oratoria, guion técnico y el "Pitch".</li>
                                                    <li><strong>Cierre:</strong> Integración total STEAM, ideación de soluciones reales y la Gran Feria de Proyectos.</li>
                                                </ol>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id='Recursos'>
                            <p><strong>Recursos del Curso</strong></p>
                            <p><strong>🌿 Modulo 1</strong></p>
                            <ul>
                                <li><strong>Para Exploración:</strong> Cuaderno (Bitácora), lupa (o lente de botella), lápices.</li>
                                <li><strong>Laboratorio Casero:</strong> Botellas plásticas (filtros), repollo morado (indicador pH).</li>
                                <li><strong>Entorno:</strong> Muestras de tierra, hojas, agua de lluvia.</li>
                            </ul>
                            <p><strong>🏗 Modulo 2</strong></p>
                            <ul>
                                <li><strong>Estructurales:</strong> Mucho cartón, palitos de brocheta, pegamento (o engrudo casero), cinta adhesiva.</li>
                                <li><strong>Mecánicos:</strong> Tapas de botella (ruedas/poleas), bandas elásticas (transmisión), cuerda o pabilo.</li>
                                <li><strong>Hidráulicos:</strong> Jeringas sin aguja, mangueras plásticas delgadas (kits de venoclisis o acuario).</li>
                                <li><strong>Herramientas:</strong> Tijeras, regla, escuadra.</li>
                            </ul>
                            <p><strong>🤖 Modulo 3</strong></p>
                            <ul>
                                <li><strong>Electrónica Básica:</strong> LEDs, pilas (AA o botón), cables caimán, motorcitos DC (de juguetes viejos), zumbadores.</li>
                                <li><strong>Materiales Conductores:</strong> Papel aluminio, clips metálicos, alambre de cobre esmaltado, imanes.</li>
                                <li><strong>Low-Tech:</strong> Papel cuadriculado (para pixel art y lógica), cartón (para chasis de robots).</li>
                            </ul>
                            <p><strong>🎨 Modulo 4</strong></p>
                            <ul>
                                <li><strong>Artísticos:</strong> Pinturas, pigmentos naturales, papeles de colores, revistas (collage).</li>
                                <li><strong>Matemáticos:</strong> Regla, transportador, compás, calculadora básica.</li>
                                <li><strong>Audiovisuales:</strong> Celular (para fotos/video del pitch), materiales reciclados para escenografía o instrumentos.</li>
                            </ul>
                        </div>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(EnglishBasic1, {
//     returnTo: '/EnglishBasic1',
// });