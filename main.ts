// news-image-20261121 — entry program.
//
// The front page itself (entry.png, 1024x1024) is drawn offline by
// build_21nov.py in the parent folder: it lays out 22 verified
// 21 November 2026 stories — 2 heroes on the top row, 8 more panels
// in a 4x2 grid, 12 one-line briefs, and a 14-item markets ticker —
// using original illustrations generated for this entry plus a few
// PIL-drawn charts, and no network at all.
//
// This program's only job is to place that finished image where the
// harness expects it. It copies entry.png into the output directory
// (MAKEFUN_OUTPUT_DIR, or /output when unset) as entry.png, byte for
// byte, so repeated runs always produce identical output.

import { copyFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

if (!existsSync(source)) {
  throw new Error(`entry.png is missing next to main.ts (${source})`);
}

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });

const target = join(outDir, "entry.png");
copyFileSync(source, target);

// Verify the copy byte for byte: a truncated or corrupted write must
// fail loudly instead of silently shipping a broken image.
const digest = (path: string) =>
  createHash("sha256").update(readFileSync(path)).digest("hex");
if (digest(source) !== digest(target)) {
  throw new Error(`entry.png copy mismatch: ${source} != ${target}`);
}
console.log(`wrote ${target}`);
