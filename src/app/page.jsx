import {
  Header,
  LandingSection,
  Donaciones,
  Footer,
  InstruccionesList,
  PreguntasFrecuentesComponente,
  ServicioComponente,
  AliadosSection,
  MarqueeCursos
} from "./components/HomePage";
import VideoIntro from "./components/VideoIntro/VideoIntro";

import OneSignalInitClient from "./components/OneSignalInitClient";

export default function Home() {

  return (
    <main>
      <VideoIntro >
        <Header imgUrl={"/Images/Logo/Header.png"} />
        <LandingSection ImgUrl="/Images/Home.png" />
        <ServicioComponente />
        <PreguntasFrecuentesComponente />
        <InstruccionesList />
        <MarqueeCursos />
        <Donaciones />
        <AliadosSection />
        <Footer />

        {/* Inicializa OneSignal en el cliente */}
        <OneSignalInitClient />
      </VideoIntro >
    </main>
  );
}
