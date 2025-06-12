'use client'
import { Header, Prelogin } from '../components/IngresarPage'
import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from 'next/navigation'
import Loading from './loading';
export default function IngresarPage() {
    const { user, error, isLoading } = useUser();
    if (error) return <div>{error.message}</div>;

    if (user) {
        redirect('/Cursos');
    }

    if (isLoading) return <Loading/>;
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