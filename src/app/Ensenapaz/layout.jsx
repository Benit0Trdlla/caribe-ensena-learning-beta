import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export const metadata = {
    title: "Enseñapaz",
    description: "Caribe Enseña Learning, developed by developers from Caribe Enseña",
    // manifest: "/manifest.json",
    // icons: {
    //     apple: "/icon.png",
    // },
    // themeColor: "#f69435",
};

export default withPageAuthRequired(function RootLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
})