// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, Header, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "Tica 2",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

export default function Tica2Page() {
    return (
        <>
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Tica 2"} curso={"Tica2"}>
                        <AccordionModulos title={"📡 Módulo 1: Comunicación Serial y Monitor Serial"} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                Entender la comunicación entre Arduino y la computadora para visualizar información en tiempo real e interactuar con el microcontrolador desde el teclado.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"⚙️ Módulo 2: Actuadores - Motores y Servos"} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                Comprender cómo controlar el movimiento utilizando distintos tipos de motores y servomotores con Arduino.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"🤝 Módulo 3: Proyectos Integradores - Mini Robots"} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                Integrar conocimientos previos para diseñar y construir un robot funcional que pueda seguir líneas o evitar obstáculos.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"🌐 Módulo 4: Conexiones Inalámbricas y Futuro Maker"} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                Explorar tecnologías inalámbricas como Bluetooth e IR, y desarrollar proyectos sociales y ambientales con robótica y trabajo colaborativo.
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación">
                            <strong>🎓 TICA 2 - Robótica con Arduino Avanzado</strong>
                        </p>
                        <p>🤖 ¿Qué es TICA 2?</p>
                        <p>
                            TICA 2 es la segunda parte del curso de introducción a la robótica y programación con Arduino. En esta etapa, nos enfocamos en conectar la teoría con proyectos reales, profundizando en el uso de sensores, comunicación serial, motores y tecnologías inalámbricas. El objetivo es que cada estudiante logre diseñar y construir prototipos funcionales que resuelvan problemas concretos en su entorno.
                        </p>
                        <p>🎯 ¿Qué aprenderás?</p>
                        <p> Durante este curso, desarrollarás habilidades en:</p>
                        <ul>
                            <li>Comunicación entre Arduino y una computadora usando el monitor serial.</li>
                            <li>Control de motores y servomotores para crear movimiento en tus proyectos.</li>
                            <li>Construcción de robots móviles que siguen líneas o evitan obstáculos.</li>
                            <li>Uso de Bluetooth y sensores inalámbricos para desarrollar soluciones interactivas.</li>
                            <li>Desarrollo de proyectos de impacto social y ambiental.</li>
                            <li>Trabajo en equipo, gestión de roles y presentación de proyectos.</li>
                        </ul>

                        <p id="Contenidos"><strong>Contenidos de los Módulos</strong></p>
                        <ul>
                            <li>
                                <strong>Módulo 1: Comunicación Serial y Monitor Serial</strong><br />
                                <p className='mb-3 mt-3'><strong>Objetivo:</strong> Comprender y aplicar la comunicación entre Arduino y otros dispositivos usando el monitor serial.</p>
                                <ul className='mb-3'>
                                    <li>Concepto de comunicación serial y su uso en Arduino.</li>
                                    <li>Uso del Monitor Serial del IDE de Arduino.</li>
                                    <li>Envío y recepción de datos entre Arduino y PC.</li>
                                    <li>Comandos básicos: Serial.begin(), Serial.print(), Serial.read().</li>
                                    <li>Prácticas interactivas con sensores y teclado.</li>
                                    <li>Actividades de integración y retos.</li>
                                </ul>
                            </li>

                            <li>
                                <strong>Módulo 2: Actuadores: Motores y Servos</strong> <br />
                                <p className='mb-3 mt-3'><strong>Objetivo:</strong> Conocer y controlar diferentes tipos de actuadores para implementar movimiento en proyectos robóticos.</p>
                                <ul className='mb-3'>
                                    <li>Tipos de motores: DC, servomotores y paso a paso.</li>
                                    <li>Control básico de motores con Arduino y componentes adicionales.</li>
                                    <li>Uso de la librería Servo.h para controlar servos.</li>
                                    <li>Integración de actuadores en prototipos funcionales.</li>
                                    <li>Desarrollo de proyectos como brazos robóticos o puertas automáticas.</li>
                                    <li>Evaluación por medio de proyectos anteriores.</li>
                                </ul>
                            </li>

                            <li>
                                <strong>Módulo 3: Proyectos Integradores: Mini Robots</strong><br />
                                <p className='mb-3 mt-3'><strong>Objetivo:</strong> Aplicar lo aprendido en proyectos robóticos que resuelvan problemas reales.</p>
                                <ul className='mb-3'>
                                    <li>Fundamentos de robótica móvil.</li>
                                    <li>Aplicaciones sociales y ambientales de la robótica.</li>
                                    <li>Uso de sensores para navegación y percepción del entorno.</li>
                                    <li>Diseño colaborativo de robots (chasis, sensores, programación).</li>
                                    <li>Programación de robots sigue-líneas y evita-obstáculos.</li>
                                    <li>Presentación de prototipos funcionales.</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Módulo 4: Conexiones Inalámbricas y Futuro Maker</strong><br />
                                <p className='mb-3 mt-3'><strong>Objetivo:</strong> Integrar tecnologías inalámbricas y fomentar el trabajo en equipo mediante el enfoque “maker”.</p>
                                <ul className='mb-3'>
                                    <li>Introducción a la comunicación Bluetooth con módulos como HC-05.</li>
                                    <li>Uso de sensores inalámbricos básicos (IR, RF).</li>
                                    <li>Control de dispositivos a distancia (como LEDs desde el celular).</li>
                                    <li>Desarrollo de proyectos orientados a soluciones comunitarias (semáforos, alarmas, riego automático, etc.).</li>
                                    <li>Fomento del trabajo colaborativo, liderazgo y documentación de proyectos.</li>
                                    <li>Presentación final de los proyectos.</li>
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
                            <li><strong>PC con IDE de Arduino instalado</strong></li>
                            <li><strong>Videos tutoriales y PDFs descargables</strong></li>
                        </ul>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(Tica2Page, {
//     returnTo: '/Tica2',
// });