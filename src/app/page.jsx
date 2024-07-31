import Header from "./components/HomePage/Header";
import LandingSection from "./components/HomePage/LandingSection";
import ServicioComponente from "./components/HomePage/Servicios/ServicioComponente";
import PreguntasFrecuentesComponente from "./components/HomePage/PreguntasFrecuentes/PreguntasFrecuentesComponente";
import InstruccionesList from "./components/HomePage/Instrucciones/InstruccionesList";
import Donaciones from "./components/HomePage/Donaciones";
import Footer from "./components/HomePage/Footer/Footer";
export default function Home() {
  return (
    <main>
      <Header imgUrl={"/Images/Logo/Header.png"} />
      <LandingSection ImgUrl="/Images/Home1.png" />
      <ServicioComponente />
      <PreguntasFrecuentesComponente />
      <InstruccionesList />
      <Donaciones />
      <Footer />
    </main>
  );
}
