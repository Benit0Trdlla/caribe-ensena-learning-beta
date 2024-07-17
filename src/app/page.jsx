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
      <div className="container px-1 py-5" id="instrucciones">
        <div className="row align-items-start">
          {/* CURSOS */}
          <div className="col-md-3">
            <div className="accordion" id="accordionExample1">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    CURSOS
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
                  <div className="accordion-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item"><a href="/" className="link-underline-light text-info" data-bs-toggle="modal" data-bs-target="#ModalOne">Enseñapaz</a></li>
                      <li className="list-group-item"><a href="/" className="link-underline-light text-info">Access to Training</a></li>
                      <li className="list-group-item"><a href="/" className="link-underline-light text-info">Derechos Humanos</a></li>
                      <li className="list-group-item"><a href="/" className="link-underline-light text-info">Robótica</a></li>
                      <li className="list-group-item"><a href="/" className="link-underline-light text-info">Educación Financiera</a></li>
                    </ul>
                  </div>
                  {/* <!-- Modal --> */}
                  <div className="modal fade" id="ModalOne" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5 fs-bold" id="exampleModalLabel">Enseñapaz</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Enseñapaz es un programa de formación en educación y cultura de paz dirigido a los docentes de nuestras escuelas,
                            centrándose en los territorios y contextos del Caribe Colombiano.
                            Este proyecto tiene como objetivo promover la paz en Colombia a través de los acuerdos de paz establecidos en 2016,
                            en consonancia con la Ley 1732 de 2015, que hace referencia a la cátedra de paz y los objetivos de desarrollo
                            sostenible con la Agenda 2030.
                          </p>
                          - Módulos: 4
                          <br />
                          <br />
                          <p>
                            - Duración de la formación: 2 horas por módulo, un total de 8 horas.
                            Se recomienda hacer cada módulo por semana, por lo tanto la duración es de un mes y medio aproximadamente.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ÁREAS */}
          <div className="col-md-3">
            <div className="accordion" id="accordionExample2">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    ÁREAS
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                  <div className="accordion-body">
                    <div className="dropdown mb-1">
                      <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <small className="text-muted">Ciencias sociales y humanas</small>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Enseñapaz</a></li>
                        <li><a className="dropdown-item" href="#">Derechos Humanos </a></li>
                      </ul>
                    </div>
                    <div className="dropdown mb-1">
                      <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <small className="text-muted">Tecnología</small>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Robótica</a></li>
                        <li><a className="dropdown-item" href="#">Access to training</a></li>
                      </ul>
                    </div>
                    <div className="dropdown mb-1">
                      <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <small className="text-muted">Artes</small>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                    <div className="dropdown mb-1">
                      <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <small className="text-muted">Ciencias ambientales</small>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                    <div className="dropdown mb-1">
                      <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <small className="text-muted" >
                          Ciencias exactas y <br />  educación financiera.
                        </small>
                      </button>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* CONVENIOS ORGANIZACIONES */}
          <div className="col-md-3">
            <div className="accordion" id="accordionExample3">
              <div className="accordion-item">
                <h4 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <small>CONVENIOS ORGANIZACIONES</small>
                  </button>
                </h4>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample3">
                  <div className="accordion-body">
                    <small>
                      Si eres una organización o universidad y deseas que tu curso, taller o diplomado se ofrezca desde nuestra plataforma
                      envíanos un correo a: <strong>e-learning@caribeensena.org</strong>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* INSTITUCIONES EDUCATIVAS */}
          <div className="col-md-3">
            <div className="accordion" id="accordionExample4">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <small>INSTITUCIONES EDUCATIVAS</small>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample4">
                  <div className="accordion-body">
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
