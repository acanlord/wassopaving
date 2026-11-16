import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";
import wassoLogo from "@/assets/wasso_logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Our Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-primary bg-[#414141] text-asphalt-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-2 py-2 sm:gap-4 sm:px-5 sm:py-3 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img
            src={wassoLogo}
            alt="Wasso Paving"
            className="h-auto w-24 min-[360px]:w-28 sm:w-44 lg:w-48"
            width={1774}
            height={887}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-asphalt-foreground/85 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 bg-white px-4 py-3 font-display text-lg leading-none text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phoneDisplay}
          </a>
          <Link
            to="/contact"
            className="flex items-center gap-1 bg-primary px-2 py-2.5 font-display text-base leading-none text-primary-foreground transition-colors hover:bg-white hover:text-primary sm:gap-2 sm:px-5 sm:py-3 sm:text-xl"
          >
            <span className="sm:hidden">Quote</span>
            <span className="hidden sm:inline">Free Quote</span>
            <ArrowUpRight className="hidden size-4 sm:block" aria-hidden="true" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="p-1.5 text-asphalt-foreground sm:p-2 md:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 px-5 py-4 font-display text-2xl text-asphalt-foreground"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="block bg-primary px-5 py-4 font-display text-2xl text-primary-foreground"
          >
            Call {site.phoneDisplay}
          </a>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block border-b border-white/10 px-5 py-4 font-display text-2xl text-primary"
          >
            Request a Free Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
