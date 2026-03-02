"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "BALMUN26 conference hall", caption: "Conference Hall" },
  { src: "/images/gallery-2.jpg", alt: "Delegate speech", caption: "Opening Speech" },
  { src: "/images/gallery-3.jpg", alt: "Networking between delegates", caption: "Networking" },
  { src: "/images/gallery-4.jpg", alt: "General view of the conference hall", caption: "General Assembly" },
  { src: "/images/gallery-5.jpg", alt: "Committee voting", caption: "Committee Session" },
  { src: "/images/gallery-6.jpg", alt: "Award ceremony", caption: "Award Ceremony" },
];

/* We duplicate images so the marquee can loop seamlessly */
const marqueeImages = [...galleryImages, ...galleryImages];

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function MarqueeRow({
  images,
  speed = 40,
  reverse = false,
}: {
  images: typeof marqueeImages;
  speed?: number;
  reverse?: boolean;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className={`flex gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="group relative flex-shrink-0 overflow-hidden rounded-xl"
          >
            <div className="relative h-64 w-96 md:h-80 md:w-[28rem]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 384px, 448px"
              />
              {/* Hover overlay with caption */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <p className="px-6 pb-5 text-sm font-medium tracking-wide text-primary-foreground">
                  {image.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const hero = useReveal(0.1);
  const albumOne = useReveal(0.05);
  const albumTwo = useReveal(0.05);
  const description = useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header - same template as about page */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border/50 bg-background/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Image
            src="/images/bartin-lisesi-logo.png"
            alt="Bartin High School logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="hidden items-center gap-2 sm:flex">
            <span className="text-sm font-semibold tracking-wide text-foreground">
              BALMUN26
            </span>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm text-muted-foreground">Projects</span>
          </div>
        </div>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-foreground/10 bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/30 hover:bg-secondary/80"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Home</span>
        </Link>
      </header>

      <main className="pt-24">
        {/* Hero */}
        <section className="px-6 py-24 md:py-36">
          <div
            ref={hero.ref}
            className={`mx-auto max-w-5xl transition-all duration-700 ${hero.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Our Projects
            </span>
            <div className="mt-4 h-px w-16 bg-foreground/20" />

            <h1 className="mt-12 font-serif text-4xl leading-tight font-light tracking-tight text-foreground md:text-6xl md:leading-tight">
              Experiences Turned
              <br />
              <span className="text-muted-foreground">Into Memories.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              The most memorable moments from BALMUN26 conferences. Each
              photograph reflects the passion, dedication, and collaboration of
              young diplomats. This album is a visual summary of the story we
              are writing together.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px w-full bg-border" />
        </div>

        {/* Marquee Row 1 - flows right to left */}
        <section className="py-16 md:py-24">
          <div
            ref={albumOne.ref}
            className={`transition-all duration-700 ${albumOne.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="mb-10 px-6">
              <div className="mx-auto max-w-5xl">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  Conference Highlights
                </span>
              </div>
            </div>
            <MarqueeRow images={marqueeImages} speed={45} />
          </div>
        </section>

        {/* Description between rows */}
        <section className="px-6 py-16 md:py-24">
          <div
            ref={description.ref}
            className={`mx-auto max-w-5xl transition-all duration-700 ${description.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl">
                Every Frame Tells a Story
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Committee sessions, negotiations, award ceremonies, and
                networking moments... Every year, BALMUN26 creates unforgettable
                memories as a platform where young diplomats come together to
                develop solutions to global challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Marquee Row 2 - flows left to right (reverse) */}
        <section className="pb-16 md:pb-24">
          <div
            ref={albumTwo.ref}
            className={`transition-all duration-700 ${albumTwo.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="mb-10 px-6">
              <div className="mx-auto max-w-5xl">
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                  Special Moments
                </span>
              </div>
            </div>
            <MarqueeRow images={marqueeImages} speed={55} reverse />
          </div>
        </section>
      </main>

      {/* Simple footer - no contact, just branding */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/bartin-lisesi-logo.png"
              alt="Bartin High School logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xs text-muted-foreground">
              BALMUN26 — Bartin High School Model United Nations
            </span>
          </div>
          <span className="text-xs text-muted-foreground">2026</span>
        </div>
      </footer>
    </div>
  );
}
