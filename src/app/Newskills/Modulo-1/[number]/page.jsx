import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Header from "@/app/components/Modulos/components/Header";
import SectionNavigation from "@/app/components/Modulos/components/SectionNavigation/SectionNavigation";
import Buttons from "@/app/components/Modulos/components/Buttons";

import BookSection from "@/app/components/Modulos/BookSection";
import VideoSection from "@/app/components/Modulos/VideoSection";
import FinalExamSection from "@/app/components/Modulos/Secciones/FinalExamSection";

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
            <Header ImgUrl={"/Images/Logo_Cursos/NewSkills.png"} href="/Cursos" />
            <SectionNavigation CursoPath={"/Newskills/Modulo-1/"} />
            {ComponentsSections[numInt - 1]}
            <Buttons NumInt={numInt} CursoPath={"/Newskills/Modulo-1/"} />
        </>
    )
}

export default withPageAuthRequired(NewskillsModuloPage, {
    returnTo: ({ params }) => `/Newskills/Modulo-1/${params.number}`,
});