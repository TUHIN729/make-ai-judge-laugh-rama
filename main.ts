// make-ai-judge-laugh-rama — Make the AI Judge Laugh
// (u-rama-melon-make-the-ai-judge-laugh-302d0825)
//
// Writes a single one-line joke about office life to /output/entry.txt.
// The gate requires UTF-8 text of 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, about office life, true to the office, with a
// surprising last turn — the boss's flattery versus payroll's arithmetic.
const JOKE =
  "My boss calls it 'wearing many hats'; payroll calls it one salary.";

function main(): void {
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  // Never remove the output directory itself: the grader mounts it
  // root-owned. Only make sure it exists, then write into it.
  mkdirSync(outDir, { recursive: true });

  const text = JOKE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  writeFileSync(join(outDir, "entry.txt"), text + "\n", "utf8");
  console.log(`wrote entry.txt (${text.length} chars)`);
}

main();
