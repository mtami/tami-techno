import { useLanguage } from "@/lib/i18n";

const skills = [
  "Python",
  "JavaScript",
  "React",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Git / GitHub",
];

export function Skills() {
  const { t } = useLanguage();
  const s = t.skills;

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="reveal text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            {s.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {s.heading}
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 reveal">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-border bg-card px-5 py-4 text-center font-medium text-card-foreground shadow-[var(--shadow-card)] hover:-translate-y-0.5 hover:border-primary/40 transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
