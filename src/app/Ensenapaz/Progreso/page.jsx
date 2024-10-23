import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { ProgressBar } from '@/app/components/Progreso/ProgressBar';


const ProgresoEnsenapazPage = () => {
    return (
        <>
            <h1 className='text-center mt-3'>Este el progreso del curso Ensenapaz</h1>
            <ProgressBar cursoName={'Ensenapaz'} />
        </>
    )
}
export default withPageAuthRequired(ProgresoEnsenapazPage, {
    returnTo: '/Ensenapaz/Progreso',
});
