"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { GallerySection } from "@/components/gallery-section";
import { CountdownSection } from "@/components/countdown-section";
import { ContactFooter } from "@/components/contact-footer";
import { ContactModal } from "@/components/contact-modal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Header onContactOpen={() => setIsContactOpen(true)} />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <CountdownSection />
      </main>
      <ContactFooter />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}
