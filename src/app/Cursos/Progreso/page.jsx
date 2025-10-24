import "./styles.css";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Header, CardCourses, ShowPuntaje } from '@/app/components/Progreso';
import { CURSOS } from "@/app/lib/consts";

export const metadata = {
    title: "Progreso General",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

function ProgresoPage() {
    return (
        <>
            <Header ImgUrl={"/Images/Logo/Header.png"} />
            <div className='container'>
                <ShowPuntaje />

                <div className='d-flex flex-wrap flex-lg-row justify-content-center align-items-center mt-0 mt-lg-0 mt-md-0 mb-5'>
                    {CURSOS.map((curso) => (
                        <CardCourses key={curso.Id} title={curso.Title} cursoName={curso.href} ImgUrl={curso.ImgUrl} />
                    ))}
                    {/* <CardCourses cursoName={'Ensenapaz'} ImgUrl={'Ensenapaz'} /> */}
                    {/* <CardCourses title={'Tica 2'} cursoName={'Tica2'} ImgUrl={'Tica2'} />
                    <CardCourses title={'New skills'} cursoName={'Newskills'} ImgUrl={'NewSkills'} />
                    <CardCourses title={'Poket'} cursoName={'Poket'} ImgUrl={'Poket'} />
                    <CardCourses title={'English Basic 1'} cursoName={'EnglishBasic1'} ImgUrl={'EnglishBasic1'} />
                    <CardCourses title={'English Basic 2'} cursoName={'EnglishBasic2'} ImgUrl={'EnglishBasic2'} />
                    <CardCourses title={'English Intermediate 1'} cursoName={'EnglishIntermediate1'} ImgUrl={'EnglishIntermediate1'} />
                    <CardCourses title={'English Intermediate 2'} cursoName={'EnglishIntermediate2'} ImgUrl={'EnglishIntermediate2'} />
                    <CardCourses title={'Python Project Pro'} cursoName={'PythonProjectPro'} ImgUrl={'PythonProjectPro'} /> */}
                </div>
            </div>
        </>
    );
};

export default withPageAuthRequired(ProgresoPage, {
    returnTo: '/Cursos/Progreso',
});
