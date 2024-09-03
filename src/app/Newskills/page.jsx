import Header from "../components/ExplicacionCursos/Header";
import RightColumn from "../components/ExplicacionCursos/RightColumn";
import LeftColumn from "../components/ExplicacionCursos/LeftColumn";
import AccordionModulos from "../components/ExplicacionCursos/AccordionModulos";
export default function NewskillsPage() {
    return (
        <>
            <Header ImgUrl={"/Images/Logo_Cursos/NewSkills.png"} href={"/Cursos"} />
            <div className="container">
                <div className="px-1 py-5 row">
                    <LeftColumn title={"New skills"} curso={"Newskills"}>
                        <AccordionModulos title={"Módulo 1: Bienvenida e Introducción a la Sostenibilidad (2H)"} collapseNumber={"collapseOne"}>
                            <hr />
                            <p>
                                En este módulo introductorio, te daremos la bienvenida al curso y te proporcionaremos las herramientas necesarias para tener una gran experiencia de aprendizaje. También abordaremos los conceptos básicos de sostenibilidad y la importancia de la economía verde en el contexto actual.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 2: Fundamentos de la Sostenibilidad (30H)"} collapseNumber={"collapseTwo"}>
                            <hr />
                            <p>
                                Aquí, profundizarás en los conceptos clave de sostenibilidad, incluyendo la economía verde, la gestión de recursos y las prácticas sostenibles. Este módulo proporcionará una base sólida que te permitirá entender los principios fundamentales que guían las iniciativas de sostenibilidad en todo el mundo.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 3: Trayectorias Profesionales en la Economía Verde (20H)"} collapseNumber={"collapseThree"}>
                            <hr />
                            <p>
                                Este módulo está diseñado para ayudarte a descubrir oportunidades profesionales dentro de la economía verde. Exploraremos diversas áreas como la energía renovable, la gestión de residuos y economía circular, así como la gestión del agua y saneamiento. Obtendrás una visión integral de las competencias necesarias para prosperar en estas trayectorias profesionales.
                            </p>
                        </AccordionModulos>
                        <AccordionModulos title={"Módulo 4: Transición Energética y Proyecto Aplicado (50H)"} collapseNumber={"collapseFour"}>
                            <hr />
                            <p>
                                En este módulo final, te centrarás en la transición energética, aprendiendo sobre las energías renovables y desarrollando habilidades esenciales para el sector. También trabajarás en un proyecto real de transición energética, donde podrás aplicar lo aprendido a lo largo del curso, poner a prueba tus habilidades y obtener experiencia práctica en el campo.
                            </p>
                        </AccordionModulos>
                    </LeftColumn>
                    <RightColumn>
                        <strong id="Presentación">¡Bienvenidos al curso "New Skills"!</strong>
                        <br /><br />
                        <p>
                            Este programa está diseñado para equiparte con las habilidades y conocimientos necesarios para destacarte
                            en la economía verde y sostenible. A lo largo del curso, explorarás conceptos fundamentales de sostenibilidad,
                            descubrirás trayectorias profesionales emergentes y adquirirás competencias esenciales en energías renovables y
                            gestión de recursos. "New Skills" te prepara para enfrentar los desafíos del futuro con confianza y creatividad,
                            ofreciéndote una experiencia de aprendizaje única y transformadora.
                        </p>
                        <strong id="Contenidos">Composición del curso</strong>
                        <br /><br />
                        <p>
                            El curso "New Skills" se compone de varios módulos cuidadosamente diseñados para guiarte en tu desarrollo
                            profesional hacia una carrera en la economía verde. Cada módulo está estructurado para proporcionar un
                            equilibrio entre teoría y práctica, permitiéndote aplicar inmediatamente lo que aprendes en situaciones
                            del mundo real.
                        </p>
                        <strong id="Recursos">Conoce los recursos disponibles</strong>
                        <br /><br />
                        <p>
                            Para aprovechar al máximo este curso, tendrás acceso a una variedad de recursos educativos, incluyendo lecturas,
                            videos interactivos, estudios de caso, y actividades prácticas. También contarás con el apoyo de expertos en
                            sostenibilidad que te guiarán a lo largo de tu proceso de aprendizaje, ofreciéndote retroalimentación y consejos
                            personalizados. Además, se te proporcionarán herramientas y materiales necesarios para completar el proyecto final
                            de transición energética, lo que te permitirá aplicar tus nuevas habilidades en un entorno real.
                        </p>
                    </RightColumn>
                </div>
            </div >
        </>
    )
}