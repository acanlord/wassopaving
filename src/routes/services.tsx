import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Phone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { services, site } from "@/lib/site";

const title = "Paving Services | Overlays, Seal Coating & Grading | Wasso Paving";
const description =
  "Asphalt paving, overlays, seal coating, patching, and grading for driveways, parking lots, and private roads across the Bay Area.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});


function ServicesPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="bg-asphalt text-asphalt-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <span className="eyebrow">Our services</span>
          <h1 className="mt-3 text-5xl sm:text-6xl">Expert asphalt services</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-asphalt-foreground/75">
            Five things, done properly. We keep our scope tight so every crew on your
            property knows exactly what good looks like.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl divide-y divide-border px-5">
        {services.map((s, i) => (
          <section key={s.slug} className="grid gap-8 py-14 lg:grid-cols-[auto_1fr_1fr]">
            <span className="font-display text-6xl text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-4xl">{s.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {s.blurb}
              </p>
            </div>
            <ul className="space-y-3">
              {s.details.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {d}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="hazard-stripe h-3" />
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-14">
          <h2 className="text-4xl sm:text-5xl">Not sure what you need?</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 bg-asphalt px-6 py-4 font-display text-2xl leading-none text-asphalt-foreground"
            >
              <Phone className="size-5" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="border-2 border-asphalt px-6 py-4 font-display text-2xl leading-none"
            >
              Get an estimate
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
