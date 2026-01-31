import DataActivitiesContextProvider from "@/app/contexts/DataActivities-context";
import FinishSectionContextProvider from "../contexts/FinishSection-context";
import { Header } from "../components/ExplicacionCursos";

export default function RootLayout({ children }) {
    return (
        <div className="tica-background-root">
            <DataActivitiesContextProvider>
                <FinishSectionContextProvider>
                    <Header ImgUrl={"/Images/Logo_Cursos/Tica2.png"} href={"/Tica2"} indexMeet={3} />
                    {children}
                </FinishSectionContextProvider>
            </DataActivitiesContextProvider>
        </div>
    );
}
