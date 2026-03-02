"use client";

import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative px-6 py-32 md:py-48"
    >
      <div className="mx-auto max-w-4xl">
        {/* Section label */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            About
          </span>
          <div className="mt-4 h-px w-16 bg-foreground/20" />
        </div>

        {/* Main text */}
        <h2
          className={`font-serif text-3xl leading-snug font-light tracking-tight text-foreground md:text-5xl md:leading-snug transition-all duration-700 delay-200 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          What is MUN?
        </h2>

        {/* Supporting text */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Overview
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              Model United Nations, also known as MUN, is an educational
              simulation of the United Nations where students learn about
              diplomacy, international relations, and contemporary global
              issues. In MUN conferences, each participant represents a
              country, organization, or individual and works with other
              delegates to discuss problems and create solutions.
            </p>
          </div>
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Why it matters
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              All MUN conferences have committees that simulate UN organs or
              international organizations such as UNDP, UN Women, and the
              UN Security Council. MUN helps participants improve public
              speaking, research, debating, writing, critical thinking,
              teamwork, leadership, and English communication while learning
              from diverse global perspectives.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-24 grid grid-cols-3 gap-8 transition-all duration-700 delay-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {[
            { number: "120", label: "Delegates" },
            { number: "4", label: "Committees" },
            { number: "2", label: "Days" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">
                {stat.number}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
