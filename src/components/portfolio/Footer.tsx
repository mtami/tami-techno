import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Mohammad Tami. {f.rights}</p>
        <p>{f.builtWith}</p>
      </div>
    </footer>
  );
}
