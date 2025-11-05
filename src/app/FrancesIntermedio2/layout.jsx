import DataActivitiesContextProvider from "@/app/contexts/DataActivities-context";
import FinishSectionContextProvider from "../contexts/FinishSection-context";
import { Header } from "../components/ExplicacionCursos";

export default function RootLayout({ children }) {
    return (
        <DataActivitiesContextProvider>
            <FinishSectionContextProvider>
                <Header ImgUrl={"/Images/Logo_Cursos/FrancesIntermedio2.png"} href={"/FrancesIntermedio2"} indexMeet={13} />
                {children}
            </FinishSectionContextProvider>
        </DataActivitiesContextProvider>
    );
}
