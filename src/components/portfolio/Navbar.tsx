import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const { t, lang, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight text-lg">
          MT<span className="text-primary">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium border border-border bg-background hover:bg-accent transition-colors"
          >
            <Globe size={14} />
            {lang === "en" ? "AR" : "EN"}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            {t.nav.letsTalk}
          </a>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-medium border border-border bg-background"
          >
            <Globe size={12} />
            {lang === "en" ? "AR" : "EN"}
          </button>
          <button
            className="p-2 -mr-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <ul className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
