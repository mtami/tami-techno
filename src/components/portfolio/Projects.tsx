import { TrendingUp, AlertCircle, Lightbulb } from "lucide-react";

const projects = [
  {
    title: "Multi-Tenant E-Learning Platform",
    tag: "Full-Stack · AWS · Architecture",
    problem:
      "International clients needed a scalable e-learning solution with strict data isolation across organizations.",
    solution:
      "Designed a multi-tenant architecture with isolated tenant data within a shared database, full-stack implementation, and AWS deployment.",
    impact: "Reached 100,000 monthly active users in the first year.",
  },
  {
    title: "AI-Powered Fundraising Platform",
    tag: "GenAI · Semantic Search · Caching",
    problem:
      "Entrepreneurs and VCs needed a smarter way to discover relevant matches at scale, while AI inference costs ballooned.",
    solution:
      "Co-developed the platform, integrated GenAI-powered semantic search, and built a caching layer to optimize inference cost.",
    impact: "Reduced AI inference cost by 40%.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected Work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A look at the systems I've designed and shipped.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group relative rounded-2xl border border-border bg-card p-7 md:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:border-primary/40 transition-all"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "var(--gradient-hero)" }}
              />
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                {p.tag}
              </p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6">
                {p.title}
              </h3>
              <dl className="space-y-5">
                <Row
                  icon={<AlertCircle size={16} />}
                  label="Problem"
                  value={p.problem}
                />
                <Row
                  icon={<Lightbulb size={16} />}
                  label="Solution"
                  value={p.solution}
                />
                <Row
                  icon={<TrendingUp size={16} />}
                  label="Impact"
                  value={p.impact}
                  highlight
                />
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <div
        className={`shrink-0 mt-0.5 h-8 w-8 rounded-lg flex items-center justify-center ${
          highlight
            ? "bg-primary/10 text-primary"
            : "bg-muted text-muted-foreground"
        }`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
          {label}
        </dt>
        <dd
          className={`text-sm md:text-base leading-relaxed ${
            highlight ? "text-foreground font-medium" : "text-muted-foreground"
          }`}
        >
          {value}
        </dd>
      </div>
    </div>
  );
}