import {
  Header,
  LandingSection,
  Donaciones,
  Footer,
  InstruccionesList,
  PreguntasFrecuentesComponente,
  ServicioComponente,
  AliadosSection
} from "./components/HomePage";

import OneSignalInitClient from "./components/OneSignalInitClient";

export default function Home() {

  return (
    <main>
      <Header imgUrl={"/Images/Logo/Header.png"} />
      <LandingSection ImgUrl="/Images/Home.png" />
      <ServicioComponente />
      <PreguntasFrecuentesComponente />
      <InstruccionesList />
      <Donaciones />
      <AliadosSection />
      <Footer />

      {/* Inicializa OneSignal en el cliente */}
      <OneSignalInitClient />
    </main>
  );
}
