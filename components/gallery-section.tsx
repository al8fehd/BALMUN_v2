"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "BALMUN26 conference hall",
    title: "Opening Session",
    description: "Delegates gather for the official start of BALMUN26.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Delegate speech",
    title: "Delegate Speech",
    description: "A delegate presents policy points during committee.",
    span: "",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Networking between delegates",
    title: "Networking",
    description: "Students exchange ideas and build global connections.",
    span: "",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "General view of the conference hall",
    title: "Committee Floor",
    description: "Committees discuss agenda items in formal session.",
    span: "md:col-span-2",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Committee voting",
    title: "Voting Time",
    description: "Delegates vote on draft resolutions and amendments.",
    span: "",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Award ceremony",
    title: "Closing Ceremony",
    description: "Outstanding delegates are recognized at the end.",
    span: "",
  },
];

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-secondary px-6 py-32 md:py-48"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Gallery
          </span>
          <div className="mt-4 h-px w-16 bg-foreground/20" />
          <h2 className="mt-8 font-serif text-3xl font-light tracking-tight text-foreground md:text-5xl">
            TEAM
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {galleryImages.map((image, index) => (
            <article
              key={image.src}
              className={`group relative overflow-hidden rounded-lg ${image.span} transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div
                className={`relative ${
                  image.span.includes("row-span-2")
                    ? "aspect-square"
                    : "aspect-[4/3]"
                } w-full`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 transition-all duration-500 group-hover:bg-foreground/10" />
              </div>
              <div className="absolute right-3 bottom-3 left-3 rounded-md border border-background/30 bg-background/85 p-3 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground">
                  {image.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {image.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
