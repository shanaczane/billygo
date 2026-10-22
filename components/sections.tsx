import Image from "next/image";
import type { ReactNode } from "react";
import { site } from "@/site.config";

/* ── Small building blocks ─────────────────────────────────── */

const wrap = "mx-auto w-full max-w-7xl px-5 sm:px-8";
const h2 = "font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl";

function Button({ href, children, variant = "accent" }: { href: string; children: ReactNode; variant?: "accent" | "dark" | "outline" | "outline-light" }) {
  const styles = {
    accent: "bg-accent text-ink hover:brightness-95",
    dark: "bg-ink text-paper hover:opacity-90",
    outline: "border-2 border-ink text-ink hover:bg-ink hover:text-paper",
    "outline-light": "border-2 border-paper text-paper hover:bg-paper hover:text-ink",
  }[variant];
  return (
    <a href={href} className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-base font-bold transition ${styles}`}>
      {children}
    </a>
  );
}

function Photo({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  if (!src) {
    return <div className={`flex items-center justify-center bg-soft text-sm font-semibold text-muted ${className}`}>[Photo: {alt}]</div>;
  }
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
    </div>
  );
}

const tel = (p: string) => `tel:+1${p.replace(/\D/g, "")}`;

/* ── Sections ──────────────────────────────────────────────── */

export function TopBar() {
  if (!site.topBar && site.topLinks.length === 0) return null;
  return (
    <div className="bg-ink text-sm text-paper/85">
      <div className={`${wrap} flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2.5`}>
        <p>{site.topBar}</p>
        <div className="flex gap-5">
          {site.topLinks.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-paper">{l.label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Logo() {
  if (site.logoImage) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={site.logoImage} alt={site.name} className="h-10 w-auto" />;
  }
  return (
    <span className="font-display text-3xl font-extrabold tracking-tight">
      {site.logoText}
      {site.logoAccent && <span className="rounded-md bg-accent px-1.5">{site.logoAccent}</span>}
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/95 backdrop-blur">
      <div className={`${wrap} flex items-center justify-between gap-6 py-3`}>
        <a href="/" aria-label={`${site.name} home`}><Logo /></a>

        <nav aria-label="Main" className="hidden gap-7 font-semibold lg:flex">
          {site.nav.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-muted">{n.label}</a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          {site.phone && <Button href={tel(site.phone)} variant="outline">{site.phone}</Button>}
          <Button href={site.bookingUrl}>{site.bookingLabel}</Button>
        </div>

        {/* Mobile menu: no JavaScript needed */}
        <details className="relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer items-center rounded-full border-2 border-ink px-4 font-bold">Menu</summary>
          <div className="absolute right-0 mt-2 flex w-64 flex-col gap-1 rounded-2xl border border-ink/10 bg-paper p-3 shadow-xl">
            {site.nav.map((n) => (
              <a key={n.label} href={n.href} className="rounded-lg px-3 py-3 font-semibold hover:bg-soft">{n.label}</a>
            ))}
            <a href={site.bookingUrl} className="mt-2 rounded-full bg-accent px-3 py-3 text-center font-bold">{site.bookingLabel}</a>
            {site.phone && <a href={tel(site.phone)} className="rounded-full px-3 py-3 text-center font-bold">{site.phone}</a>}
          </div>
        </details>
      </div>
    </header>
  );
}

export function Hero() {
  const h = site.hero;
  return (
    <section className="bg-soft">
      <div className={`${wrap} grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2`}>
        <div className="flex flex-col gap-7">
          {h.badge && <p className="self-start rounded-full border border-ink/10 bg-paper px-4 py-2 text-sm font-semibold">{h.badge}</p>}
          <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl">{h.title}</h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{h.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={h.primaryCta.href} variant="dark">{h.primaryCta.label}</Button>
            {h.secondaryCta.label && <Button href={h.secondaryCta.href} variant="outline">{h.secondaryCta.label}</Button>}
          </div>
          {h.highlights.length > 0 && (
            <dl className="grid max-w-lg grid-cols-3 gap-3">
              {h.highlights.map((s) => (
                <div key={s.label} className="rounded-2xl border border-ink/10 bg-paper p-4">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-2xl font-extrabold sm:text-3xl">{s.value}</dd>
                  <dd className="text-sm text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
        <Photo src={h.image} alt={h.imageAlt} className="aspect-[4/3] w-full rounded-[2rem] lg:aspect-[4/5]" />
      </div>
    </section>
  );
}

export function TrustStrip() {
  if (site.trust.length === 0) return null;
  return (
    <section className="border-b border-ink/10">
      <ul className={`${wrap} flex flex-wrap justify-between gap-x-10 gap-y-3 py-6 font-semibold text-muted`}>
        {site.trust.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </section>
  );
}

export function Services() {
  if (site.services.length === 0) return null;
  return (
    <section id="services" className="scroll-mt-24">
      <div className={`${wrap} flex flex-col gap-12 py-20 sm:py-28`}>
        <h2 className={h2}>{site.servicesTitle}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.services.map((s) => (
            <article key={s.title} className="flex flex-col overflow-hidden rounded-3xl border border-ink/10">
              <Photo src={s.image} alt={s.title} className="aspect-[16/10] w-full" />
              <div className="flex flex-grow flex-col gap-4 p-7">
                <h3 className="font-display text-2xl font-extrabold">{s.title}</h3>
                <p className="leading-relaxed text-muted">{s.text}</p>
                {s.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {s.tags.map((t) => <li key={t} className="rounded-full bg-soft px-3 py-1.5 text-sm font-semibold">{t}</li>)}
                  </ul>
                )}
                <a href={s.href} className="mt-auto pt-2 font-bold underline decoration-accent decoration-2 underline-offset-4">
                  View {s.title.toLowerCase()} services
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  if (site.steps.length === 0) return null;
  return (
    <section className="bg-ink text-paper">
      <div className={`${wrap} flex flex-col gap-12 py-20 sm:py-28`}>
        <h2 className={`${h2} max-w-2xl`}>{site.stepsTitle}</h2>
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {site.steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-3 rounded-3xl border border-paper/15 p-7">
              <span className="font-display text-5xl font-extrabold text-accent">{i + 1}</span>
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="leading-relaxed text-paper/75">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Reviews() {
  if (site.reviews.length === 0) return null;
  return (
    <section id="reviews" className="scroll-mt-24">
      <div className={`${wrap} flex flex-col gap-12 py-20 sm:py-28`}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className={`${h2} max-w-2xl`}>{site.reviewsTitle}</h2>
          {site.reviewsLink.href && (
            <a href={site.reviewsLink.href} className="font-bold underline decoration-accent decoration-2 underline-offset-4">{site.reviewsLink.label}</a>
          )}
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {site.reviews.map((r) => (
            <figure key={r.name} className="flex flex-col gap-6 rounded-3xl bg-soft p-7">
              <blockquote className="text-lg font-medium leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-auto text-sm text-muted">
                <strong className="text-ink">{r.name}</strong>, {r.meta}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Offer() {
  const o = site.offer;
  if (!o.title) return null;
  return (
    <section className="px-5 sm:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] bg-accent p-8 text-ink sm:p-14 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h2 className={h2}>{o.title}</h2>
          {o.price && (
            <p className="flex items-baseline gap-3">
              <span className="font-display text-6xl font-extrabold">{o.price}</span>
              <span className="text-lg font-bold">{o.priceNote}</span>
            </p>
          )}
          <div><Button href={o.cta.href} variant="dark">{o.cta.label}</Button></div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {o.perks.map((p) => (
            <li key={p.title} className="rounded-2xl bg-paper/60 p-5">
              <p className="text-lg font-extrabold">{p.title}</p>
              <p className="mt-1">{p.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  if (site.faqs.length === 0) return null;
  return (
    <section id="faq" className="scroll-mt-24">
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-5 py-20 sm:px-8 sm:py-28">
        <h2 className={h2}>{site.faqTitle}</h2>
        <div>
          {site.faqs.map((f, i) => (
            <details key={f.q} className="group border-b border-ink/10" open={i === 0}>
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 py-5 text-lg font-bold">
                {f.q}
                <span aria-hidden="true" className="faq-icon flex size-9 shrink-0 items-center justify-center rounded-full bg-soft text-2xl transition-transform group-open:bg-ink group-open:text-paper">+</span>
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  const c = site.closing;
  if (!c.title) return null;
  return (
    <section className="mt-20 bg-ink text-paper sm:mt-28">
      <div className={`${wrap} flex flex-wrap items-center justify-between gap-8 py-20`}>
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 className={h2}>{c.title}</h2>
          {c.text && <p className="text-lg text-paper/75">{c.text}</p>}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={site.bookingUrl}>{site.bookingLabel}</Button>
          {site.phone && <Button href={tel(site.phone)} variant="outline-light">{site.phone}</Button>}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper/75">
      <div className={`${wrap} flex flex-col gap-12 border-t border-paper/10 py-14`}>
        {site.locations.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {site.locations.map((l) => (
              <address key={l.name} className="flex flex-col gap-1 not-italic">
                <p className="font-bold text-paper">{l.name}</p>
                <p>{l.address}</p>
                {l.phone && <a href={tel(l.phone)} className="hover:text-paper">{l.phone}</a>}
              </address>
            ))}
          </div>
        )}
        <div className="flex flex-wrap justify-between gap-4 text-sm">
          <p>{site.legal}</p>
          <div className="flex flex-wrap gap-5">
            {site.email && <a href={`mailto:${site.email}`} className="hover:text-paper">{site.email}</a>}
            {site.social.map((s) => <a key={s.label} href={s.href} className="hover:text-paper">{s.label}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
