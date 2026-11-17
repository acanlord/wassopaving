import { readFile, writeFile } from "node:fs/promises";

const metadata = JSON.parse(
  await readFile(new URL("../src/lib/page-metadata.json", import.meta.url), "utf8"),
);
const templatePath = new URL("../dist/index.html", import.meta.url);
const template = await readFile(templatePath, "utf8");

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceExactlyOnce(html, pattern, replacement, field) {
  const matches = html.match(pattern);
  if (matches?.length !== 1) {
    throw new Error(`Expected one ${field} in the built HTML, found ${matches?.length ?? 0}`);
  }
  return html.replace(pattern, replacement);
}

for (const page of Object.values(metadata)) {
  const canonical = `https://wassopaving.com${page.path}`;
  let html = replaceExactlyOnce(
    template,
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    "description",
  );
  html = replaceExactlyOnce(
    html,
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${canonical}" />`,
    "canonical",
  );
  html = replaceExactlyOnce(
    html,
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(page.title)}</title>`,
    "title",
  );
  html = replaceExactlyOnce(
    html,
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    "Open Graph title",
  );
  html = replaceExactlyOnce(
    html,
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    "Open Graph description",
  );
  html = replaceExactlyOnce(
    html,
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${canonical}" />`,
    "Open Graph URL",
  );
  html = replaceExactlyOnce(
    html,
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    "Twitter title",
  );
  html = replaceExactlyOnce(
    html,
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    "Twitter description",
  );

  const outputPath =
    page.path === "/" ? templatePath : new URL(`../dist${page.path}.html`, import.meta.url);
  await writeFile(outputPath, html);
}
