"use client";

import { useEffect, useState } from "react";

// Everything here is taken from the CCF section of the CV.
const STEPS = [
  {
    layer: "Tenants",
    title: "Tenants, configured not coded",
    text: "Added row reordering, automatic number generation and custom layouts for tenants, plus automatic database setup for the Conversation Agent when a new tenant is created.",
    chips: ["Low-code", "Multi-tenancy", "PostgreSQL"],
  },
  {
    layer: "Environments",
    title: "Environments that move cleanly",
    text: "Improved publishing and import/export so application data models, screens, layouts and settings transfer correctly from one environment to another.",
    chips: ["Publishing", "Import / export"],
  },
  {
    layer: "Identity",
    title: "Identity and administration",
    text: "Built APIs to list chatbots, retrieve tenant database schemas and manage users through Keycloak, supporting screen building and tenant administration.",
    chips: ["Keycloak", "Ocelot gateway"],
  },
  {
    layer: "Dynamic API",
    title: "Dynamic CRUD you can trust",
    text: "Fixed data-saving, database relationship and caching issues in the dynamic CRUD APIs, including duplicate records and invalid PostgreSQL data types.",
    chips: [".NET 8", "PostgreSQL", "Caching"],
  },
  {
    layer: "Workers",
    title: "Workers that recover",
    text: "Improved the RabbitMQ and MassTransit background workers by reducing EF Core data loading and strengthening retries, failed-message handling and recovery.",
    chips: ["RabbitMQ", "MassTransit", "EF Core"],
  },
];

const GAP = 62; // px between exploded layers

/**
 * Scrollytelling without scroll-jacking: the text scrolls at normal speed and
 * the 3D platform simply stays beside it while the steps go by.
 */
export default function CcfStory({ tags }: { tags: readonly string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const steps = STEPS.map((_, i) => document.getElementById(`ccf-step-${i}`));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-42% 0px -42% 0px" },
    );
    steps.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="pb-8 pt-16 sm:pt-24">
      <div data-reveal className="max-w-2xl">
        <p className="eyebrow">Selected work · Featured case study</p>
        <h2 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
          CCF, Common Central Framework
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted">
          A multi-tenant low-code platform at Techverx, where I own backend features
          from tenant setup to background workers. Five layers I worked on:
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        {/* Steps scroll normally */}
        <ol>
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              id={`ccf-step-${i}`}
              data-index={i}
              className={`flex flex-col justify-center border-l-2 py-6 pl-6 transition-all duration-500 lg:min-h-[17rem] lg:pl-8 ${
                i === active
                  ? "border-accent opacity-100"
                  : "border-border opacity-100 lg:opacity-35"
              }`}
            >
              <p className="text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")} · {step.layer}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">{step.text}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {step.chips.map((chip) => (
                  <span key={chip} className="tag">
                    {chip}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>

        {/* Platform stays beside the text; the active layer lights up and lifts clear. */}
        <div
          aria-hidden
          className="hidden h-[26rem] items-center justify-center self-start [perspective:1500px] lg:sticky lg:top-28 lg:flex"
        >
          <div
            className="relative h-[15rem] w-[24rem] [transform-style:preserve-3d]"
            style={{ transform: "rotateX(58deg) rotateZ(-36deg) translateY(-2rem)" }}
          >
            {STEPS.map((step, i) => {
              const isActive = i === active;
              const lift = i * 34 + (i > active ? GAP : 0) + (isActive ? 10 : 0);
              return (
                <div
                  key={step.layer}
                  className={`absolute inset-0 rounded-2xl border transition-all duration-700 ease-out [transform-style:preserve-3d] ${
                    isActive
                      ? "border-accent bg-accent-soft shadow-[0_30px_50px_-20px_rgba(31,75,122,0.55)]"
                      : "border-border bg-surface shadow-[0_18px_30px_-22px_rgba(22,24,29,0.35)]"
                  }`}
                  style={{ transform: `translateZ(${lift}px)` }}
                >
                  <span
                    className={`absolute bottom-3 left-4 text-[0.8rem] font-semibold tracking-wide transition-colors duration-500 ${
                      isActive ? "text-accent" : "text-subtle"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")} · {step.layer}
                  </span>
                  <span
                    className={`absolute right-4 top-4 h-2 w-2 rounded-full transition-colors duration-500 ${
                      isActive ? "bg-accent" : "bg-border"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
