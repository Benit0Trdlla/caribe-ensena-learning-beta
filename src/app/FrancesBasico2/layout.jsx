import DataActivitiesContextProvider from "@/app/contexts/DataActivities-context";
import FinishSectionContextProvider from "../contexts/FinishSection-context";
import { Header } from "../components/ExplicacionCursos";

export default function RootLayout({ children }) {
    return (
        <DataActivitiesContextProvider>
            <FinishSectionContextProvider>
                <Header ImgUrl={"/Images/Logo_Cursos/FrancesBasico2.png"} href={"/FrancesBasico2"} indexMeet={5} />
                {children}
            </FinishSectionContextProvider>
        </DataActivitiesContextProvider>
    );
}
