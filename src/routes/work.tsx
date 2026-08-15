import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import workDriveway from "@/assets/work-driveway.jpg";
import workSealcoat from "@/assets/work-sealcoat.jpg";
import workOverlay from "@/assets/work-overlay.jpg";
import workGrading from "@/assets/work-grading.jpg";
import workPatching from "@/assets/work-patching.jpg";
import aboutEquipment from "@/assets/about-equipment.jpg";

const title = "Our Work | Paving Projects Portfolio | Wasso Paving";
const description =
  "See recent Wasso Paving projects: residential driveways, commercial lot overlays, seal coating, patching, and site grading across the Bay Area.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/work" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});


const gallery = [
  { src: workDriveway, alt: "New asphalt driveway at a suburban home", caption: "Driveway replacement — Walnut Creek" },
  { src: workOverlay, alt: "Parking lot overlay with roller compactor", caption: "Retail lot overlay — Concord" },
  { src: workSealcoat, alt: "Seal coating an asphalt parking lot", caption: "Seal coat & stripe — Pleasant Hill" },
  { src: workPatching, alt: "Asphalt pothole patch repair", caption: "Pothole patching — Martinez" },
  { src: workGrading, alt: "Skid steer grading a lot before paving", caption: "Grading & base prep — Antioch" },
  { src: aboutEquipment, alt: "Paving equipment fleet at dusk", caption: "Our fleet, ready at 6am" },
];

function WorkPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="bg-asphalt text-asphalt-foreground">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <span className="eyebrow">Portfolio</span>
          <h1 className="mt-3 text-5xl sm:text-6xl">Our work</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-asphalt-foreground/75">
            Driveways, lots, and roads across the East Bay. Same standard every time: solid
            base, correct drainage, clean edges.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((g) => (
          <figure key={g.caption}>
            <img
              src={g.src}
              alt={g.alt}
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-4/3 w-full object-cover"
            />
            <figcaption className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {g.caption}
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="hazard-stripe h-3" />
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-14">
          <h2 className="text-4xl sm:text-5xl">Your project could be next</h2>
          <Link
            to="/contact"
            className="bg-asphalt px-7 py-4 font-display text-2xl leading-none text-asphalt-foreground"
          >
            Request a free estimate
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
