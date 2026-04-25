import { TrendingUp, AlertCircle, Lightbulb } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Projects() {
  const { t } = useLanguage();
  const p = t.projects;

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            {p.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {p.heading}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            {p.subheading}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {p.items.map((item) => (
            <article
              key={item.title}
              className="reveal group relative rounded-2xl border border-border bg-card p-7 md:p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:border-primary/40 transition-all"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 -top-px h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "var(--gradient-hero)" }}
              />
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-3">
                {item.tag}
              </p>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-6">
                {item.title}
              </h3>
              <dl className="space-y-5">
                <Row
                  icon={<AlertCircle size={16} />}
                  label={p.problem}
                  value={item.problem}
                />
                <Row
                  icon={<Lightbulb size={16} />}
                  label={p.solution}
                  value={item.solution}
                />
                <Row
                  icon={<TrendingUp size={16} />}
                  label={p.impact}
                  value={item.impact}
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
