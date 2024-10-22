import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { ProgressBar } from '@/app/components/Progreso/ProgressBar';


const ProgresoNewskillsPage = () => {
    return (
        <>
            <h1 className='text-center mt-3'>Este el progreso del curso Newskills</h1>
            <ProgressBar cursoName={'Newskills'} />
        </>
    )
}
export default withPageAuthRequired(ProgresoNewskillsPage, {
    returnTo: '/Newskills/Progreso',
});
