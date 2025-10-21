import DataActivitiesContextProvider from "@/app/contexts/DataActivities-context";
import FinishSectionContextProvider from "../contexts/FinishSection-context";
import { Header } from "../components/ExplicacionCursos";

export default function RootLayout({ children }) {
    return (
        <DataActivitiesContextProvider>
            <FinishSectionContextProvider>
                <Header ImgUrl={"/Images/Logo_Cursos/FrancesBasico1.png"} href={"/FrancesBasico1"} indexMeet={5} />
                {children}
            </FinishSectionContextProvider>
        </DataActivitiesContextProvider>
    );
}
