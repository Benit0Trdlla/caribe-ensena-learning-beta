import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, Header, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "Poket",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

function PoketPage() {
    return (
        <>
            {/* <Header ImgUrl="/Images/Logo_Cursos/Ensenapaz.png" href="/Cursos" indexMeet={0} /> */}
            <div className="container">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Poket"} curso={"Poket"}>
                        <AccordionModulos title={"Módulo 1: Finanzas Divertidas: El Juego del Dinero"} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                Introducción a la educación financiera con actividades interactivas sobre ahorro, necesidades vs. deseos y metas financieras.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2: Desafío del Presupuesto"} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                Creación de un presupuesto personal a través de un juego de simulación donde los estudiantes deben administrar sus ingresos y gastos.
                            </p>

                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3: Invirtiendo como un Experto"} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                Introducción a inversiones con una competencia de "inversiones ficticias" para aprender sobre acciones, bonos y fondos mutuos.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4: Crédito y Deuda: El Reto del Buen Historial"} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                Actividades gamificadas donde los estudiantes toman decisiones sobre crédito y deuda para construir un buen historial financiero.
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación">
                            <strong>Presentación del curso</strong>
                        </p>
                        <p>
                            Este curso está diseñado para hacer de la educación financiera algo divertido, dinámico y práctico. Durante 3-4 meses, los estudiantes de 12 a 18 años participarán en experiencias gamificadas, retos interactivos y simulaciones para desarrollar habilidades financieras sólidas.
                        </p>
                        <p id="Contenidos">
                            <strong>Contenidos de los Módulos</strong>
                        </p>
                        <ul>
                            <li><strong>Módulo 1: Finanzas Divertidas: El Juego del Dinero</strong><br />
                                Los estudiantes aprenderán a diferenciar necesidades y deseos a través de una competencia de "compra inteligente". Crearán un mapa de metas financieras usando herramientas creativas como tableros visuales y stickers.                            </li>
                            <li><strong>Módulo 2: Desafío del Presupuesto</strong> <br />
                                Mediante una dinámica de "dinero virtual", los estudiantes aprenderán a gestionar ingresos y gastos. Participarán en un juego de roles donde deben administrar el presupuesto de un personaje ficticio con retos financieros inesperados.                            </li>
                            <li><strong>Módulo 3: Invirtiendo como un Experto</strong><br />
                                Los estudiantes serán "inversionistas" en un simulador de mercado bursátil con movimientos en tiempo real. Aprenderán sobre el interés compuesto y cómo hacer crecer su dinero mientras manejan riesgos de inversión.                            </li>
                            <li><strong>Módulo 4: Crédito y Deuda: El Reto del Buen Historial</strong> <br />
                                A través de un juego interactivo tipo "elige tu propia aventura", los estudiantes tomarán decisiones que impactan su puntaje crediticio. Aprenderán a manejar tarjetas de crédito, préstamos y deudas con ejemplos prácticos.                            </li>
                        </ul>
                        <p id='Recursos'>
                            <strong>Recursos del Curso</strong>
                        </p>
                        <ul>
                            <li><strong>Plataforma Virtual:</strong> Acceso a actividades interactivas, videos y desafíos en línea.</li>
                            <li><strong>Materiales Didácticos:</strong> Guías ilustradas, hojas de trabajo y juegos de mesa imprimibles.</li>
                            <li><strong>Simulaciones y Juegos:</strong> Herramientas interactivas como "escape rooms financieros" y "mercados de valores virtuales".</li>
                            <li><strong>Encuentros Presenciales:</strong> Espacios para aplicar conocimientos en actividades prácticas y competencias amistosas.</li>
                        </ul>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

export default withPageAuthRequired(PoketPage, {
    returnTo: '/Poket',
});