"use client";

import { useEffect } from 'react';
import OneSignal from 'react-onesignal';

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
  const id = process.env.ONESIGNAL_APP_ID;
  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined') {
      OneSignal.init({
        appId: '5893283d-691b-402a-956d-5e1469449f94',
        // You can add other initialization options here
        notifyButton: {
          enable: true,
        },
        // Uncomment the below line to run on localhost. See: https://documentation.onesignal.com/docs/local-testing
        // allowLocalhostAsSecureOrigin: true
      });
    }
  }, []);

  return (
    <main>
      {id}
      <Header imgUrl={"/Images/Logo/Header.png"} />
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
