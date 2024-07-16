import Preguntas from "./Preguntas";
import PreguntasFrecuentesLista from "./PreguntasFrecuentesLista";
export default function PreguntasFrecuentesComponente() {
    return (
        <>
            <PreguntasFrecuentesLista MyImage={'/Images/Preguntas.png'}>
                <Preguntas flushheading={"flush-headingOne"} flushcollapse={"flush-collapseOne"} title={"¿Qué es CEL?"}>
                    CEL es Caribe Enseña Learning, una plataforma de e-learning contextualizada y enfocada, especialmente,
                    en las necesidades educativas de los docentes y estudiantes del Caribe colombiano.
                    Sin embargo, cualquier otra persona interesada puede hacer las formaciones.
                </Preguntas>
                <Preguntas flushheading={"flush-headingTwo"} flushcollapse={"flush-collapseTwo"} title={"¿Cuáles son las características y beneficios de CEL?"}>
                    CEL ofrece cursos y talleres gratuitos, certificados por asistencia y participación,
                    con reconocimiento oficial según convenios con entidades. En el futuro, se brindarán insignias digitales.
                    Es accesible desde dispositivos móviles y computadoras, y está diseñado para potenciar el aprendizaje formal y no formal.
                </Preguntas>
                <Preguntas flushheading={"flush-headingThree"} flushcollapse={"flush-collapseThree"} title={"¿Cómo puedo usar CEL?"}>
                    Para usar CEL, simplemente debes registrarte e hacer login con tu e-mail personal.
                    Desde allí, podrás acceder a todos los cursos y talleres disponibles en la plataforma.
                </Preguntas>
                <Preguntas flushheading={"flush-headingFour"} flushcollapse={"flush-collapseFour"} title={"¿CEL es gratis?"}>
                    Sí, CEL es completamente gratuito.
                </Preguntas>
                <Preguntas flushheading={"flush-headingFive"} flushcollapse={"flush-collapseFive"} title={"¿Quién puede usar CEL?"}>
                    CEL está disponible para docentes, estudiantes del Caribe colombiano y cualquier persona interesada en formar
                    sus conocimientos.
                </Preguntas>
                <Preguntas flushheading={"flush-headingSix"} flushcollapse={"flush-collapseSix"} title={"¿Obtengo certificación al terminar un curso o taller?"}>
                    Sí, al terminar un curso o taller obtendrás una certificación por asistencia y participación.
                    Algunas certificaciones tendrán reconocimiento oficial según convenios con entidades.
                </Preguntas>
                <Preguntas flushheading={"flush-headingSeven"} flushcollapse={"flush-collapseSeven"} title={"Si surge un problema técnico, ¿qué hago?"}>
                    Si uno de los cursos tiene un error o no puedes acceder, escribe a e-learningsoporte@caribeensena.org.
                </Preguntas>
                <Preguntas flushheading={"flush-headingNine"} flushcollapse={"flush-collapseNine"} title={"Si tengo alguna duda con respecto a un curso o taller, ¿dónde consulto?"}>
                    Para dudas sobre un curso o taller, envía un email con tu consulta y el nombre de la formación a e-learning@caribeensena.org.
                </Preguntas>
            </PreguntasFrecuentesLista>
        </>
    )
}