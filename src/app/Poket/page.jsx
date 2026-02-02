// import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccordionModulos, Header, LeftColumn, RightColumn } from "../components/ExplicacionCursos";

export const metadata = {
    title: "Poket",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

export default function PoketPage() {
    return (
        <>
            {/* <Header ImgUrl="/Images/Logo_Cursos/Ensenapaz.png" href="/Cursos" indexMeet={0} /> */}
            <div className="container poket-background-root">
                <div className="px-0 px-md-1 py-0 py-md-5 row">
                    <LeftColumn title={"Poket"} curso={"Poket"}>
                        <AccordionModulos title={"Módulo 1: El Dinero y el Ahorro."} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                Este módulo introduce los conceptos fundamentales del dinero, explicando qué es, sus tipos (incluido el "dinero plástico" como tarjetas de crédito y débito), su función como medio de intercambio, unidad de cuenta y reserva de valor, y por qué es un recurso escaso que debe ser bien usado. Se profundiza en el ahorro, definiéndolo como guardar parte de los ingresos para el futuro, destacando su importancia para metas y emergencias.
                            </p>
                            <p>
                                Se presentan principios guía como "pagarse a sí mismo" primero y la relevancia del hábito de ahorrar. También se cubre la distinción entre necesidades y deseos, los conceptos de bienes y servicios, la idea de una "sociedad de consumo" versus un "consumo inteligente", cómo definir y planificar metas financieras, y estrategias para ahorrar con éxito como tener un compañero de ahorro o convertir precios en tiempo de trabajo. Se diferencian el ahorro informal y formal, señalando las ventajas de las instituciones financieras reguladas.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2: Desafío del Presupuesto."} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                Este módulo se centra en la herramienta clave para la administración del dinero: el presupuesto. Se define qué es y por qué es fundamental para la planificación y la toma de decisiones económicas. Se detallan sus tres elementos básicos: el ingreso, el ahorro y el consumo. Se presenta la fórmula sencilla INGRESO = AHORRO + CONSUMO.
                            </p>
                            <p>
                                El contenido explica cómo elaborar un presupuesto, incluyendo sumar ingresos, identificar y clasificar gastos (fijos y variables) y comparar ingresos con gastos para ajustar y determinar el ahorro o dinero disponible. Se discuten errores comunes al manejar dinero, como no tener un fondo de emergencias, mal uso de tarjetas de crédito, gastos hormiga, no hacer un presupuesto y no ahorrar desde temprano. Se introduce la regla 50/30/20 como una forma sencilla de distribuir el ingreso neto. Finalmente, se explican los costos fijos (independientes de la producción/consumo) y variables (que cambian con la producción/consumo) usando el ejemplo de una panadería.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3: Aprendiendo sobre inversión."} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                Este módulo va más allá del ahorro y explora la inversión como forma de poner el dinero a trabajar para que crezca. Se diferencia claramente el ahorro (dinero estable, poco interés) de la inversión (valor variable, posibilidad de mayor rentabilidad, mayor riesgo). Se presentan instrumentos básicos de inversión como CDTs (rentabilidad fija, menor riesgo), fondos de inversión (dinero administrado por expertos, accesible con poco capital), acciones (ser dueño de parte de una empresa, mayor riesgo para mayores ganancias) y criptomonedas (definidas como medio digital de intercambio). Se enfatiza la importancia de informarse, considerar plazo, riesgo y rentabilidad antes de invertir.
                            </p>
                            <p>
                                Un tema importante es la educación como una inversión a largo plazo, destacando sus retornos económicos individuales y sociales y cómo abre oportunidades y reduce la desigualdad. También se abordan las cesantías como un beneficio laboral cuyo objetivo principal es el auxilio por desempleo, pero que también pueden usarse para educación y vivienda, y cómo se invierten en fondos. Se exploran los tipos de inversiones en una empresa (por tiempo, activo, finalidad, relación) y los elementos comunes de una inversión (desembolso inicial, duración, flujos netos de caja, valor residual). Finalmente, se introduce la idea de invertir con conciencia y la Economía del Bien Común, donde el dinero es un medio para el bienestar colectivo y la protección del planeta, alineándose con los Objetivos de Desarrollo Sostenible (ODS).
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4: Crédito y Deuda: El Reto del Buen Historial."} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                Este módulo aborda el crédito, definiéndolo como un préstamo de dinero que debe devolverse en el futuro, generalmente con un costo (interés). Se diferencia entre crédito formal (instituciones vigiladas, mayor seguridad, historial crediticio) y crédito informal ("gota a gota", caro, riesgoso, sin protección). Se explican factores clave para usar el crédito responsablemente, como calcular la capacidad de pago, entender la tasa de interés y el plazo, verificar quién presta y leer el contrato.
                            </p>
                            <p>
                                Se advierte sobre el sobreendeudamiento, sus síntomas y consecuencias. Se introduce el concepto de violencia económica como el mal uso del dinero que causa daño (contra hijos, uno mismo, padres, pareja) y cómo prevenirla. El módulo también explora la relación del crédito con la Economía Circular en América Latina, mencionando cómo el financiamiento puede impulsar proyectos sostenibles y los desafíos existentes. Finalmente, se introduce el juego de mesa "Poket" como una herramienta gamificada para practicar conceptos como gestión de ingresos, pagos, ahorro, inversión, deuda y toma de decisiones financieras.
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <p id="Presentación">
                            <strong>Presentación del curso</strong>
                        </p>
                        <p>
                            El curso "POKET" busca que la educación financiera sea una experiencia divertida, dinámica y práctica. Está diseñado para jóvenes de 12 a 18 años y tiene una duración estimada de 3 a 4 meses. A través de métodos como experiencias gamificadas, retos interactivos y simulaciones, se propone ayudar a los estudiantes a desarrollar habilidades financieras sólidas.
                        </p>
                        <p id="Contenidos">
                            <strong>Contenidos de los Módulos</strong>
                        </p>
                        <ul>
                            <li>
                                <p>
                                    <strong>Módulo 1: El dinero y el ahorro</strong>
                                </p>
                                <p className='mb-0'>Incluye:</p>
                                <ul className='mb-3'>
                                    <li>Definición y tipos de dinero (efectivo y "dinero plástico").</li>
                                    <li>El dinero como recurso escaso y la importancia de su buen uso.</li>
                                    <li>Definición y principios del ahorro (pagarse a sí mismo, el hábito, el propósito).</li>
                                    <li>Diferencias y características del ahorro informal y formal, destacando la seguridad y ventajas del ahorro formal.</li>
                                    <li>La distinción crucial entre necesidades y deseos.</li>
                                    <li>Definición y características de bienes y servicios.</li>
                                    <li>Conceptos de sociedad de consumo y consumo inteligente, incluyendo pasos para una compra inteligente.</li>
                                    <li>Cómo definir metas financieras (concretas, alcanzables, con tiempo definido).</li>
                                    <li>Elaboración de un plan de ahorro para alcanzar metas, calculando cuánto ahorrar periódicamente.</li>
                                    <li>Consejos prácticos para ahorrar con éxito (compañero de ahorro, convertir precios en tiempo de trabajo, rodearse de personas con mismas metas, tener un plan para dinero extra, ganar dinero extra para ahorrar).</li>
                                </ul>
                            </li>
                            <li>
                                <p>
                                    <strong>Módulo 2: Desafío del Presupuesto</strong>
                                </p>
                                <p className='mb-0'>Incluye:</p>
                                <ul className='mb-3'>
                                    <li>Definición y propósito de un presupuesto como herramienta esencial para administrar el dinero.</li>
                                    <li>Ventajas de usar un presupuesto (guía, conciencia del límite, identificación de lo importante, planificación futura).</li>
                                    <li>Los tres elementos básicos del presupuesto: Ingreso, Ahorro y Consumo.</li>
                                    <li>La fórmula INGRESO = AHORRO + CONSUMO.</li>
                                    <li>Tipos de gastos: fijos y variables.</li>
                                    <li>Pasos para elaborar un presupuesto (sumar ingresos, clasificar gastos, comparar ingresos y gastos).</li>
                                    <li>La regla 50/30/20 para distribuir el ingreso neto en necesidades, deseos y ahorro/pago de deudas.</li>
                                    <li>Errores comunes al manejar dinero (no tener fondo de emergencias, mal uso de tarjetas de crédito, gastos hormiga, no presupuestar, no ahorrar temprano).</li>
                                    <li>Entendimiento de costos fijos y variables con ejemplo.</li>
                                </ul>
                            </li>
                            <li>
                                <p>
                                    <strong>Módulo 3: Aprendiendo sobre  inversión</strong>
                                </p>
                                <p className='mb-0'>Incluye:</p>
                                <ul className='mb-3'>
                                    <li>Diferencia fundamental entre ahorro e inversión.</li>
                                    <li>Instrumentos básicos de inversión: CDT, Fondos de inversión, Acciones, Criptomonedas.</li>
                                    <li>Claves para evaluar una inversión: Plazo, Riesgo, Rentabilidad.</li>
                                    <li>La educación como una inversión individual y socialmente rentable a largo plazo.</li>
                                    <li>Las cesantías: objetivo principal (desempleo) y otros usos permitidos (educación, vivienda), e inversión en fondos.</li>
                                    <li>Tipos de inversiones en la empresa (por tiempo, activo, finalidad, relación).</li>
                                    <li>Elementos comunes de una inversión (desembolso inicial, duración, flujos netos de caja, valor residual).</li>
                                    <li>La Economía del Bien Común: el dinero como medio para el bienestar social, valores (colaboración, respeto, solidaridad, etc.), bienes comunes (naturales, sociales, conocimiento).</li>
                                    <li>Invertir con conciencia y para el bien común: usar el dinero para beneficiar a muchos y cuidar el planeta, contribución a los ODS.</li>
                                    <li>Microfinanciación de proyectos sostenibles.</li>
                                </ul>
                            </li>

                            <li>
                                <p>
                                    <strong>Módulo 4: Crédito y Deuda: El Reto del Buen Historial</strong>
                                </p>
                                <p className='mb-0'>Incluye:</p>
                                <ul className='mb-3'>
                                    <li>Concepto de crédito como préstamo de dinero a devolver con interés.</li>
                                    <li>Usos útiles del crédito (negocio, emergencia, educación, vivienda).</li>
                                    <li>Diferencias, ventajas y riesgos del crédito formal vs. informal ("gota a gota").</li>
                                    <li>Factores clave para el uso responsable del crédito (capacidad de pago, tasa de interés, plazo, verificar prestador, leer contrato).</li>
                                    <li>Importancia de tener un buen historial crediticio y cumplir pagos.</li>
                                    <li>Sobreendeudamiento: síntomas (no saber cuánto se debe, no ahorrar, pedir préstamos para pagar viejos, preocupación) y consecuencias (estrés, pérdida, recurrir a informales).</li>
                                    <li>Violencia económica: definición (mal uso del dinero que causa daño) y tipos (contra hijos, uno mismo, padres, pareja).</li>
                                    <li>Prevención del sobreendeudamiento y la violencia económica (educación financiera, presupuesto, hablar en familia, buscar ayuda, autonomía económica).</li>
                                    <li>La relación entre crédito y Economía Circular en América Latina, incluyendo mecanismos de financiamiento (préstamos, fondos no reembolsables, híbrido, garantías, asistencia técnica) y sectores con potencial (agroindustria, construcción, turismo, plásticos).</li>
                                    <li>Introducción y funcionamiento del juego de mesa "Poket" como herramienta de aprendizaje gamificado sobre gestión financiera.</li>
                                </ul>
                            </li>
                        </ul>
                        <p id='Recursos'>
                            <strong>Recursos del Curso</strong>
                        </p>
                        <p>Los recursos que se emplearán en el curso "Poket" son:</p>
                        <ul>
                            <li><strong>Plataforma Virtual:</strong> Ofrece acceso a actividades interactivas, videos y desafíos en línea.</li>
                            <li><strong>Materiales Didácticos:</strong> Incluyen guías ilustradas, hojas de trabajo y juegos de mesa imprimibles.</li>
                            <li><strong>Simulaciones y Juegos:</strong> Herramientas interactivas como "escape rooms financieros" y "mercados de valores virtuales".</li>
                            <li><strong>Encuentros Presenciales:</strong> Espacios diseñados para aplicar conocimientos en actividades prácticas y competencias amistosas. También se incluyen dinámicas como "El Gran Reto del Ahorro", "Bolsa de Valores en Vivo", "Construye tu Score de Crédito" y el juego “Poket” en tiempo real, cada una con enfoques interactivos y lúdicos.</li>
                        </ul>
                    </RightColumn>
                </div>
            </div>
        </>
    );
}

// export default withPageAuthRequired(PoketPage, {
//     returnTo: '/Poket',
// });