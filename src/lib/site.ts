export const site = {
  name: "Wasso Paving",
  phoneDisplay: "(925) 565-9048",
  phoneHref: "tel:+19255659048",
  areaShort: "the Bay Area",
  areaLong: "the San Francisco Bay Area & Northern California",
};

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "paving",
    title: "Asphalt Paving",
    blurb:
      "New driveways, parking lots, and private roads built on a properly compacted base for decades of service.",
    details: [
      "Residential driveways & private roads",
      "Commercial lots and truck aprons",
      "Full-depth removal and replacement",
      "Compacted aggregate base and hot-mix asphalt",
    ],
  },
  {
    slug: "overlays",
    title: "Overlays",
    blurb:
      "A fresh asphalt surface bonded over sound existing pavement — smooth, black, and far cheaper than a full rebuild.",
    details: [
      "1.5\" to 3\" hot-mix overlays",
      "Grind and taper at transitions",
      "Level courses for ponding areas",
      "Drainage corrected before paving",
    ],
  },
  {
    slug: "seal-coating",
    title: "Seal Coating",
    blurb:
      "Protective sealer and crack fill that blocks water, oil, and UV so your pavement stops aging early.",
    details: [
      "Hot-pour crack filling",
      "Two-coat squeegee or spray application",
      "Oil-spot priming",
      "Fresh line striping and stencils",
    ],
  },
  {
    slug: "patching",
    title: "Patching",
    blurb:
      "Fast, clean repairs for potholes, alligatored areas, and failed edges before they spread across the lot.",
    details: [
      "Saw-cut and dig-out patching",
      "Skin patching and pothole repair",
      "Trench and utility cut restoration",
      "Same-week emergency repairs",
    ],
  },
  {
    slug: "grading",
    title: "Grading",
    blurb:
      "Site prep and grading that gets water moving the right direction — the part nobody sees and everything depends on.",
    details: [
      "Excavation and subgrade prep",
      "Base rock placement and compaction",
      "Drainage and slope correction",
      "Gravel lots and road repair",
    ],
  },
];

export const reviews = [
  {
    name: "Dana R.",
    role: "Property Manager, Concord",
    text: "Wasso repaved two of our apartment lots over a single weekend. Crew showed up when they said, kept residents informed, and the striping is dead straight. Easiest contractor call I make.",
  },
  {
    name: "Miguel A.",
    role: "Homeowner, Walnut Creek",
    text: "Our driveway had cracks running the whole length. They ground it, fixed the drainage at the garage, and overlaid it. Looks brand new and water finally runs off it.",
  },
  {
    name: "Sharon K.",
    role: "Retail Center Owner",
    text: "Fair bid, no surprise change orders, and they sealed and striped after hours so we never lost a parking space during business hours.",
  },
];
