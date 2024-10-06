import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
    BookSection,
    VideoSection,
    FinalExamSection,
    Header,
    Buttons,
    SectionNavigation
} from '../../../components/Modulos';

export function generateMetadata({ params }) {
    return {
        title: `Modulo 1 | Seccion ${params.number}`,
    };
}
function NewskillsModuloPage({ params }) {
    const number = params.number
    const numInt = parseInt(number)
    const ComponentsSections = [<BookSection />, <BookSection />, <VideoSection />, <BookSection />, <VideoSection />, <VideoSection />, <FinalExamSection />]

    return (
        <>
            <Header ImgUrl={"/Images/Logo_Cursos/NewSkills.png"} href="/Cursos" indexMeet={1} />
            <SectionNavigation CursoPath={"/Newskills/Modulo-1/"} />
            {ComponentsSections[numInt - 1]}
            <Buttons NumInt={numInt} CursoPath={"/Newskills/Modulo-1/"} />
        </>
    )
}

export default withPageAuthRequired(NewskillsModuloPage, {
    returnTo: ({ params }) => `/Newskills/Modulo-1/${params.number}`,
});