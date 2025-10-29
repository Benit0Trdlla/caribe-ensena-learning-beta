import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import InstallBootstrap from "./components/Bootstrap/InstallBootstrap";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Caribe Enseña Learning";
const APP_DEFAULT_TITLE = "Caribe Enseña Learning";
const APP_TITLE_TEMPLATE = "%s | Caribe Enseña Learning App";
const APP_DESCRIPTION = "Plataforma e-learning 'Caribe Enseña Learning', diseñada para ofrecer cursos, talleres y diplomados adaptados a las necesidades educativas de la región.";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    mobileWebAppCapable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  icons:{
    shortcut: "/Images/Logo/Pestaña.png",
    apple: "/Images/Logo/Pestaña.png",
    other: {
      url: "/Images/Logo/Pestaña.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
      </head>
      <UserProvider>
        <body className={inter.className}>
          <InstallBootstrap />
          {children}
          <Analytics />
        </body>
      </UserProvider>
    </html>
  );
}
