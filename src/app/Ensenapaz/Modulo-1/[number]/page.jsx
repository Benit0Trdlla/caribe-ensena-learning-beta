import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
    BookSection,
    VideoSection,
    SectionNavigation,
    Alert
} from '../../../components/Modulos';

export function generateMetadata({ params }) {
    return {
        title: `Modulo 1 | Seccion ${params.number}`,
    };
}

function EnsenapazModuloPage({ params }) {
    // throw new Error('Error en la petición 23');
    
    const number = params.number
    const numInt = parseInt(number)
    const ComponentsSections = [<BookSection />, <BookSection />, <VideoSection />, <BookSection />, <VideoSection />, <VideoSection />, <BookSection />]
    
    return (
        <>
            <Alert seccionNumber={numInt}/>
            <SectionNavigation />
            {ComponentsSections[numInt - 1]}
        </>
    );
}

export default withPageAuthRequired(EnsenapazModuloPage, {
    returnTo: ({ params }) => `/Ensenapaz/Modulo-1/${params.number}`,
});