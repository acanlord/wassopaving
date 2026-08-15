import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { EstimateForm } from "@/components/EstimateForm";
import { site } from "@/lib/site";

const title = "Contact Wasso Paving | Free Asphalt Paving Estimates";
const description =
  "Request a free asphalt paving estimate from Wasso Paving. Call (925) 565-9048 or send project details and we'll walk the site with you.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});


function ContactPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <section className="bg-asphalt text-asphalt-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Contact</span>
            <h1 className="mt-3 text-5xl sm:text-6xl">Get a free estimate</h1>
            <p className="mt-5 text-base leading-relaxed text-asphalt-foreground/75">
              Call us or send the details below. We'll come measure the site and give you a
              written price — usually within a couple of days.
            </p>

            <ul className="mt-9 space-y-5">
              <li className="flex items-start gap-4">
                <Phone className="mt-1 size-5 text-primary" aria-hidden="true" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-asphalt-foreground/50">
                    Phone
                  </span>
                  <a
                    href={site.phoneHref}
                    className="block font-display text-3xl leading-none hover:text-primary"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 size-5 text-primary" aria-hidden="true" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-asphalt-foreground/50">
                    Service area
                  </span>
                  <p className="mt-1 text-sm text-asphalt-foreground/80">{site.areaLong}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="mt-1 size-5 text-primary" aria-hidden="true" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-asphalt-foreground/50">
                    Hours
                  </span>
                  <p className="mt-1 text-sm text-asphalt-foreground/80">
                    Monday–Saturday, 7am–6pm
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="border-2 border-primary p-6 sm:p-8">
            <h2 className="text-3xl">Project details</h2>
            <div className="mt-6">
              <EstimateForm tone="dark" />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
