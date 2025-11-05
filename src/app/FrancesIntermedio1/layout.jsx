import DataActivitiesContextProvider from "@/app/contexts/DataActivities-context";
import FinishSectionContextProvider from "../contexts/FinishSection-context";
import { Header } from "../components/ExplicacionCursos";

export default function RootLayout({ children }) {
    return (
        <DataActivitiesContextProvider>
            <FinishSectionContextProvider>
                <Header ImgUrl={"/Images/Logo_Cursos/FrancesIntermedio1.png"} href={"/FrancesIntermedio1"} indexMeet={12} />
                {children}
            </FinishSectionContextProvider>
        </DataActivitiesContextProvider>
    );
}
