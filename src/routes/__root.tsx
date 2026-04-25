import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mohammad Tami — Software Developer" },
      {
        name: "description",
        content:
          "Software developer specializing in scalable systems, multi-tenant architectures, and AI-powered web applications.",
      },
      { name: "author", content: "Mohammad Tami" },
      { property: "og:title", content: "Mohammad Tami — Software Developer" },
      {
        property: "og:description",
        content:
          "Scalable systems, multi-tenant architectures, and AI-powered applications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Mohammad Tami — Software Developer" },
      { name: "description", content: "A modern, responsive one-page portfolio showcasing Mohammad Tami's software development expertise." },
      { property: "og:description", content: "A modern, responsive one-page portfolio showcasing Mohammad Tami's software development expertise." },
      { name: "twitter:description", content: "A modern, responsive one-page portfolio showcasing Mohammad Tami's software development expertise." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/78dfde24-3394-4404-8342-0e3787d60229/id-preview-cc27f428--8fec3060-cd8f-4e0e-8bd5-6cdfcfb1f0cc.lovable.app-1777148670085.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/78dfde24-3394-4404-8342-0e3787d60229/id-preview-cc27f428--8fec3060-cd8f-4e0e-8bd5-6cdfcfb1f0cc.lovable.app-1777148670085.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
