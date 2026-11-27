// Spotlight @crisxai5 — hand-in program.
// The entry itself is the published X post; this program's single job is to
// place the repository's POST.json (which names the post's address) into the
// output directory so the house can read it from there.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output directory if it is not there yet (never remove anything),
// then copy POST.json across byte for byte.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "POST.json"), join(outDir, "POST.json"));
