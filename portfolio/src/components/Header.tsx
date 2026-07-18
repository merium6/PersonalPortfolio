"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8 lg:px-12">
      <div className="relative mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-3 rounded-full border border-border bg-surface/85 py-2 pl-2 pr-2 shadow-[0_10px_30px_-14px_rgba(13,148,136,0.25)] backdrop-blur-md">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-xs font-bold text-white transition-transform group-hover:rotate-12">
              {initials}
            </span>
            <span className="hidden text-sm font-bold tracking-tight sm:block">
              {profile.name}
            </span>
          </a>

          <nav className="hidden items-center lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-accent/10 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="btn-accent px-5 py-2.5 text-xs font-semibold sm:text-sm"
              style={{ borderRadius: 999 }}
            >
              Hire Me →
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-border bg-surface transition hover:border-accent lg:hidden"
            >
              <span
                className={`h-[2px] w-4 bg-foreground transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-4 bg-foreground transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-4 bg-foreground transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {open && (
          <nav className="absolute left-0 right-0 top-full mt-2 flex flex-col gap-1 rounded-2xl border border-border bg-surface/95 p-3 shadow-[0_20px_40px_-18px_rgba(13,148,136,0.35)] backdrop-blur-md lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition hover:bg-accent/10 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}