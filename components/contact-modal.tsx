"use client";

import { useEffect, useRef } from "react";
import { X, MapPin, Phone, Mail, Globe } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Contact information"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-foreground/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`relative w-full max-w-lg rounded-2xl border border-border bg-card p-10 shadow-2xl transition-all duration-500 ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-95 opacity-0"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="mb-8">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </span>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-foreground">
            Reach Us
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
              <MapPin className="h-4 w-4 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Address</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Kırtepe, Cemal Aliş Sk. No: 1
                <br />
                74100 Bartın Merkez/Bartın
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-border" />

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Phone className="h-4 w-4 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Phone</p>
              <a
                href="tel:03782271340"
                className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                0(378) 2271340
              </a>
            </div>
          </div>

          <div className="h-px w-full bg-border" />

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Mail className="h-4 w-4 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Email</p>
              <a
                href="mailto:info@balmun.org"
                className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                info@balmun.org
              </a>
            </div>
          </div>

          <div className="h-px w-full bg-border" />

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
              <Globe className="h-4 w-4 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Web</p>
              <p className="mt-1 text-sm text-muted-foreground">
                www.balmun.org
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
