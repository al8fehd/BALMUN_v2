"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
  onContactOpen: () => void;
}

export function Header({ onContactOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 z-50 flex items-center gap-2 p-6 transition-all duration-500 ${
        scrolled ? "opacity-100" : "opacity-90"
      }`}
    >
      <Link
        href="/about"
        className="rounded-full border border-foreground/10 bg-background/80 px-5 py-2.5 text-sm font-medium tracking-wide text-foreground backdrop-blur-md transition-all duration-300 hover:border-foreground/30 hover:bg-background/95"
      >
        About
      </Link>
      <Link
        href="/projects"
        className="rounded-full border border-foreground/10 bg-background/80 px-5 py-2.5 text-sm font-medium tracking-wide text-foreground backdrop-blur-md transition-all duration-300 hover:border-foreground/30 hover:bg-background/95"
      >
        Projects
      </Link>
      <button
        onClick={onContactOpen}
        className="rounded-full border border-foreground/10 bg-foreground px-5 py-2.5 text-sm font-medium tracking-wide text-primary-foreground backdrop-blur-md transition-all duration-300 hover:bg-foreground/90"
      >
        Contact
      </button>
    </header>
  );
}
