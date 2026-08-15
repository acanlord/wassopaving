import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, HardHat, MapPinned, Phone, Star } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EstimateForm } from "@/components/EstimateForm";
import { reviews, services, site } from "@/lib/site";
import heroImg from "@/assets/hero-paving.jpg";
import workDriveway from "@/assets/work-driveway.jpg";
import workSealcoat from "@/assets/work-sealcoat.jpg";
import workOverlay from "@/assets/work-overlay.jpg";
import aboutEquipment from "@/assets/about-equipment.jpg";

const title = "Wasso Paving | Asphalt Paving & Seal Coating in the Bay Area";
const description =
  "Wasso Paving delivers asphalt paving, overlays, seal coating, patching, and grading for homes and businesses across the Bay Area. Call (925) 565-9048 for a free estimate.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Wasso Paving",
          description,
          telephone: "+1-925-565-9048",
          areaServed: "San Francisco Bay Area, California",
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

      <section className="relative">
        <img
          src={heroImg}
          alt="Wasso Paving crew laying fresh asphalt on a commercial parking lot at sunset"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="asphalt-scrim relative">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <div className="text-asphalt-foreground">
              <span className="eyebrow">Licensed & insured · {site.areaShort}</span>
              <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl">
                Asphalt done right
                <br />
                <span className="text-primary">the first time</span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-asphalt-foreground/80">
                Overlays, seal coating, patching, grading, and full paving for driveways,
                parking lots, and private roads throughout {site.areaLong}.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={site.phoneHref}
                  className="btn-hard flex items-center gap-2 bg-primary px-6 py-4 font-display text-2xl leading-none text-primary-foreground"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
                <Link
                  to="/services"
                  className="flex items-center gap-2 border-2 border-asphalt-foreground/30 px-6 py-4 font-display text-2xl leading-none text-asphalt-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Our Services
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="bg-card p-6 shadow-xl sm:p-8">
              <h2 className="text-3xl">Request a Free Estimate</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us about the job and we'll come measure it.
              </p>
              <div className="mt-6">
                <EstimateForm />
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
            Wasso Paving is a family-run asphalt contractor working out of the East Bay. We
            run our own crews and our own equipment, which means the person who bids your
            job is the person standing on it while the paver rolls.
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
                <p className="mt-3 text-sm leading-relaxed text-asphalt-foreground/70">
                  {s.blurb}
                </p>
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
