import Image from "next/image";
export default function LandingSection({ ImgUrl }) {
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 px-1 lh-lg text-wrap">
                    <Image className="img-fluid" src='/Images/Titulo.png' width={800} height={800} alt='Imagen Principal' />
                    <p>
                        Nuestra plataforma e-learning tiene un gran propósito, ofrecer cursos, talleres y diplomados relacionados
                        con las necesidades educativas de la región,  para potenciar el aprendizaje en contextos formales y no formales.
                        Esta herramienta educativa virtual se puede usar en computadoras y dispositivos móviles como teléfonos y tabletas,
                        lo que brinda a los usuarios acceso al contenido educativo en cualquier momento y lugar.
                    </p>
                    <p>
                        <strong>Caribe Enseña Learning</strong> ofrece a los estudiantes una amplia gama de recursos educativos, que incluyen:
                    </p>
                    <ul>
                        <li><strong>Materiales educativos interactivos:</strong></li>Lecciones multimedia que combinan texto, imágenes, audio y video para una experiencia de aprendizaje dinámica y envolvente.
                        <li><strong>Guías de estudio personalizadas:</strong></li> Documentos y recursos que ayudan a los estudiantes a comprender los temas de estudio, adaptados a diferentes niveles de conocimiento y estilos de aprendizaje.
                        <li><strong>Evaluaciones y cuestionarios:</strong></li> Herramientas de evaluación que permiten a los estudiantes medir su progreso y comprensión del material.
                        <li><strong>Biblioteca digital:</strong></li> Una amplia colección de libros, artículos y otros recursos académicos disponibles en todo momento.
                    </ul>
                </div>
                <div className="col-md-6 row mt-2">
                    <Image className="img-fluid" src={ ImgUrl } width={800} height={800} alt='Imagen Principal' />
                </div>
            </div>
        </div>
    )
}