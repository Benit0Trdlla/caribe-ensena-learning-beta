import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Buttons from '../components/Modulos/Buttons';
export const metadata = {
    title: "Ensenapaz - Caribe Enseña Learning",
    description: "Caribe Enseña Learning, developed by developers from Caribe Enseña",
    // manifest: "/manifest.json",
    // icons: {
    //     apple: "/icon.png",
    // },
    // themeColor: "#f69435",
};

export default withPageAuthRequired(function RootLayout({ children, params }) {

    return (
        <>
            {children}
        </>
    );
})