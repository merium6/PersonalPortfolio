import Image from "next/image";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

type Project = (typeof profile.projects)[number];

function FeatureRow({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  const mediaInner = (
    <div className="feature-media group relative overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-[16/10]">
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          sizes="(max-width: 1024px) 100vw, 52vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      </div>
      {project.liveUrl && (
        <span className="absolute bottom-4 right-4 translate-y-2 rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Visit Live Site ↗
        </span>
      )}
    </div>
  );

  const media = project.liveUrl ? (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block lg:w-[52%]"
    >
      {mediaInner}
    </a>
  ) : (
    <div className="lg:w-[52%]">{mediaInner}</div>
  );

  const content = (
    <div className="flex flex-1 flex-col justify-center gap-5 py-2">
      <div className="flex items-center gap-4">
        <span className="gradient-text text-4xl font-bold tabular-nums sm:text-5xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
          {project.category}
        </span>
      </div>
      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {project.name}
      </h3>
      <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="skill-chip px-3 py-1.5 text-xs font-medium">
            {tag}
          </span>
        ))}
      </div>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent w-fit px-5 py-3 text-sm font-semibold"
        >
          Visit Live Site ↗
        </a>
      )}
    </div>
  );

  return (
    <div
      className={`flex flex-col gap-8 lg:items-center lg:gap-14 ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {media}
      {content}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="space-y-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">My Work</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Full-stack work across enterprise platforms, edtech, healthcare, and
          real estate.
        </p>
      </div>

      <div className="space-y-14 sm:space-y-20">
        {profile.projects.map((project, index) => (
          <Reveal key={project.name}>
            <FeatureRow project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}