import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "tami@example.com",
    href: "mailto:tami@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mtami",
    href: "https://www.linkedin.com/in/mtami/",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/40 border-t border-border">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
            Let's build something together.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Got a project in mind or just want to say hi? My inbox is open.
          </p>
        </div>
        <div className="reveal grid sm:grid-cols-2 gap-4">
          {items.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 text-left shadow-[var(--shadow-card)] hover:border-primary/40 hover:-translate-y-0.5 transition-all"
            >
              <div className="h-11 w-11 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Icon size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                <p className="text-sm md:text-base font-medium text-foreground truncate">
                  {value}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}