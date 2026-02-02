import DataActivitiesContextProvider from "@/app/contexts/DataActivities-context";
import FinishSectionContextProvider from "../contexts/FinishSection-context";
import { Header } from "../components/ExplicacionCursos";

// Fondo de la página para la ruta /Tica
// Se aplica un contenedor con fondo responsive a todo el layout
export default function RootLayout({ children }) {
  return (
    <DataActivitiesContextProvider>
      <FinishSectionContextProvider>
        <Header ImgUrl={"/Images/Logo_Cursos/Tica.png"} href={"/Tica"} indexMeet={2} />
        {children}
      </FinishSectionContextProvider>
    </DataActivitiesContextProvider>
  );
}
