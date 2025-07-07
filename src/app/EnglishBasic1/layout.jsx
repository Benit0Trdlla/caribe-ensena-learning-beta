import DataActivitiesContextProvider from "@/app/contexts/DataActivities-context";
import FinishSectionContextProvider from "../contexts/FinishSection-context";
import { Header } from "../components/ExplicacionCursos";

export default function RootLayout({ children }) {
    return (
        <DataActivitiesContextProvider>
            <FinishSectionContextProvider>
                <Header ImgUrl={"/Images/Logo_Cursos/EnglishBasic1.png"} href={"/EnglishBasic1"} indexMeet={0} />
                {children}
            </FinishSectionContextProvider>
        </DataActivitiesContextProvider>
    );
}
