import { profile } from "@/data/profile";

const rotatingWords = [
  "scalable backends",
  "React frontends",
  "real-time systems",
  "clean APIs",
];

export default function Hero() {
  return (
    <section id="about" className="space-y-4">
      <div className="bento-cell hero-grid relative overflow-hidden px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
        <div className="blob blob-indigo -top-24 -left-24 h-80 w-80" />
        <div className="blob blob-violet -bottom-32 right-[30%] h-96 w-96" />

        <div className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            {profile.available && (
              <span className="fade-up fade-up-1 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-surface/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {profile.availability}
              </span>
            )}

            <h1 className="fade-up fade-up-2 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
              Hi, I&apos;m {profile.name.split(" ")[0]}.
              <br />
              I build{" "}
              <span className="word-swap">
                <span className="word-ghost">real-time systems</span>
                {rotatingWords.map((word) => (
                  <span key={word} className="gradient-text">
                    {word}
                  </span>
                ))}
              </span>
              <br />
              that just work.
            </h1>

            <p className="fade-up fade-up-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.summary}
            </p>

            <div className="fade-up fade-up-4 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-accent px-6 py-3.5 text-sm font-semibold">
                View My Work →
              </a>
              <a href="#contact" className="btn-outline px-6 py-3.5 text-sm font-semibold">
                Get in Touch
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-6 py-3.5 text-sm font-semibold"
              >
                LinkedIn
              </a>
            </div>

            <p className="fade-up fade-up-4 text-sm text-muted">
              {profile.title} · {profile.location}
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="code-card relative p-6 text-[0.82rem] leading-7">
              <div className="mb-4 flex items-center gap-2">
                <span className="code-dot bg-[#f87171]" />
                <span className="code-dot bg-[#fbbf24]" />
                <span className="code-dot bg-[#34d399]" />
                <span className="ml-3 text-xs text-[#6b8a81]">maryam.ts</span>
              </div>
              <pre className="whitespace-pre-wrap">
                <code>
                  <span className="code-punc">const </span>
                  <span className="code-key">maryam</span>
                  <span className="code-punc"> = {"{"}</span>
                  {"\n  "}
                  <span className="code-key">role</span>
                  <span className="code-punc">: </span>
                  <span className="code-str">&quot;Full Stack Engineer&quot;</span>
                  <span className="code-punc">,</span>
                  {"\n  "}
                  <span className="code-key">backend</span>
                  <span className="code-punc">: [</span>
                  <span className="code-str">&quot;.NET&quot;</span>
                  <span className="code-punc">, </span>
                  <span className="code-str">&quot;C#&quot;</span>
                  <span className="code-punc">, </span>
                  <span className="code-str">&quot;Node.js&quot;</span>
                  <span className="code-punc">],</span>
                  {"\n  "}
                  <span className="code-key">frontend</span>
                  <span className="code-punc">: [</span>
                  <span className="code-str">&quot;React&quot;</span>
                  <span className="code-punc">, </span>
                  <span className="code-str">&quot;Next.js&quot;</span>
                  <span className="code-punc">],</span>
                  {"\n  "}
                  <span className="code-key">databases</span>
                  <span className="code-punc">: [</span>
                  <span className="code-str">&quot;SQL Server&quot;</span>
                  <span className="code-punc">, </span>
                  <span className="code-str">&quot;PostgreSQL&quot;</span>
                  <span className="code-punc">],</span>
                  {"\n  "}
                  <span className="code-key">loves</span>
                  <span className="code-punc">: </span>
                  <span className="code-str">&quot;clean, scalable code&quot;</span>
                  <span className="code-punc">,</span>
                  {"\n"}
                  <span className="code-punc">{"}"};</span> <span className="type-cursor" />
                </code>
              </pre>
            </div>

            <span className="status-card -left-8 top-6" style={{ animationDelay: "-1s" }}>
              <span className="flow-check">✓</span> API deployed · 200 OK
            </span>
            <span className="status-card -bottom-5 left-10" style={{ animationDelay: "-3.5s" }}>
              ⚡ Query optimized · 40ms
            </span>
            <span className="status-card -right-6 bottom-20" style={{ animationDelay: "-5s" }}>
              <span className="flow-check">✓</span> Build passing
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profile.capabilities.map((capability, index) => (
          <div key={capability.title} className="bento-cell p-6">
            <span className="gradient-text text-sm font-bold tabular-nums">
              0{index + 1}
            </span>
            <p className="mt-2 text-sm font-semibold">{capability.title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">
              {capability.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}