import SectionNavigation from "@/app/components/Modulos/Secciones/SectionNavigation";
import Header from "@/app/components/Modulos/Header";
import FilePdf from '@/app/components/Modulos/Secciones/FilePdf';
import Buttons from "@/app/components/Modulos/Buttons";
import VideoIframe from "@/app/components/Modulos/Secciones/VideoIframe";
export default function SectionsPage({ params }) {
    const number = params.number
    const numInt = parseInt(number)

    return (
        <>
            <Header ImgUrl="/Images/Logo_Cursos/Ensenapaz.png" href="/Cursos" />
            <SectionNavigation CursoPath={"/Ensenapaz/Modulo-1/"} />
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center mt-3">
                    <div className="col-md-6 px-3 text-center">
                        Leer el siguiente PDF <br />
                        La seccion es: {number}
                        {/* <FilePdf href={"https://drive.google.com/file/d/1LqWcqMKsoBJpa2dOJRyyp5EbuFXkDyZ5/preview"} /> */}
                        <VideoIframe href="https://www.youtube.com/embed/puCG51NX5sE?si=7lvUNfwIQMTS6Zr1" />
                        <h6 className="text-center mt-3">
                            <p>eJEMPLEO</p>
                        </h6>
                        <div className="form-check">
                            <input
                                className="form-check-input border border-secondary border-2"
                                type="radio"
                                name="flexRadioDefault"
                                value="option1"
                            />
                            <label className="form-check-label">
                                OPcion1
                            </label>
                        </div>
                        <div className="form-check" >
                            <input
                                className="form-check-input border border-secondary border-2"
                                type="radio"
                                name="flexRadioDefault"
                                value="option1"
                            />
                            <label className="form-check-label">
                                OPcion2
                            </label>
                        </div>
                        <div className="form-check" >
                            <input
                                className="form-check-input border border-secondary border-2"
                                type="radio"
                                name="flexRadioDefault"
                                value="option1"
                            />
                            <label className="form-check-label">
                                OPcion3
                            </label>
                        </div>
                        <div className="form-check" >
                            <input
                                className="form-check-input border border-secondary border-2"
                                type="radio"
                                name="flexRadioDefault"
                                value="option1"
                            />
                            <label className="form-check-label">
                                label
                            </label>
                        </div>
                    </div>
                    <div className="col-md-6 row" >
                        <p className="text-center fw-bold">
                            Titulo del contenido
                        </p>
                        <div className="overflow-auto" style={{ maxHeight: '400px' }}>
                            <p>
                                rem ipsum dolor sit amet consectetur, adipisicing elit. Quia itaque consequatur iusto esse nobis ipsa aliquam aut deleniti labore hic ullam eaque nam sit rerum id debitis exercitationem, temporibus laborum?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem excepturi reprehenderit est facilis perspiciatis quos blanditiis aperiam dolorem quis praesentium iusto cupiditate, eos sed, a eligendi distinctio debitis exercitationem quam.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati aperiam laboriosam totam sapiente corporis praesentium? Soluta suscipit repellat assumenda nostrum debitis architecto earum beatae. Nesciunt cupiditate nemo quasi officiis!
                                Lore
                                rem ipsum dolor sit amet consectetur, adipisicing elit. Quia itaque consequatur iusto esse nobis ipsa aliquam aut deleniti labore hic ullam eaque nam sit rerum id debitis exercitationem, temporibus laborum?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem excepturi reprehenderit est facilis perspiciatis quos blanditiis aperiam dolorem quis praesentium iusto cupiditate, eos sed, a eligendi distinctio debitis exercitationem quam.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati aperiam laboriosam totam sapiente corporis praesentium? Soluta suscipit repellat assumenda nostrum debitis architecto earum beatae. Nesciunt cupiditate nemo quasi officiis!
                                Lore
                                rem ipsum dolor sit amet consectetur, adipisicing elit. Quia itaque consequatur iusto esse nobis ipsa aliquam aut deleniti labore hic ullam eaque nam sit rerum id debitis exercitationem, temporibus laborum?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem excepturi reprehenderit est facilis perspiciatis quos blanditiis aperiam dolorem quis praesentium iusto cupiditate, eos sed, a eligendi distinctio debitis exercitationem quam.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati aperiam laboriosam totam sapiente corporis praesentium? Soluta suscipit repellat assumenda nostrum debitis architecto earum beatae. Nesciunt cupiditate nemo quasi officiis!
                                Lore
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia itaque consequatur iusto esse nobis ipsa aliquam aut deleniti labore hic ullam eaque nam sit rerum id debitis exercitationem, temporibus laborum?
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem excepturi reprehenderit est facilis perspiciatis quos blanditiis aperiam dolorem quis praesentium iusto cupiditate, eos sed, a eligendi distinctio debitis exercitationem quam.
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione obcaecati aperiam laboriosam totam sapiente corporis praesentium? Soluta suscipit repellat assumenda nostrum debitis architecto earum beatae. Nesciunt cupiditate nemo quasi officiis!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, explicabo. Deserunt velit minima voluptas magnam modi veniam vero culpa libero harum minus, adipisci voluptate veritatis error pariatur aperiam inventore dicta.
                            </p>
                        </div>
                    </div>
                </div>
                <Buttons NumInt={numInt} />
            </div>
            <style>
                {`
                                    /* Estilos para la barra de desplazamiento */
                                    .overflow-auto::-webkit-scrollbar {
                                        width: 8px;
                                    }

                                    /* Estilos para el thumb de la barra de desplazamiento */
                                    .overflow-auto::-webkit-scrollbar-thumb {
                                        background-color: #888;
                                        border-radius: 4px;
                                    }

                                    /* Estilos para el thumb de la barra de desplazamiento al pasar el cursor */
                                    .overflow-auto::-webkit-scrollbar-thumb:hover {
                                        background-color: #555;
                                    }
                                `}
            </style>
        </>
    );
}
