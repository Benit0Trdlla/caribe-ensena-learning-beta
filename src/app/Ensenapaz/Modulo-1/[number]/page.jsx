import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
    BookSection,
    VideoSection,
    FinalExamSection,
    Header,
    Buttons,
    SectionNavigation,
    Alert
} from '../../../components/Modulos';

export function generateMetadata({ params }) {
    return {
        title: `Modulo 1 | Seccion ${params.number}`,
    };
}

function EnsenapazModuloPage({ params }) {
    const number = params.number
    const numInt = parseInt(number)
    const ComponentsSections = [<BookSection />, <BookSection />, <VideoSection />, <BookSection />, <VideoSection />, <VideoSection />, <BookSection />]
    
    return (
        <>
            {/* <Header ImgUrl="/Images/Logo_Cursos/Ensenapaz.png" href="/Cursos" indexMeet={0}/> */}
            <Alert seccionNumber={numInt}/>
            <SectionNavigation />
            {ComponentsSections[numInt - 1]}
            {/* <Buttons NumInt={numInt} CursoPath={"/Ensenapaz/Modulo-1/"} /> */}
        </>
    );
}

export default withPageAuthRequired(EnsenapazModuloPage, {
    returnTo: ({ params }) => `/Ensenapaz/Modulo-1/${params.number}`,
});