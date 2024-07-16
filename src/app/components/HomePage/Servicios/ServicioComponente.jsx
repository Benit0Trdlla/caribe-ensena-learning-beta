import Cards from "./Cards";
import CardServicesList from "./CardServicesList";
export default function Servicios() {
    return (
        <CardServicesList>
            <Cards title={"PWA, o Progressive Web App"} href={"PWA"}>
                <strong>Es básicamente una aplicación web que se ve y se siente como una aplicación que descargas en tu teléfono</strong>,
                Puedes acceder a ella directamente desde tu navegador web. Ofrecen características como notificaciones instantáneas y un rendimiento rápido. ¡Es como tener lo mejor de ambos mundos!
            </Cards>
            <Cards title={"Interfaz Intuitiva y Responsive"} href={"Interfaz"}>
                Fácil, accesible e intuitivo describe una plataforma de aprendizaje innovadora. Con una interfaz amigable, acceso sin problemas desde dispositivos móviles y una navegación intuitiva, ofrece una experiencia de estudio fluida. Proporciona recursos educativos y herramientas de evaluación que mejoran el aprendizaje de los estudiantes, sin complicaciones.
            </Cards>
            <Cards title={"Cursos y talleres 100% gratuitos"} href={"Cursos"}>
                Nuestra plataforma ofrece cursos y talleres 100% gratuitos, especialmente dirigidos a docentes y estudiantes del Caribe colombiano. Cualquier persona interesada en potencializar sus conocimientos también puede acceder y beneficiarse de estos recursos educativos.
            </Cards>
            <Cards title={"Cursos certificados Para todos y todas "} href={"Certificados"}>
                La mayoría de las certificaciones serán por asistencia y participación. Según convenios con otras entidades, algunas tendrán reconocimiento oficial. En el futuro, ofreceremos insignias digitales para adjuntar a redes como LinkedIn, facilitando el reconocimiento de tu formación.
            </Cards>
        </CardServicesList>
    )
}