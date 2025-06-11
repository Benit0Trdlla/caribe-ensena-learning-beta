import "./styles.css";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Header, CardCourses } from '@/app/components/Progreso';

export const metadata = {
    title: "Progreso General",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

function ProgresoPage() {
    return (
        <>
            <Header ImgUrl={"/Images/Logo/Header.png"} />
            <div className='container'>
                <div className="d-flex justify-content-center">
                    <div className='shadow-sm ms-lg-auto p-3 m-2 border border-secondary-subtle rounded position-responsive'>
                        <p className='fs-5 mb-0'>Puntos obtenidos: <span>100</span></p>
                    </div>
                </div>

                <div className='d-flex flex-wrap flex-lg-row justify-content-center align-items-center mt-0 mt-lg-0 mt-md-0 mb-5'>
                    <CardCourses cursoName={'Tica'} ImgUrl={'Tica'} />
                    <CardCourses cursoName={'Tica2'} ImgUrl={'Tica2'} />
                    {/* <CardCourses cursoName={'Ensenapaz'} ImgUrl={'Ensenapaz'} /> */}
                    <CardCourses cursoName={'New skills'} ImgUrl={'NewSkills'} />
                    <CardCourses cursoName={'Poket'} ImgUrl={'Poket'} />
                </div>
            </div>
        </>
    );
};

export default withPageAuthRequired(ProgresoPage, {
    returnTo: '/Cursos/Progreso',
});
