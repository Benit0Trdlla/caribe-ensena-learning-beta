import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { getSession } from '@auth0/nextjs-auth0';
import Header from "../components/CursosPage/Header";
import Certificado from "../components/Certificado";
import Cursos from "../components/CursosPage/Cursos/Cursos";

async function CursosPage() {
    const { user } = await getSession();
    return (
        <>
            <Header ImgUrl={"/Images/Logo/Header.png"} />
            <h1 className="display-6 font-weight-bold py-4 text-black text-center"><strong>¡Bienvenido {user.nickname}, Empieza la prueba!</strong></h1>
            <Cursos />
            <Certificado nombre={user.nickname} />
        </>
    );
};

export default withPageAuthRequired(CursosPage, {
    returnTo: '/Cursos',
});
