import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock } from "lucide-react";
import { services, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-asphalt text-asphalt-foreground">
      <div className="hazard-stripe h-1.5" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl leading-none">Wasso</span>
            <span className="eyebrow">Paving</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-asphalt-foreground/70">
            Asphalt paving, overlays, seal coating, patching, and grading for homes and
            businesses across {site.areaLong}.
          </p>
        </div>

        <div>
          <h3 className="text-lg">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-asphalt-foreground/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="transition-colors hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-asphalt-foreground/70">
            <li>
              <Link to="/about" className="transition-colors hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/work" className="transition-colors hover:text-primary">
                Our Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-primary">
                Free Estimate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg">Get In Touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-asphalt-foreground/70">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" aria-hidden="true" />
              <a href={site.phoneHref} className="hover:text-primary">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              Serving {site.areaShort}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              Mon–Sat, 7am–6pm
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-asphalt-foreground/50">
        © {new Date().getFullYear()} {site.name}. Licensed & insured asphalt contractor.
      </div>
    </footer>
  );
}
