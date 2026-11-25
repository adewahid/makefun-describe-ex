// Describe Your Ex in One Word — make.fun entry.
// The verdict: "manchild".
// One word, eight letters, no caption needed: the ex who never grew up,
// still waiting for someone else to do the laundry, the dishes, the
// emotional labour — and somehow surprised the relationship ended.
// Why this word wins the head-to-head: it is not a product metaphor
// (the field is flooded with "Unsubscribe" and "Recalled"), it is a
// verdict on a person. Everyone who has dated one recognises it instantly,
// and the joke lands the moment the word is read — no setup, no caption.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "manchild";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`wrote /output/entry.txt: ${WORD} (${WORD.length} chars)`);
