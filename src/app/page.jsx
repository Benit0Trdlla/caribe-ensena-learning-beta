import Image from "next/image";
import { Header } from "./components/HomePage/Header";
import ServicioComponente from "./components/HomePage/Servicios/ServicioComponente";
import PreguntasFrecuentesComponente from "./components/HomePage/PreguntasFrecuentes/PreguntasFrecuentesComponente";
import Donaciones from "./components/HomePage/Donaciones";
import Footer from "./components/HomePage/Footer/Footer";
export default function Home() {
  return (
    <main>
      <Header />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 px-1">
            <Image className="img-fluid" src='/Images/Titulo.png' width={800} height={800} alt='Imagen Principal' />
            Nuestra plataforma e-learning tiene un gran propósito, ofrecer cursos, talleres y diplomados relacionados
            con las necesidades educativas de la región,  para potenciar el aprendizaje en contextos formales y no formales.
            Esta herramienta educativa virtual se puede usar en computadoras y dispositivos móviles como teléfonos y tabletas,
            lo que brinda a los usuarios acceso al contenido educativo en cualquier momento y lugar.
            <br />
            <br />
            <strong>Caribe Enseña Learning</strong> ofrece a los estudiantes una amplia gama de recursos educativos, que incluyen:
            <br />
            <br />
            <ul>
              <li><strong>Materiales educativos interactivos:</strong></li>Lecciones multimedia que combinan texto, imágenes, audio y video para una experiencia de aprendizaje dinámica y envolvente.
              <li><strong>Guías de estudio personalizadas:</strong></li> Documentos y recursos que ayudan a los estudiantes a comprender los temas de estudio, adaptados a diferentes niveles de conocimiento y estilos de aprendizaje.
              <li><strong>Evaluaciones y cuestionarios:</strong></li> Herramientas de evaluación que permiten a los estudiantes medir su progreso y comprensión del material.
              <li><strong>Biblioteca digital:</strong></li> Una amplia colección de libros, artículos y otros recursos académicos disponibles en todo momento.
            </ul>
          </div>
          <div className="col-md-6 row mt-2">
            <Image className="img-fluid" src='/Images/Home.png' width={800} height={800} alt='Imagen Principal' />
          </div>
        </div>
      </div>
      <ServicioComponente />
      <PreguntasFrecuentesComponente />
      <div class="container text-center px-1 py-5" id="instrucciones">
        <div class="row align-items-start">
          <div class="col-md-3">
            <div class="accordion" id="accordionExample1">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    CURSOS
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
                  <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="accordion" id="accordionExample2">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    ÁREAS
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="accordion" id="accordionExample3">
              <div class="accordion-item">
                <h4 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <small>CONVENIOS ORGANIZACIONES</small>
                  </button>
                </h4>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                  <div class="accordion-body">
                    <small>
                      Si eres una organización o universidad y deseas que tu curso, taller o diplomado se ofrezca desde nuestra plataforma
                      envíanos un correo a: <strong>e-learning@caribeensena.org</strong>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="accordion" id="accordionExample4">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <small>INSTITUCIONES EDUCATIVAS</small>
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample4">
                  <div class="accordion-body">
                    <small>
                      Si los alumnos de tu institución educativa quieren formarse en alguno de nuestros cursos,
                      talleres o programas ofrecidos envíanos un correo a: <br /> <strong>e-learning@caribeensena.org</strong>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Donaciones />
      <Footer />
    </main>
  );
}
