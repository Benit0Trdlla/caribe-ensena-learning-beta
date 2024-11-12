import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const RootLayout = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export default withPageAuthRequired(RootLayout, {
    returnTo: '/Newskills/Progreso',
});