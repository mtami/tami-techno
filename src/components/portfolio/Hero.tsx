import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t, lang } = useLanguage();
  const h = t.hero;

  return (
    <section
      id="hero"
      className="relative pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden"
      style={{ background: "var(--gradient-subtle)" }}
    >
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8"
          style={{ animation: "var(--animate-fade-in)" }}
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          {h.badge}
        </div>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          style={{ animation: "var(--animate-fade-in-up)" }}
        >
          {h.title}
        </h1>
        <p
          className="mt-4 text-xl sm:text-2xl md:text-3xl font-medium text-gradient"
          style={{ animation: "var(--animate-fade-in-up)", animationDelay: "0.1s" }}
        >
          {h.subtitle}
        </p>
        <p
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed"
          style={{ animation: "var(--animate-fade-in-up)", animationDelay: "0.2s" }}
        >
          {h.description}
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ animation: "var(--animate-fade-in-up)", animationDelay: "0.3s" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:shadow-[var(--shadow-glow)] transition-all w-full sm:w-auto"
            style={{ background: "var(--gradient-hero)" }}
          >
            {h.viewProjects}
            <ArrowRight
              size={16}
              className={`transition-transform group-hover:translate-x-0.5 ${lang === "ar" ? "rotate-180" : ""}`}
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold border border-border bg-background hover:bg-accent transition-colors w-full sm:w-auto"
          >
            <Mail size={16} />
            {h.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
