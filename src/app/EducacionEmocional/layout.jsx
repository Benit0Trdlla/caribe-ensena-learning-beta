import DataActivitiesContextProvider from "@/app/contexts/DataActivities-context";
import FinishSectionContextProvider from "../contexts/FinishSection-context";
import { Header } from "../components/ExplicacionCursos";

export default function RootLayout({ children }) {
    return (
        <DataActivitiesContextProvider>
            <FinishSectionContextProvider>
                <Header ImgUrl={"/Images/Logo_Cursos/EducacionEmocional.png"} href={"/EducacionEmocional"} indexMeet={15} />
                {children}
            </FinishSectionContextProvider>
        </DataActivitiesContextProvider>
    );
}
