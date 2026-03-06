"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactFooter() {
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
    <footer
      id="contact-footer"
      ref={sectionRef}
      className="relative bg-foreground px-6 py-32 md:py-48"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/50">
            Contact
          </span>

          <h2 className="mt-8 font-serif text-4xl font-light tracking-tight text-primary-foreground md:text-6xl text-balance">
            Get in Touch
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-primary-foreground/60">
            Contact us to learn more about BALMUN26, delegate applications,
            and partnership opportunities.
          </p>

          <div className="mt-12 w-full rounded-3xl border border-destructive/35 bg-gradient-to-br from-destructive/20 via-destructive/10 to-primary-foreground/5 p-4 md:p-6">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-stretch">
              <div className="hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-left md:flex md:flex-col md:justify-center">
                <span className="text-xs uppercase tracking-[0.24em] text-primary-foreground/50">
                  Contact Form
                </span>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                  By filling out this form, you can join BALMUN26 as a
                  delegate.
                </p>
              </div>

              <div className="w-full rounded-2xl border border-destructive/30 bg-card p-3 md:w-[520px] md:justify-self-end md:p-4">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdHSufC2GLKzt5y1z2rvbMhSe3YbNExf_KENNbONa7YIHU-1A/viewform?embedded=true"
                  width="100%"
                  height="680"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                  title="BALMUN26 Contact Form"
                >
                  Yükleniyor…
                </iframe>
              </div>
            </div>
          </div>

          <a
            href="https://forms.gle/4zYkVmrZ7CZz4jDd8"
            className="group mt-12 inline-flex items-center gap-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:border-primary-foreground/40 hover:bg-primary-foreground/20"
          >
            Application Form
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Bottom bar */}
        <div
          className={`mt-32 flex flex-col items-center justify-between gap-6 border-t border-primary-foreground/10 pt-8 md:flex-row transition-all duration-700 delay-300 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <p className="font-serif text-lg font-light tracking-tight text-primary-foreground">
            BALMUN26
          </p>
          <div className="text-center md:text-right">
            <p className="text-xs text-primary-foreground/40">
              {"© 2026 BALMUN. All rights reserved."}
            </p>
            <p className="mt-2 text-xs text-primary-foreground/40">
              Kırtepe, Cemal Aliş Sk. No: 1, 74100 Bartın Merkez/Bartın
            </p>
            <p className="mt-2 text-xs text-primary-foreground/40">-al8fehd</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
