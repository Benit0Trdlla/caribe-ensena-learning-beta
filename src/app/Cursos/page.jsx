import Header from "../components/CursosPage/Header";
import Certificado from "../components/Certificado";
import { getSession } from '@auth0/nextjs-auth0';
export default async function CursosPage() {
    const { user } = await getSession();
    return (
        user && (
            <>
                <Header ImgUrl={"/Images/Logo/Header.png"} />
                <h1 className="display-5 font-weight-bold py-4 text-black"><strong>{user.nickname}, Empieza la prueba!</strong></h1>
                <Certificado nombre={user.nickname}/>
            </>
        )
    );
}