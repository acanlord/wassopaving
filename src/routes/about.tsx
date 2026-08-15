import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, ShieldCheck, Map } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/lib/site";
import aboutEquipment from "@/assets/about-equipment.jpg";

const title = "About Wasso Paving | Family-Owned Bay Area Asphalt Contractor";
const description =
  "Wasso Paving is a family-owned, locally operated asphalt contractor serving the Bay Area with paving, overlays, seal coating, patching, and grading.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});


const values = [
  {
    icon: Users,
    title: "Family owned",
    text: "You deal with the owner, not a call center. The same face bids the job and stands on it.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    text: "Base prep and drainage come first. Pretty asphalt over a bad base is money thrown away.",
  },
  {
    icon: Map,
    title: "Wide service area",
    text: `We travel across ${site.areaLong} for residential and commercial work of any size.`,
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="bg-asphalt text-asphalt-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <span className="eyebrow">About us</span>
          <h1 className="mt-3 text-5xl sm:text-6xl">
            Locally owned.
            <br />
            <span className="text-primary">Personally accountable.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Wasso Paving started with one truck, one roller, and a simple promise: show up
            when we say we will and leave pavement we'd put in front of our own house. Two
            decades later we run full crews and our own fleet, still out of the East Bay.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We handle overlays, seal coating, patching, grading, and full-depth paving for
            homeowners, HOAs, property managers, and commercial owners. Every job starts
            with a walk of the site and ends with a surface that drains, wears, and looks
            sharp.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Written bids. No surprise change orders. Crews that clean up after themselves.
          </p>
          <Link
            to="/contact"
            className="btn-hard mt-8 inline-block bg-primary px-6 py-4 font-display text-2xl leading-none text-primary-foreground"
          >
            Talk to us
          </Link>
        </div>
        <img
          src={aboutEquipment}
          alt="Wasso Paving fleet of rollers and pavers"
          width={1280}
          height={960}
          loading="lazy"
          className="w-full object-cover"
        />
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <span className="eyebrow">What sets us apart</span>
          <h2 className="mt-3 text-4xl sm:text-5xl">How we work</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map(({ icon: Icon, title: t, text }) => (
              <div key={t} className="border-t-4 border-primary pt-5">
                <Icon className="size-7 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary-foreground/70">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
