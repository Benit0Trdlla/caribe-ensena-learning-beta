import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Header } from '@/app/components/Progreso/Page/Header';
import { CardCourses } from '@/app/components/Progreso/Page/CardCourses';


export const metadata = {
    title: "Progreso General",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

function ProgresoPage() {
    return (
        <>
            <Header ImgUrl={"/Images/Logo/Header.png"} />
            <div className='container'>
                <div className='d-flex flex-wrap flex-lg-row justify-content-center align-items-center ms-3 mt-5'>
                    <CardCourses />
                    <CardCourses />
                </div>
            </div>
        </>
    );
};

export default withPageAuthRequired(ProgresoPage, {
    returnTo: '/Cursos/Progreso',
});
