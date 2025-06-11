import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
    BookSection,
    VideoSection,
    SectionNavigation,
    Alert
} from '../../../components/Modulos';

export function generateMetadata({ params }) {
    return {
        title: `Modulo 2 | Seccion ${params.number}`,
    };
}

function Tica2ModuloPage({ params }) {
    const number = params.number
    const numInt = parseInt(number)
    const ComponentsSections = [<BookSection />, <BookSection />, <VideoSection />, <BookSection />, <VideoSection />, <VideoSection />, <BookSection />]

    return (
        <>
            <Alert seccionNumber={numInt} />
            <SectionNavigation />
            {ComponentsSections[numInt - 1]}
        </>
    )
}

export default withPageAuthRequired(Tica2ModuloPage, {
    returnTo: ({ params }) => `/Tica2/Modulo-2/${params.number}`,
});