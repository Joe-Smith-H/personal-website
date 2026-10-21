import Image from "next/image"

import { PhotoGallery } from "@/components/photo-gallery"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { facts, pricing, site } from "@/lib/content"

function SectionLabel({
  index,
  children,
}: {
  index: string
  children: React.ReactNode
}) {
  return (
    <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
      {index} — {children}
    </p>
  )
}

export default function Page() {
  return (
    <div id="top" className="flex min-h-svh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        <section
          aria-labelledby="hero-title"
          className="mx-auto w-full max-w-6xl px-6 pt-14 pb-20 md:pt-20 md:pb-24 lg:px-8 lg:pt-24"
        >
          <div className="grid items-end gap-12 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                {site.role}
              </p>
              <h1
                id="hero-title"
                className="mt-6 font-heading text-[clamp(2.9rem,9vw,7rem)] leading-[0.92] font-light tracking-[-0.01em] text-balance"
              >
                Light, held a little longer.
              </h1>
              <p className="mt-8 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                I&apos;m Mara — a portrait and wedding photographer in Portland,
                Oregon. I work slowly, mostly in natural light, and look for the
                moment just before someone forgets the camera is there.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase"
                >
                  View selected work
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                <Image
                  src="/photos/hero.webp"
                  alt="Studio portrait of a woman with long hair, turned toward the camera against a deep grey background."
                  fill
                  preload
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                Studio portrait — 2025
              </p>
            </div>
          </div>
        </section>

        <section
          id="introduction"
          aria-labelledby="introduction-title"
          className="scroll-mt-24 border-t border-border"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-10 md:py-28 lg:px-8">
            <div className="md:col-span-4">
              <SectionLabel index="01">Introduction</SectionLabel>
              <div className="relative mt-8 aspect-[4/5] w-full max-w-xs overflow-hidden bg-muted">
                <Image
                  src="/photos/about.webp"
                  alt="The photographer standing against a bright blue wall on a city street."
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                Self-portrait, Portland — 2025
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <h2
                id="introduction-title"
                className="font-heading text-4xl leading-[1.03] font-light tracking-[-0.01em] text-balance sm:text-5xl md:text-6xl"
              >
                Pictures of people, made at their own pace.
              </h2>
              <div className="mt-8 space-y-6 text-base leading-8 text-muted-foreground">
                <p>
                  I&apos;ve been photographing since 2014, first for friends and
                  then for anyone who wanted a record of a day that mattered. My
                  work sits somewhere between documentary and portrait: a little
                  structure, a lot of waiting.
                </p>
                <p>
                  Sessions are unhurried. We talk, we walk, and we take pictures
                  along the way. Weddings are the same idea at a larger scale — I
                  stay out of the way, keep an eye on the light, and photograph
                  what actually happens.
                </p>
              </div>

              <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section
          id="work"
          aria-labelledby="work-title"
          className="scroll-mt-24 border-t border-border"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28 lg:px-8">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-6">
                <SectionLabel index="02">Selected work</SectionLabel>
                <h2
                  id="work-title"
                  className="mt-6 font-heading text-4xl leading-[1.03] font-light tracking-[-0.01em] sm:text-5xl md:text-6xl"
                >
                  Recent photographs.
                </h2>
              </div>
              <p className="max-w-md text-base leading-8 text-muted-foreground md:col-span-5 md:col-start-8">
                A small selection of portraits, weddings and personal work. The
                images below are placeholders for now; a full archive is
                available on request.
              </p>
            </div>

            <div className="mt-16 md:mt-20">
              <PhotoGallery />
            </div>
          </div>
        </section>

        <section
          id="pricing"
          aria-labelledby="pricing-title"
          className="scroll-mt-24 border-t border-border"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28 lg:px-8">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-6">
                <SectionLabel index="03">Pricing</SectionLabel>
                <h2
                  id="pricing-title"
                  className="mt-6 font-heading text-4xl leading-[1.03] font-light tracking-[-0.01em] text-balance sm:text-5xl md:text-6xl"
                >
                  Rates for sessions and weddings.
                </h2>
              </div>
              <p className="max-w-md text-base leading-8 text-muted-foreground md:col-span-5 md:col-start-8">
                Every booking starts with a conversation about what you need.
                The figures below are starting points; travel outside Portland,
                prints and albums are quoted separately.
              </p>
            </div>

            <div className="mt-14 hidden md:block">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Photography session rates
                </caption>
                <thead>
                  <tr className="border-b border-foreground/25">
                    <th
                      scope="col"
                      className="pb-3 pr-6 font-mono text-[10px] font-normal tracking-[0.18em] text-muted-foreground uppercase"
                    >
                      Session
                    </th>
                    <th
                      scope="col"
                      className="pb-3 pr-6 font-mono text-[10px] font-normal tracking-[0.18em] text-muted-foreground uppercase"
                    >
                      Length
                    </th>
                    <th
                      scope="col"
                      className="pb-3 pr-6 font-mono text-[10px] font-normal tracking-[0.18em] text-muted-foreground uppercase"
                    >
                      What you receive
                    </th>
                    <th
                      scope="col"
                      className="pb-3 text-right font-mono text-[10px] font-normal tracking-[0.18em] text-muted-foreground uppercase"
                    >
                      Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((tier) => (
                    <tr key={tier.name} className="border-b border-border align-top">
                      <th scope="row" className="py-8 pr-6 font-normal">
                        <span className="font-heading text-2xl">{tier.name}</span>
                        <span className="mt-2 block max-w-[22rem] font-sans text-sm leading-6 text-muted-foreground">
                          {tier.note}
                        </span>
                      </th>
                      <td className="py-8 pr-6 text-sm text-muted-foreground">
                        {tier.length}
                      </td>
                      <td className="max-w-[20rem] py-8 pr-6 text-sm leading-6 text-muted-foreground">
                        {tier.includes}
                      </td>
                      <td className="py-8 text-right font-heading text-2xl whitespace-nowrap">
                        {tier.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-14 md:hidden">
              {pricing.map((tier) => (
                <div key={tier.name} className="border-t border-border py-8 first:border-t-0 first:pt-0">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-heading text-2xl">{tier.name}</h3>
                    <p className="font-heading text-xl whitespace-nowrap">
                      {tier.price}
                    </p>
                  </div>
                  <p className="mt-2 font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                    {tier.length}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {tier.includes}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {tier.note}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-2xl text-sm leading-7 text-muted-foreground md:mt-8">
              All rates are in USD. A 25% deposit holds your date, with the
              balance due two weeks after the session. If your plans are still
              taking shape, write anyway — we can work out what the day should
              look like together.
            </p>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="scroll-mt-24 border-t border-border"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-32 lg:px-8">
            <SectionLabel index="04">Contact</SectionLabel>

            <div className="mt-6 grid gap-12 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-7">
                <h2
                  id="contact-title"
                  className="font-heading text-4xl leading-[1.03] font-light tracking-[-0.01em] sm:text-5xl md:text-6xl"
                >
                  Say hello.
                </h2>
                <p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">
                  Email is the quickest way to reach me. I reply within two
                  working days, usually sooner. Tell me a little about the date,
                  the place, and what you&apos;d like to remember.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="group mt-10 inline-flex items-baseline gap-3 border-b border-foreground/30 pb-2 font-heading text-3xl transition-colors hover:border-foreground sm:text-4xl md:text-5xl"
                >
                  {site.email}
                  <span
                    aria-hidden
                    className="text-xl transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </div>

              <div className="md:col-span-4 md:col-start-9">
                <dl className="space-y-6 border-t border-border pt-6 text-sm">
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                      Studio
                    </dt>
                    <dd className="mt-1">{site.location}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                      Availability
                    </dt>
                    <dd className="mt-1">{site.availability}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase">
                      Elsewhere
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={site.instagramUrl}
                        className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                      >
                        Instagram {site.instagram}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
