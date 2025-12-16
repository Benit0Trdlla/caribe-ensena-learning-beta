import DataActivitiesContextProvider from "@/app/contexts/DataActivities-context";
import FinishSectionContextProvider from "../contexts/FinishSection-context";
import { Header } from "../components/ExplicacionCursos";

export default function RootLayout({ children }) {
    return (
        <DataActivitiesContextProvider>
            <FinishSectionContextProvider>
                <Header ImgUrl={"/Images/Logo_Cursos/ProyectoSteam.png"} href={"/ProyectoSteam"} indexMeet={14} />
                {children}
            </FinishSectionContextProvider>
        </DataActivitiesContextProvider>
    );
}
