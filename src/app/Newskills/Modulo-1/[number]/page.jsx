import Header from "@/app/components/Modulos/Header";
import SectionNavigation from "@/app/components/Modulos/Secciones/SectionNavigation";
import Activities from "@/app/components/Modulos/Activities";
import VideoIframe from "@/app/components/Modulos/Secciones/VideoIframe";
import Buttons from "@/app/components/Modulos/Buttons";


export default function NewskillsPage({ params }) {
    const number = params.number
    const numInt = parseInt(number)

    return (
        <>
            <Header ImgUrl={"/Images/Logo_Cursos/NewSkills.png"} href="/Cursos" />
            <SectionNavigation CursoPath={"/Newskills/Modulo-1/"} />
            <div className="container">
                <div className="row d-flex align-items-center justify-content-center mt-3">
                    <div className="col-md-6 text-center">
                        <p>Ve el contenido del video</p>
                        {/* <FilePdf href={"https://drive.google.com/file/d/1LqWcqMKsoBJpa2dOJRyyp5EbuFXkDyZ5/preview"} />  */}
                        <VideoIframe href="https://www.youtube.com/embed/puCG51NX5sE?si=7lvUNfwIQMTS6Zr1" />
                        <Activities Enunciado="Actividad" />
                    </div>
                    <div className="col-md-6">
                        <p className="text-center fw-bold">
                            Titulo del contenido
                        </p>
                        <div className="overflow-auto" style={{ maxHeight: '540px' }}>
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
            </div>
            <Buttons NumInt={numInt} CursoPath={"/Newskills/Modulo-1/"} />
        </>
    )
}