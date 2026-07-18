import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f1a17] py-8 text-white">
      <div className="flex w-full flex-col gap-3 px-4 text-sm text-[#8ba69d] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#5eead4]"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#5eead4]"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition hover:text-[#5eead4]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}