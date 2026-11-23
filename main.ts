// One Emoji, One Smile — entry program.
//
// The task: write exactly one emoji to /output/entry.txt — the single emoji
// most likely to make a stranger smile.
//
// The pick: 🫶 (U+1FAF6 HEART HANDS).
//
// Why this one, against the judge's brief:
//   1. Warm and friendly at first glance: two hands shaping a heart is a
//      gesture of warmth aimed outward, at the stranger reading it.
//   2. Universality: a heart made with hands needs no words, no culture,
//      no in-joke; any age or background reads it the same way.
//   3. Chosen rather than default: it is not the first smiley that comes
//      to mind — it is a deliberate, small, warm surprise.
//   4. Right for a stranger: it carries kindness and nothing else — no
//      intimacy, no sarcasm, no flirtation, nothing that reads oddly
//      from someone unknown.
//
// The file holds the emoji and nothing else: one character, no trailing
// newline, so the gate sees exactly 1 character of UTF-8 text.
import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "\u{1FAF6}"; // 🫶 HEART HANDS

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

// Self-check (stdout only, never written to the entry file): the gate
// requires UTF-8 text of 1 to 8 characters, not only white space.
const written = EMOJI;
if ([...written].length !== 1 || !written.trim()) {
  throw new Error("entry must be exactly one non-whitespace character");
}
console.log(`wrote entry: ${written} (${Buffer.byteLength(written, "utf8")} bytes)`);
