"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary" />
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/[0.02] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-foreground/[0.015] blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <p
          className={`text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground transition-all duration-1000 ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          Model United Nations Conference
        </p>

        <h1
          className={`font-serif text-[clamp(4rem,15vw,14rem)] font-black leading-[0.85] tracking-tighter text-foreground transition-all duration-1000 delay-200 ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          BALMUN
          <span className="block text-[0.6em] font-light tracking-tight text-muted-foreground">
            26
          </span>
        </h1>

        <p
          className={`max-w-md text-base leading-relaxed text-muted-foreground transition-all duration-1000 delay-500 ${
            mounted
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          We are shaping the future of diplomacy, leadership, and international relations.
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce text-muted-foreground" />
      </button>
    </section>
  );
}
