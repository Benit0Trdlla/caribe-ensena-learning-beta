import { Header, Cursos } from "../components/CursosPage";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { getSession } from '@auth0/nextjs-auth0';

export const metadata = {
    title: "Cursos",
    description: "Plataforma e-learning 'Caribe Enseña Learning', desarrollada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.",
}

async function CursosPage() {
    const { user } = await getSession();
    return (
        <>
            <Header ImgUrl={"/Images/Logo/Header.png"} />
            <h1 className="display-6 font-weight-bold py-4 text-black text-center"><strong>¡Bienvenido {user.name}, aqui estan los cursos!</strong></h1>
            <Cursos />
        </>
    );
};

export default withPageAuthRequired(CursosPage, {
    returnTo: '/Cursos',
});
