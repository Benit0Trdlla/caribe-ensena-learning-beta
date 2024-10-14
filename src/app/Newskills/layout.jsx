import DataActivitiesContextProvider from "@/app/contexts/DataActivities-context";
import { Header } from "../components/ExplicacionCursos";

export default function RootLayout({ children }) {
    return (
        <DataActivitiesContextProvider>
            <Header ImgUrl={"/Images/Logo_Cursos/NewSkills.png"} href={"/Newskills"} indexMeet={1}/>
            {children}
        </DataActivitiesContextProvider>
    );
}