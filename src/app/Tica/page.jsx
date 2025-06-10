import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, Header, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "Tica",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

function TicaPage() {
    return (
        <>
            {/* <Header ImgUrl="/Images/Logo_Cursos/Ensenapaz.png" href="/Cursos" indexMeet={0} /> */}
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Tica"} curso={"Tica"}>
                        <AccordionModulos title={"📦 Módulo 1: Introducción a la Electrónica y Lógica"} collapseNumber={"collapseOne"}>
                            {/* <strong>Tema 1: Introducción a la Paz en Colombia</strong> */}
                            <hr />
                            <p>
                                En este módulo aprenderás los conceptos básicos de la electrónica y la lógica digital. Conocerás los componentes principales como LEDs, resistencias y pulsadores, y entenderás cómo fluye la electricidad en un circuito.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"💡 Módulo 2: Introducción a Arduino y Sketches"} collapseNumber={"collapseTwo"}>
                            {/* <strong>Tema 1: Resolución Pacífica de Conflictos</strong> */}
                            <hr />
                            <p>
                                En este módulo conocerás qué es Arduino, cómo instalar su entorno de programación (IDE), y cómo escribir tu primer código (sketch) para controlar un LED.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"🧠 Módulo 3: Fundamentos de Programación"} collapseNumber={"collapseThree"}>
                            {/* <strong>Tema 1: Ciudadanía Activa y Participación</strong> */}
                            <hr />
                            <p>
                                Aquí aprenderás a programar con estructuras básicas como variables, condicionales y bucles. Usarás la lógica para controlar LEDs y simular comportamientos como semáforos.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"📡 Módulo 4: Sensores y Señales Básicas"} collapseNumber={"collapseFour"}>
                            {/* <strong>Tema 1: Empoderamiento Integral de Mujeres y Liderazgo Femenino en la Construcción de Paz</strong> */}
                            <hr />
                            <p>
                                Aprenderás qué son los sensores y cómo interactuar con el mundo físico mediante señales analógicas y digitales. Comenzarás a construir proyectos más inteligentes y responsivos.
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación">
                            <strong>🤖 Tica con Arduino - Nivel 1</strong>
                        </p>
                        <p>
                            Este curso introductorio está diseñado para jóvenes entre 12 y 17 años interesados en iniciarse en el mundo de la robótica y la electrónica con Arduino. A través de lecturas, videos y actividades prácticas, aprenderán los fundamentos de la electrónica, la programación básica, el uso de sensores, y cómo crear sus primeros circuitos y prototipos inteligentes.
                        </p>
                        <p id="Contenidos">
                            <strong>Contenidos de los Módulos</strong>
                        </p>
                        <ul>
                            <li>
                                <strong>Módulo 1: </strong><br />
                                <p className='mb-0 mt-3'>¿Qué es la electrónica?</p>
                                <ul className='mb-3'>
                                    <li>Diferencias entre analógica y digital</li>
                                    <li>Componentes básicos: resistencias, LEDs, pulsadores.</li>
                                    <li>Cómo funciona un circuito eléctrico.</li>
                                </ul>
                                <p className='mb-0'>Fundamentos eléctricos</p>
                                <ul className='mb-3'>
                                    <li>Voltaje, corriente y resistencia.</li>
                                    <li>Ley de Ohm.</li>
                                    <li>Introducción a la lógica digital (alto/bajo, 1 y 0).</li>
                                </ul>
                                <p className='mb-0'>Video: Ley de Ohm y el Kit Arduino</p>
                                <ul className='mb-3'>
                                    <li>Cómo medir voltaje y resistencia.</li>
                                    <li>¿Qué hay dentro del kit de Arduino?</li>
                                </ul>
                                <p className='mb-0'>La placa Arduino y la protoboard</p>
                                <ul className='mb-3'>
                                    <li>Conexiones básicas y encendido de LEDs.</li>
                                </ul>
                                <p className='mb-0'>Armado de circuito básico</p>
                                <ul className='mb-3'>
                                    <li>Video paso a paso: conectar componentes en protoboard.</li>
                                </ul>
                                <p className='mb-0'>Video: Encendido/apagado de LED con interruptor físico</p>
                                <ul className='mb-3'>
                                    <li>Práctica de montaje sencillo.</li>
                                </ul>
                                <p className='mb-0'>Actividad práctica final</p>
                                <ul className='mb-3'>
                                    <li>Construir un circuito básico e identificar cada componente.</li>
                                </ul>
                            </li>

                            <li>
                                <strong>Módulo 2: </strong> <br />
                                <p className='mb-0 mt-3'>Instalación del IDE de Arduino</p>
                                <ul className='mb-3'>
                                    <li>Configuración inicial y reconocimiento de placa.</li>
                                </ul>
                                <p className='mb-0'>Exploración del entorno Arduino</p>
                                <ul className='mb-3'>
                                    <li>Descarga, componentes del sistema y primeros pasos.</li>
                                </ul>
                                <p className='mb-0'>Video: Estructura de un Sketch</p>
                                <ul className='mb-3'>
                                    <li>Explicación visual de setup() y loop().</li>
                                </ul>
                                <p className='mb-0'>Teoría: ¿Cómo funciona un Sketch?</p>
                                <ul className='mb-3'>
                                    <li>Uso de funciones y lógica de ejecución.</li>
                                </ul>
                                <p className='mb-0'>Video: Primer programa - Parpadeo de LED</p>
                                <ul className='mb-3'>
                                    <li>Proyecto Blink.</li>
                                </ul>
                                <p className='mb-0'>Video: Subir sketch a la placa Arduino</p>
                                <ul className='mb-3'>
                                    <li>Proceso de verificación y carga.</li>
                                </ul>
                                <p className='mb-0'>Glosario de comandos básicos</p>
                                <ul className='mb-3'>
                                    <li>pinMode(), digitalWrite(), delay().</li>
                                </ul>
                            </li>

                            <li>
                                <strong>Módulo 3: </strong> <br />
                                <p className='mb-0 mt-3'>Variables y tipos de datos</p>
                                <ul className='mb-3'>
                                    <li>int, float, boolean: usos y ejemplos.</li>
                                </ul>
                                <p className='mb-0'>Condicionales (if, else)</p>
                                <ul className='mb-3'>
                                    <li>Cómo tomar decisiones en el código.</li>
                                </ul>
                                <p className='mb-0'>Video: LED con botón</p>
                                <ul className='mb-3'>
                                    <li>Proyecto interactivo usando condicionales.</li>
                                </ul>
                                <p className='mb-0'>Bucles: for, while</p>
                                <ul className='mb-3'>
                                    <li>Repeticiones y control de flujo.</li>
                                </ul>
                                <p className='mb-0'>Video: Secuencia de luces con bucles</p>
                                <ul className='mb-3'>
                                    <li>Práctica de animación con LEDs.</li>
                                </ul>
                                <p className='mb-0'>Video: Proyecto semáforo con LEDs</p>
                                <ul className='mb-3'>
                                    <li>Integración de condicionales y bucles.</li>
                                </ul>
                                <p className='mb-0'>Cuestionario + reto de código</p>
                                <ul className='mb-3'>
                                    <li>Aplicar lo aprendido para resolver un desafío.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Módulo 4: </strong> <br />
                                <p className='mb-0 mt-3'>¿Qué es un sensor?</p>
                                <ul className='mb-3'>
                                    <li>Tipos: luz, temperatura, ultrasonido.</li>
                                </ul>
                                <p className='mb-0'>Señales analógicas vs digitales</p>
                                <ul className='mb-3'>
                                    <li>Cómo interpretarlas en Arduino.</li>
                                </ul>
                                <p className='mb-0'>Video: Lectura de sensor de luz (LDR)</p>
                                <ul className='mb-3'>
                                    <li>Medición básica con analogRead().</li>
                                </ul>
                                <p className='mb-0'>Mapeo de señales analógicas</p>
                                <ul className='mb-3'>
                                    <li>Ajustar valores de entrada a rangos útiles.</li>
                                </ul>
                                <p className='mb-0'>Video: Sensor de temperatura TMP36</p>
                                <ul className='mb-3'>
                                    <li>Lectura y visualización de valores.</li>
                                </ul>
                                <p className='mb-0'>Video proyecto: Control de LED por sensor</p>
                                <ul className='mb-3'>
                                    <li>Encendido de LED según condiciones del entorno.</li>
                                </ul>
                                <p className='mb-0'>Revisión y evaluación final</p>
                                <ul className='mb-3'>
                                    <li>Comprobación de aprendizajes y preparación para siguiente nivel.</li>
                                </ul>
                            </li>
                        </ul>
                        <p id='Recursos'>
                            <strong> 🧰 Recursos del Curso</strong>
                        </p>
                        <ul>
                            <li><strong>Placa Arduino UNO</strong></li>
                            <li><strong>Cable USB</strong></li>
                            <li><strong>Protoboard (placa de pruebas)</strong> </li>
                            <li><strong>Resistencias (220Ω, 10kΩ)</strong></li>
                            <li><strong>LEDs de colores</strong></li>
                            <li><strong>Pulsadores</strong></li>
                            <li><strong>Sensor de luz (LDR)</strong></li>
                            <li><strong>Sensor de temperatura (TMP36 o NTC)</strong></li>
                            <li><strong>Cables de conexión (jumpers)</strong></li>
                        </ul>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

export default withPageAuthRequired(TicaPage, {
    returnTo: '/Tica',
});