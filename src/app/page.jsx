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
export default function Home() {
  
  const testURL = process.env.AUTH0_BASE_URL
  const testISSUERURL = process.env.AUTH0_ISSUER_BASE_URL
  

  return (
    <main>
      <Header imgUrl={"/Images/Logo/Header.png"} />
      {/* {testURL}
      {testISSUERURL} */}
      <LandingSection ImgUrl="/Images/Home.png" />
      <ServicioComponente />
      <PreguntasFrecuentesComponente />
      <InstruccionesList />
      <Donaciones />
      <AliadosSection />
      <Footer />
    </main>
  );
}
