import DataActivitiesContextProvider from "@/app/contexts/DataActivities-context";
import FinishSectionContextProvider from "../contexts/FinishSection-context";
import { Header } from "../components/ExplicacionCursos";

export default function RootLayout({ children }) {
    return (
        <DataActivitiesContextProvider>
            <FinishSectionContextProvider>
                <Header ImgUrl={"/Images/Logo_Cursos/EnglishIntermediate2.png"} href={"/EnglishIntermediate2"} indexMeet={8} />
                {children}
            </FinishSectionContextProvider>
        </DataActivitiesContextProvider>
    );
}
