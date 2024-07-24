import Header from "../components/IngresarPage/Header";
import Prelogin from "../components/IngresarPage/Prelogin";
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation'
export default async function IngresarPage() {
    const { user } = await getSession();
    if (user) {
        redirect('/Cursos');
    }
    return (
        <>
            {!user &&
                <>
                    <Header ImgUrl="/Images/Logo/Header.png" href="/" />
                    <Prelogin ImgLeft="/Images/Donaciones.png" ImgTitle="/Images/Logo/Header.png" />
                </>
            }
        </>
    );
}