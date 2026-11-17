import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, HardHat, MapPinned, Phone, Star } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EstimateForm } from "@/components/EstimateForm";
import { reviews, services, site } from "@/lib/site";
import pageMetadata from "@/lib/page-metadata.json";
import heroImg from "@/assets/hero-paving.jpg";
import workDriveway from "@/assets/work-driveway.jpg";
import workSealcoat from "@/assets/work-sealcoat.jpg";
import workOverlay from "@/assets/work-overlay.jpg";
import aboutEquipment from "@/assets/about-equipment.jpg";

const { title, description } = pageMetadata.home;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `${site.url}/` },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: site.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${site.url}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          url: site.url,
          description,
          telephone: "+1-925-565-9048",
          areaServed: site.serviceAreas,
          address: {
            "@type": "PostalAddress",
            addressRegion: "CA",
            addressCountry: "US",
          },
          priceRange: "$$",
          openingHours: "Mo-Sa 07:00-18:00",
          makesOffer: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.blurb },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="relative min-h-[620px] overflow-hidden sm:min-h-[700px]">
        <img
          src={heroImg}
          alt="Wasso Paving crew laying fresh asphalt on a commercial parking lot at sunset"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="asphalt-scrim relative flex min-h-[620px] items-center sm:min-h-[700px]">
          <div className="mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="max-w-4xl text-asphalt-foreground">
              <span className="inline-flex items-center gap-2 bg-primary px-3 py-2 text-xs font-bold uppercase tracking-wider text-primary-foreground sm:px-4 sm:text-sm">
                <Star className="size-4 shrink-0 fill-current" aria-hidden="true" />
                <span className="whitespace-nowrap sm:hidden">Serving {site.areaShort}</span>
                <span className="hidden whitespace-nowrap sm:inline">
                  Paving across {site.areaShort}
                </span>
              </span>
              <h1 className="mt-6 max-w-4xl text-5xl leading-[0.9] sm:text-7xl lg:text-8xl">
                Paving services
                <br />
                you can rely on
              </h1>
              <p className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-asphalt-foreground/90 sm:text-xl">
                Family-owned, locally trusted asphalt paving for homes and businesses — built on 25+
                years of experience.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="btn-hard inline-flex items-center gap-2 bg-primary px-7 py-5 font-display text-2xl leading-none text-primary-foreground"
                >
                  Free Quote <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 border-2 border-primary bg-white px-7 py-5 font-display text-2xl leading-none text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
          {[
            { icon: HardHat, label: "25+ years on Bay Area asphalt" },
            { icon: BadgeCheck, label: "Written bids, no change-order games" },
            { icon: MapPinned, label: "Residential & commercial, any size" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="size-6 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div className="self-center">
            <span className="eyebrow">Start with a free estimate</span>
            <h2 className="mt-3 text-4xl sm:text-5xl">Tell us about your project</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              From a driveway to a commercial lot, we'll take a look, answer your questions, and
              provide a clear written estimate.
            </p>
          </div>
          <div className="bg-card p-6 shadow-lg sm:p-8">
            <EstimateForm />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <img
          src={aboutEquipment}
          alt="Wasso Paving equipment fleet parked at dusk"
          width={1280}
          height={960}
          loading="lazy"
          className="w-full object-cover"
        />
        <div>
          <span className="eyebrow">Locally owned</span>
          <h2 className="mt-3 text-4xl sm:text-5xl">Your neighborhood paving crew</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Wasso Paving is a family-run asphalt contractor working out of the East Bay. We run our
            own crews and our own equipment, which means the person who bids your job is the person
            standing on it while the paver rolls.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From a single cracked driveway to a multi-acre commercial lot, we prep the base
            properly, fix the drainage first, and leave a surface that lasts.
          </p>
          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 border-2 border-asphalt px-5 py-3 font-display text-xl leading-none transition-colors hover:bg-asphalt hover:text-asphalt-foreground"
          >
            About Us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-asphalt text-asphalt-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <span className="eyebrow">Our services</span>
          <h2 className="mt-3 max-w-2xl text-4xl sm:text-5xl">
            Everything asphalt, start to finish
          </h2>
          <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                to="/services"
                className="group bg-asphalt p-7 transition-colors hover:bg-secondary"
              >
                <span className="font-display text-5xl text-primary/30 transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-asphalt-foreground/70">{s.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                  More <ArrowRight className="size-3.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
            <div className="hazard-stripe hidden lg:block" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className="mt-3 text-4xl sm:text-5xl">Recent work</h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-display text-xl text-foreground hover:text-primary"
          >
            See all work <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {[
            { src: workDriveway, alt: "New asphalt residential driveway" },
            { src: workOverlay, alt: "Commercial parking lot overlay in progress" },
            { src: workSealcoat, alt: "Worker seal coating an asphalt lot" },
          ].map((img) => (
            <img
              key={img.alt}
              src={img.src}
              alt={img.alt}
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <span className="eyebrow">Client reviews</span>
          <h2 className="mt-3 text-4xl sm:text-5xl">What our customers say</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="border-l-4 border-primary bg-white/5 p-7">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-secondary-foreground/80">
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-5 text-xs font-bold uppercase tracking-widest">
                  {r.name}
                  <span className="block font-normal tracking-normal normal-case text-secondary-foreground/50">
                    {r.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="hazard-stripe h-3" />
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-14">
          <div>
            <h2 className="text-4xl sm:text-5xl">Ready for a smooth surface?</h2>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest">
              Free on-site estimates across {site.areaShort}
            </p>
          </div>
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 bg-asphalt px-7 py-4 font-display text-2xl leading-none text-asphalt-foreground transition-transform hover:translate-x-1"
          >
            <Phone className="size-5" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
