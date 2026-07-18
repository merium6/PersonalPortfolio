import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" className="grid gap-10 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Career Journey
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Where I&apos;ve <span className="gradient-text">worked</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          From freelance projects to enterprise microservices platforms — every
          role sharpened how I design, build, and ship reliable software.
        </p>

        <div className="bento-cell mt-8 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Education
          </p>
          <h3 className="mt-3 text-base font-semibold">
            {profile.education.degree}
          </h3>
          <p className="mt-1 text-sm text-muted">{profile.education.school}</p>
          <span className="period-pill mt-4">{profile.education.period}</span>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Beyond the code
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.softSkills.map((skill) => (
              <span key={skill} className="skill-chip px-3 py-1.5 text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="timeline-rail" />
        <div className="space-y-8">
          {profile.experience.map((job, index) => (
            <article
              key={`${job.company}-${job.period}`}
              className="timeline-item relative pl-10"
            >
              <span
                className={`timeline-dot ${index === 0 ? "timeline-dot-live" : ""}`}
              />
              <div className="timeline-card bento-cell p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="period-pill">{job.period}</span>
                  <p className="text-xs text-muted">{job.location}</p>
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight sm:text-xl">
                  {job.role}
                </h3>
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-link mt-0.5 inline-block text-sm font-semibold underline decoration-border underline-offset-4"
                >
                  {job.company} ↗
                </a>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {job.highlight}
                </p>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}