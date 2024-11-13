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
                <div className='d-flex flex-wrap flex-lg-row justify-content-center align-items-center mt-0 mt-lg-5 mt-md-5 mb-5'>
                    <CardCourses cursoName={'Ensenapaz'} ImgUrl={'Ensenapaz'}/>
                    <CardCourses cursoName={'New skills'} ImgUrl={'NewSkills'}/>
                </div>
            </div>
        </>
    );
};

export default withPageAuthRequired(ProgresoPage, {
    returnTo: '/Cursos/Progreso',
});
