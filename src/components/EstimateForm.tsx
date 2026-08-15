import { useState } from "react";
import { services } from "@/lib/site";

export function EstimateForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [sent, setSent] = useState(false);

  const field =
    tone === "dark"
      ? "w-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-asphalt-foreground outline-none placeholder:text-asphalt-foreground/40 focus:border-primary"
      : "w-full border border-input bg-card px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary";

  if (sent) {
    return (
      <div className="border-2 border-primary bg-primary/10 p-8 text-center">
        <h3 className="text-2xl">Request received</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Thanks — we'll reach out within one business day to schedule your walkthrough.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input required name="name" placeholder="Full name" className={field} />
        <input required name="phone" type="tel" placeholder="Phone" className={field} />
      </div>
      <input name="email" type="email" placeholder="Email" className={field} />
      <input name="address" placeholder="Property address or city" className={field} />
      <select required name="service" defaultValue="" className={field}>
        <option value="" disabled>
          Choose a service
        </option>
        {services.map((s) => (
          <option key={s.slug} value={s.title}>
            {s.title}
          </option>
        ))}
        <option value="Not sure">Not sure yet</option>
      </select>
      <textarea
        name="details"
        rows={4}
        placeholder="Tell us about the project — size, condition, timeline"
        className={field}
      />
      <button
        type="submit"
        className="btn-hard mt-1 bg-primary px-6 py-4 font-display text-2xl text-primary-foreground"
      >
        Request Free Estimate
      </button>
      <p className={tone === "dark" ? "text-xs text-asphalt-foreground/50" : "text-xs text-muted-foreground"}>
        No obligation. We'll walk the site and give you a written number.
      </p>
    </form>
  );
}
