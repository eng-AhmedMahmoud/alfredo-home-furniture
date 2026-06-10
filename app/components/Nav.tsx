"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { href: "#collections", label: "Collections" },
  { href: "#story", label: "Our Story" },
  { href: "#craft", label: "Craft" },
  { href: "#showroom", label: "Showroom" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-walnut/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-x mx-auto max-w-7xl flex items-center justify-between py-4 md:py-5">
        <Link href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl md:text-[1.7rem] tracking-tight text-coffee">
            Alfredo
          </span>
          <span className="text-[10px] uppercase tracking-[0.28em] text-walnut/80">
            Home · Cairo
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-coffee/80 hover:text-coffee transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-walnut after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-coffee text-ivory px-5 py-2.5 text-sm hover:bg-walnut-dark transition-colors"
          >
            Book a visit
            <span aria-hidden>→</span>
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-walnut/30 text-coffee"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-coffee transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-5 bg-coffee transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-x mx-auto max-w-7xl pb-6 flex flex-col gap-4 border-t border-walnut/10 pt-4 bg-ivory/95">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-coffee/90 text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-coffee text-ivory px-5 py-3 text-sm"
          >
            Book a visit
          </a>
        </div>
      </div>
    </header>
  );
}
