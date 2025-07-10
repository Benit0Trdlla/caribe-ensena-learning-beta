import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const RootLayout = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export default withPageAuthRequired(RootLayout, {
    returnTo: '/EnglishIntermediate2/Progreso',
});