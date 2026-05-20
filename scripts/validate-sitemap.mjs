#!/usr/bin/env node
/**
 * Sitemap validator — no external dependencies.
 * Usage: node scripts/validate-sitemap.mjs [path-to-sitemap.xml]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const sitemapPath =
  process.argv[2] ??
  path.resolve(__dirname, "../artifacts/zentrix-solutions/public/sitemap.xml");

if (!fs.existsSync(sitemapPath)) {
  console.error(`ERROR: File not found: ${sitemapPath}`);
  process.exit(1);
}

const xml = fs.readFileSync(sitemapPath, "utf-8");

const errors = [];
const warnings = [];

// 1. Must start with XML declaration
if (!xml.trimStart().startsWith("<?xml")) {
  errors.push('Missing XML declaration "<?xml version=..."');
}

// 2. Must contain urlset with correct namespace
if (!xml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')) {
  errors.push('Missing or incorrect <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
}

// 3. Must NOT contain HTML/app-shell elements
const forbidden = ["<html", "<div", "<script", "<body", "<head"];
for (const tag of forbidden) {
  if (xml.toLowerCase().includes(tag)) {
    errors.push(`Forbidden HTML element found: ${tag}`);
  }
}

// 4. All <loc> must contain the correct domain
const locMatches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
const DOMAIN = "https://www.reldio.eu";

for (const [, loc] of locMatches) {
  if (!loc.startsWith(DOMAIN)) {
    errors.push(`<loc> does not start with ${DOMAIN}: ${loc}`);
  }
}

// 5. Trailing slash consistency: only homepage may have trailing slash
for (const [, loc] of locMatches) {
  const path_ = loc.replace(DOMAIN, "");
  if (path_ !== "/" && path_.endsWith("/")) {
    errors.push(`Non-homepage URL has trailing slash: ${loc}`);
  }
}

// 6. Every <url> must have a <lastmod>
const urlBlocks = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
let missingLastmod = 0;
for (const [, block] of urlBlocks) {
  if (!block.includes("<lastmod>")) {
    const locMatch = block.match(/<loc>(.*?)<\/loc>/);
    warnings.push(`Missing <lastmod> for: ${locMatch?.[1] ?? "(unknown)"}`);
    missingLastmod++;
  }
}

// 7. All lastmod values must be valid ISO dates (YYYY-MM-DD)
const lastmodMatches = [...xml.matchAll(/<lastmod>(.*?)<\/lastmod>/g)];
const isoDate = /^\d{4}-\d{2}-\d{2}$/;
for (const [, date] of lastmodMatches) {
  if (!isoDate.test(date.trim())) {
    errors.push(`Invalid lastmod format: "${date}" (expected YYYY-MM-DD)`);
  }
}

// 8. Count URLs
console.log(`\n=== Sitemap Validation: ${path.basename(sitemapPath)} ===\n`);
console.log(`Total <url> entries: ${urlBlocks.length}`);
console.log(`Total <loc> entries: ${locMatches.length}`);
console.log(`Total <lastmod> entries: ${lastmodMatches.length}`);

if (errors.length === 0 && warnings.length === 0) {
  console.log("\n✅ All checks passed — sitemap is valid.\n");
  process.exit(0);
} else {
  if (warnings.length > 0) {
    console.log("\n⚠️  Warnings:");
    warnings.forEach((w) => console.log("  - " + w));
  }
  if (errors.length > 0) {
    console.log("\n❌ Errors:");
    errors.forEach((e) => console.log("  - " + e));
    console.log();
    process.exit(1);
  } else {
    console.log("\n✅ No errors (warnings only).\n");
    process.exit(0);
  }
}
