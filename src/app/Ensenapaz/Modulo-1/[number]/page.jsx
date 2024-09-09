import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import SectionNavigation from "@/app/components/Modulos/Secciones/SectionNavigation";
import Header from "@/app/components/Modulos/Header";
import Buttons from "@/app/components/Modulos/Buttons";
import BookSection from "@/app/components/Modulos/BookSection";
import VideoSection from "@/app/components/Modulos/VideoSection";
import FinalExamSection from "@/app/components/Modulos/FinalExamSection";

function EnsenapazModuloPage({ params }) {
    const number = params.number
    const numInt = parseInt(number)
    const ComponentsSections = [<BookSection />, <BookSection />, <VideoSection />, <BookSection />, <VideoSection />, <VideoSection />, <FinalExamSection />]
    return (
        <>
            <Header ImgUrl="/Images/Logo_Cursos/Ensenapaz.png" href="/Cursos" />
            <SectionNavigation CursoPath={"/Ensenapaz/Modulo-1/"} />
            {ComponentsSections[numInt - 1]}
            <Buttons NumInt={numInt} CursoPath={"/Ensenapaz/Modulo-1/"} />
        </>
    );
}

export default withPageAuthRequired(EnsenapazModuloPage, {
    returnTo: ({ params }) => `/Ensenapaz/Modulo-1/${params.number}`,
});