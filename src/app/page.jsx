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
  useEffect(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined') {

      const appId = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;

      if (!appId) {
        console.error('OneSignal App ID is not defined');
        return;
      }

      OneSignal.init({
        appId,
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
