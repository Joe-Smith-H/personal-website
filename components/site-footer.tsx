import { site } from "@/lib/content"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 sm:flex-row sm:items-end sm:justify-between lg:px-8">
        <div>
          <p className="font-heading text-2xl">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {site.role}, {site.location}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a
            href={`mailto:${site.email}`}
            className="underline decoration-border underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            {site.email}
          </a>
          <a
            href={site.instagramUrl}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Instagram {site.instagram}
          </a>
        </div>

        <div className="flex flex-col gap-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase sm:items-end">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
