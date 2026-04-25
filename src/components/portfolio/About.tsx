export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Building software that scales.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm a software developer focused on building scalable web
            applications using{" "}
            <span className="text-foreground font-medium">
              Python, JavaScript, React, PostgreSQL, MongoDB, Redis, and AWS
            </span>
            . I work across the full stack — from system design and
            architecture to production deployment — with a focus on reliability,
            performance, and developer experience.
          </p>
        </div>
      </div>
    </section>
  );
}