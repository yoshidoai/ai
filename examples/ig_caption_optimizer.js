/**
 * Instagram Caption Optimizer
 * Uses Yoshido AI's prompt system to rewrite and enhance Instagram captions
 */

import { optimizeCaption } from '../ai-engine/prompt_system.js';

/**
 * Example usage of Yoshido AI's caption enhancement for Instagram
 */
const rawCaptions = [
  "sunset walk",
  "coffee at my favorite place",
  "just another gym day",
  "new vlog out now!"
];

console.log("🧠 Optimizing Instagram Captions:\n");

rawCaptions.forEach((raw) => {
  const optimized = optimizeCaption(raw, 'instagram');
  console.log(`Raw: ${raw}`);
  console.log(`Optimized: ${optimized}\n`);
});
