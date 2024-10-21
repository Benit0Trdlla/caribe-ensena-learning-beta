import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { ProgressBar } from '@/app/components/Progreso/ProgressBar';


function ProgresoNewskillsPage() {
    return (
        <>
            <h1 className='text-center mt-3'>Este el progreso del curso Newskills</h1>
            <ProgressBar />
        </>
    )
}
export default withPageAuthRequired(ProgresoNewskillsPage, {
    returnTo: '/Newskills/Progreso',
});
