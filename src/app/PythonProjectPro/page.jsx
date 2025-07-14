import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, Header, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "Python Project Pro",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

export default function PythonProjectPro() {
    return (
        <>
            {/* <Header ImgUrl="/Images/Logo_Cursos/Ensenapaz.png" href="/Cursos" indexMeet={0} /> */}
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Python Project Pro"} curso={"PythonProjectPro"}>
                        <AccordionModulos title={"Módulo 1: Fundamentos de Python y lógica básica."} collapseNumber={"collapseOne"}>
                            <hr />
                            <p><strong>Objetivo:</strong> Conocer la sintaxis básica de Python y los principios de la lógica de programación.</p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2: Estructuras de datos y modularidad."} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p><strong>Objetivo:</strong> Profundizar en el manejo de datos y en la organización del código.</p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3: Programación orientada a objetos e interfaces gráficas."} collapseNumber={"collapseThree"}>
                            <hr />
                            <p><strong>Objetivo:</strong> Aprender los fundamentos de la programación orientada a objetos y crear aplicaciones visuales.</p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4: Proyectos integradores y habilidades avanzadas."} collapseNumber={"collapseFour"}>
                            <hr />
                            <p><strong>Objetivo:</strong> Aplicar todo lo aprendido en proyectos creativos y conocer herramientas más avanzadas.</p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación"><strong>Presentación del curso</strong></p>
                        <p>🎓 ¡Bienvenidos a PYTHON PROJECT PRO!</p>
                        <p>Este curso ha sido diseñado para que aprendas a programar desde cero en Python, uno de los lenguajes más poderosos y demandados en el mundo tecnológico.</p>
                        <p>Aquí no solo aprenderás teoría: crearás proyectos reales que te darán confianza y habilidades prácticas para tu camino como programador.</p>
                        <p>🎯 Objetivos del curso</p>
                        <p>✅ Entender y aplicar los fundamentos de programación en Python.</p>
                        <p>✅ Escribir código claro y funcional.</p>
                        <p>✅ Trabajar con estructuras de datos y construir programas más organizados.</p>
                        <p>✅ Diseñar aplicaciones interactivas y gráficas.</p>
                        <p>✅ Utilizar librerías externas para crear proyectos más complejos y útiles.</p>
                        <p>✅ Crear tus propios proyectos prácticos para tu portafolio.</p>

                        <p id="Contenidos"><strong>Contenidos de los Módulos</strong></p>
                        <ul>
                            <li>
                                <p><strong>Módulo 1: Fundamentos de Python y lógica básica</strong></p>
                                <ul className='mb-3'>
                                    <li>Sintaxis básica y tu primer programa.</li>
                                    <li>Variables, tipos de datos y operadores.</li>
                                    <li>Condicionales (if, else, elif).</li>
                                    <li>Bucles (for, while).</li>
                                    <li>Funciones básicas.</li>
                                    <li>Proyecto: Calculadora básica.</li>
                                </ul>
                                <p>En este módulo aprenderás a escribir tus primeras líneas de código y a pensar como programador.</p>
                            </li>
                            <li>
                                <p><strong>Módulo 2: Estructuras de datos y modularidad</strong></p>
                                <ul className='mb-3'>
                                    <li>Listas, tuplas y diccionarios.</li>
                                    <li>Manipulación de cadenas de texto.</li>
                                    <li>Funciones avanzadas (argumentos, recursividad).</li>
                                    <li>Manejo de errores y depuración.</li>
                                    <li>Creación de módulos.</li>
                                    <li>Uso de librerías estándar como random, datetime, math.</li>
                                    <li>Proyecto: Mini juego “Adivina el número” y gestor de tareas.</li>
                                </ul>
                                <p>Con este módulo podrás trabajar con datos de forma eficiente y escribir programas más organizados.</p>
                            </li>
                            <li>
                                <p><strong>Módulo 3: Programación orientada a objetos e interfaces gráficas</strong></p>
                                <ul className='mb-3'>
                                    <li>Clases, objetos, atributos y métodos.</li>
                                    <li>Herencia y encapsulamiento.</li>
                                    <li>Creación de ventanas y elementos gráficos básicos.</li>
                                    <li>Manejo de eventos e interacción con el usuario.</li>
                                    <li>Diseño de interfaces gráficas.</li>
                                    <li>Proyecto: Calculadora con interfaz gráfica.</li>
                                    <li>Proyecto: Juego interactivo (Tic Tac Toe o Pong).</li>
                                </ul>
                                <p>En este módulo comenzarás a desarrollar aplicaciones interactivas y atractivas.</p>
                            </li>

                            <li>
                                <p><strong>Módulo 4: Proyectos integradores y habilidades avanzadas</strong></p>
                                <ul className='mb-3'>
                                    <li>Uso de librerías externas (Pygame para juegos, Requests para trabajo web).</li>
                                    <li>Manejo de archivos (lectura, escritura, manipulación).</li>
                                    <li>Automatización básica (renombrar archivos, enviar correos simulados).</li>
                                    <li>Proyecto: Juego con niveles, puntajes y mejoras.</li>
                                    <li>Proyecto: Aplicación para manejo de datos (inventario o finanzas personales).</li>
                                    <li>Proyecto libre guiado.</li>
                                    <li>Presentación final y evaluación de proyectos.</li>
                                </ul>
                                <p>Este módulo te permitirá construir proyectos reales y demostrar tus habilidades.</p>
                            </li>
                        </ul>
                        <p id='Recursos'>🛠 <strong>Recursos del Curso</strong></p>
                        <p>✅ Videos prácticos paso a paso.</p>
                        <p>✅ Materiales de lectura (PDF/HTML) con ejemplos y ejercicios.</p>
                        <p>✅ Ejercicios prácticos en cada módulo.</p>
                        <p>✅ Proyectos guiados para reforzar tu aprendizaje.</p>
                        <p>✅ Libros recomendados:</p>
                        <ul>
                            <li>Ultimate Python: De cero a experto</li>
                            <li>Python para todos</li>
                            <li>Python para principiantes</li>
                            <li>Learn Python the Hard Way</li>
                        </ul>

                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(PythonProjectPro, {
//     returnTo: '/PythonProjectPro',
// });