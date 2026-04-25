import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            {a.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {a.heading}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {a.bodyPre}
            <span className="text-foreground font-medium">{a.techStack}</span>
            {a.bodyPost}
          </p>
        </div>
      </div>
    </section>
  );
}
