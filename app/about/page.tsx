"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Globe, Lightbulb, Target, Users } from "lucide-react";

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

export default function AboutPage() {
  const hero = useReveal(0.1);
  const sections = useReveal();
  const goals = useReveal();
  const cta = useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-border/50 bg-background/80 px-6 py-4 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Image
            src="/images/balmun-logo.svg"
            alt="BALMUN logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <div className="hidden items-center gap-2 sm:flex">
            <span className="text-sm font-semibold tracking-wide text-foreground">
              BALMUN26
            </span>
            <span className="text-muted-foreground">/</span>
            <span className="text-sm text-muted-foreground">About</span>
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
        <section className="px-6 py-24 md:py-36">
          <div
            ref={hero.ref}
            className={`mx-auto max-w-5xl transition-all duration-700 ${
              hero.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              About BALMUN26
            </span>
            <div className="mt-4 h-px w-16 bg-foreground/20" />

            <h1 className="mt-12 font-serif text-4xl leading-tight font-light tracking-tight text-foreground md:text-6xl md:leading-tight">
              What is BALMUN?
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              BALMUN (Bartın Model United Nations) is an academically focused,
              student-organized diplomacy simulation and the first Model United
              Nations conference ever organized in Bartın. In MUN, participants
              represent countries and engage in formal debate, research, and
              negotiation to develop solutions for global issues.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Since MUN culture had not previously been established in Bartın,
              BALMUN is more than a conference; it is a pioneering academic
              initiative designed to expand international awareness and build a
              culture of structured academic debate in the region.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px w-full bg-border" />
        </div>

        <section className="px-6 py-24 md:py-32">
          <div
            ref={sections.ref}
            className={`mx-auto grid max-w-5xl gap-8 md:grid-cols-3 transition-all duration-700 ${
              sections.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="rounded-2xl border border-border bg-card p-8">
              <Globe className="mb-4 h-5 w-5 text-muted-foreground" />
              <h2 className="mb-3 font-serif text-2xl font-light text-foreground">
                Why BALMUN Matters
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                BALMUN introduces diplomacy and global policy dialogue to a city
                where MUN culture did not previously exist, opening a new
                academic space for students.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <Users className="mb-4 h-5 w-5 text-muted-foreground" />
              <h2 className="mb-3 font-serif text-2xl font-light text-foreground">
                Institutional Support
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                In line with our institution&apos;s educational tradition, BALMUN is
                prepared with strong support from our school administration,
                principal, and vice principals.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8">
              <Lightbulb className="mb-4 h-5 w-5 text-muted-foreground" />
              <h2 className="mb-3 font-serif text-2xl font-light text-foreground">
                Long-Term Vision
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                BALMUN aims to establish sustainable MUN culture in Bartın,
                provide students with a global perspective, and build a lasting
                academic tradition in the city.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-6">
          <div className="h-px w-full bg-border" />
        </div>

        <section className="px-6 py-24 md:py-32">
          <div
            ref={goals.ref}
            className={`mx-auto max-w-5xl transition-all duration-700 ${
              goals.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Core Goals
            </span>
            <div className="mt-4 h-px w-16 bg-foreground/20" />

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "International Awareness",
                  description:
                    "Strengthen global awareness by analyzing real-world international issues.",
                },
                {
                  title: "Diplomatic Communication",
                  description:
                    "Develop analytical thinking, negotiation, and formal diplomatic communication skills.",
                },
                {
                  title: "Academic Debate Culture",
                  description:
                    "Build a structured and sustainable academic debate culture for students in Bartın.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-8"
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <Target className="mb-4 h-5 w-5 text-muted-foreground" />
                  <h3 className="mb-3 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:py-32">
          <div
            ref={cta.ref}
            className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
              cta.visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="font-serif text-3xl font-light tracking-tight text-foreground md:text-5xl">
              Join BALMUN26
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Become part of Bartın&apos;s first MUN conference and help shape a new
              academic tradition through diplomacy and dialogue.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://forms.gle/4zYkVmrZ7CZz4jDd8"
                className="inline-flex items-center rounded-full bg-foreground px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:bg-foreground/90"
              >
                Application Form
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-8 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:border-foreground/30"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/balmun-logo.svg"
              alt="BALMUN logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-xs text-muted-foreground">BALMUN26</span>
          </div>
          <span className="text-xs text-muted-foreground">2026</span>
        </div>
      </footer>
    </div>
  );
}
