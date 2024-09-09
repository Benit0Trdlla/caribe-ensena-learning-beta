import SectionNavigation from "@/app/components/Modulos/Secciones/SectionNavigation";
import Header from "@/app/components/Modulos/Header";
import Buttons from "@/app/components/Modulos/Buttons";
import BookSection from "@/app/components/Modulos/BookSection";
import VideoSection from "@/app/components/Modulos/VideoSection";
import FinalExamSection from "@/app/components/Modulos/FinalExamSection";


export default function NewskillsModuloPage({ params }) {
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