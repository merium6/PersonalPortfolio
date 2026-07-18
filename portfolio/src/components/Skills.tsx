import { profile } from "@/data/profile";

// Left side: skills that flow INTO the hub (start position in %).
const inflow: Array<{ name: string; top: number; left: number }> = [
  { name: "C#", top: 8, left: 18 },
  { name: ".NET (6–9)", top: 16, left: 4 },
  { name: "React.js", top: 26, left: 22 },
  { name: "Next.js", top: 34, left: 6 },
  { name: "SQL Server", top: 44, left: 16 },
  { name: "ASP.NET Core MVC", top: 56, left: 3 },
  { name: "PostgreSQL", top: 64, left: 20 },
  { name: "Node.js", top: 74, left: 8 },
  { name: "EF Core", top: 82, left: 24 },
  { name: "RabbitMQ", top: 90, left: 12 },
  { name: "JavaScript", top: 5, left: 32 },
  { name: "SignalR", top: 88, left: 34 },
  { name: "JWT Auth", top: 20, left: 36 },
  { name: "MongoDB", top: 70, left: 36 },
];

// Right side: outcomes that flow OUT of the hub (end position in %).
const outflow: Array<{ name: string; top: number; left: number }> = [
  { name: "Scalable REST APIs", top: 10, left: 68 },
  { name: "Secure Authentication", top: 24, left: 78 },
  { name: "Optimized Databases", top: 38, left: 70 },
  { name: "Real-time Features", top: 52, left: 80 },
  { name: "Clean Architecture", top: 66, left: 72 },
  { name: "Fast, Responsive UIs", top: 80, left: 78 },
  { name: "Reliable Microservices", top: 90, left: 64 },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">
          Technical Expertise
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="mt-3 text-sm text-muted">
          My stack goes in — reliable, production-ready software comes out.
        </p>
      </div>

      <div className="bento-cell flow-stage relative h-[440px] overflow-hidden sm:h-[500px]">
        {/* Central hexagon hub */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="hub-glow" />
          <div className="hub-hex relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
            <span className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              MA
            </span>
          </div>
        </div>

        {/* Skills flowing in from the left */}
        {inflow.map((item, index) => (
          <span
            key={item.name}
            className="flow-tile"
            style={
              {
                "--sl": `${item.left}%`,
                "--st": `${item.top}%`,
                left: `${item.left}%`,
                top: `${item.top}%`,
                animationDuration: `${9 + (index % 5)}s`,
                animationDelay: `${-(index * 1.7)}s`,
              } as React.CSSProperties
            }
          >
            {item.name}
          </span>
        ))}

        {/* Outcomes flowing out to the right */}
        {outflow.map((item, index) => (
          <span
            key={item.name}
            className="flow-chip"
            style={
              {
                "--el": `${item.left}%`,
                "--et": `${item.top}%`,
                left: `${item.left}%`,
                top: `${item.top}%`,
                animationDuration: `${10 + (index % 4)}s`,
                animationDelay: `${-(index * 2.1)}s`,
              } as React.CSSProperties
            }
          >
            <span className="flow-check">✓</span>
            {item.name}
          </span>
        ))}
      </div>
    </section>
  );
}