import { navLinks, site } from "@/lib/content"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-6 md:h-20 lg:px-8">
        <a
          href="#top"
          className="font-heading text-xl tracking-[0.01em] transition-opacity hover:opacity-70 md:text-2xl"
        >
          {site.name}
        </a>

        <nav
          aria-label="Primary"
          className="flex items-center gap-5 font-mono text-[10px] tracking-[0.18em] uppercase sm:gap-8 sm:text-[11px]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="hidden border border-foreground/25 px-3 py-2 text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background sm:inline-flex"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  )
}
