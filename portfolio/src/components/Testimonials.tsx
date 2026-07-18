import { profile } from "@/data/profile";

export default function Testimonials() {
  const review = profile.testimonials[0];
  if (!review) return null;

  return (
    <section id="testimonials" className="space-y-6">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Client Feedback
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Trusted by the people I&apos;ve{" "}
          <span className="gradient-text">built with</span>
        </h2>
      </div>

      <article className="bento-cell relative overflow-hidden p-8 sm:p-12">
        <div className="blob blob-indigo -right-20 -top-24 h-64 w-64 opacity-40" />
        <div className="blob blob-pink -bottom-28 -left-16 h-56 w-56 opacity-30" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="skill-chip px-3 py-1.5 text-xs font-semibold">
                {review.skill}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--accent-3)" }}>
                {"★★★★★"}
                <span className="text-muted">{review.rating}</span>
              </span>
            </div>

            <blockquote className="mt-8 text-xl font-medium leading-relaxed tracking-tight text-foreground sm:text-2xl sm:leading-relaxed">
              &ldquo;{review.quote}&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-sm font-bold text-white">
                {review.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-muted">{review.role}</p>
                <p className="text-xs text-muted">
                  Project: {review.project} · {review.date}
                </p>
              </div>
            </div>
          </div>

          <a
            href={review.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex w-fit items-center gap-2 px-5 py-3 text-sm font-semibold"
          >
            View on LinkedIn ↗
          </a>
        </div>
      </article>
    </section>
  );
}
