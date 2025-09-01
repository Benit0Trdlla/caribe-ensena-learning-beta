import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
    BookSection,
    VideoSection,
    SectionNavigation,
    Alert
} from '../../../components/Modulos';

export async function generateStaticParams() {
    return [
        { number: '1' },
        { number: '2' },
        { number: '3' },
        { number: '4' },
        { number: '5' },
        { number: '6' },
        { number: '7' },
    ];
}

export function generateMetadata({ params }) {
    return {
        title: `Modulo 1 | Seccion ${params.number}`,
    };
}

function NewskillsModuloPage({ params }) {
    const number = params.number
    const numInt = parseInt(number)
    const ComponentsSections = [<BookSection />, <BookSection />, <VideoSection />, <BookSection />, <VideoSection />, <VideoSection />, <BookSection />]

    return (
        <>
            <Alert seccionNumber={numInt} urlImage={`/Images/Logo_Cursos/NewSkills-1.png`}/>
            <SectionNavigation />
            {ComponentsSections[numInt - 1]}
        </>
    )
}

export default withPageAuthRequired(NewskillsModuloPage, {
    returnTo: ({ params }) => `/Newskills/Modulo-1/${params.number}`,
});