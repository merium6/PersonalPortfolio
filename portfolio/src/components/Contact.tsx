import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0f1a17] px-4 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
    >
      <div className="blob blob-indigo -top-32 left-[15%] h-96 w-96 opacity-30" />
      <div className="blob blob-violet -bottom-40 right-[10%] h-96 w-96 opacity-25" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        {profile.available && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#5eead4] backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5eead4] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5eead4]" />
            </span>
            {profile.availability}
          </span>
        )}

        <h2 className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          Have a project in mind?
          <br />
          Let&apos;s build it <span className="gradient-text">together.</span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#8ba69d] sm:text-lg">
          I&apos;m actively seeking new full-stack opportunities and am always open
          to tech discussions and meaningful collaborations. Tell me what
          you&apos;re building — I&apos;d love to hear about it.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="btn-accent px-7 py-4 text-sm font-semibold"
          >
            Email Me →
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[0.65rem] border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-[#5eead4] hover:text-[#5eead4]"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[0.65rem] border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-[#5eead4] hover:text-[#5eead4]"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 grid w-full gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="bg-[#0f1a17] p-6 transition hover:bg-[#14211d]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8ba69d]">
              Email
            </p>
            <p className="mt-2 break-all text-sm font-medium">{profile.email}</p>
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="bg-[#0f1a17] p-6 transition hover:bg-[#14211d]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8ba69d]">
              Phone
            </p>
            <p className="mt-2 text-sm font-medium">{profile.phone}</p>
          </a>
          <div className="bg-[#0f1a17] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8ba69d]">
              Location
            </p>
            <p className="mt-2 text-sm font-medium">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}