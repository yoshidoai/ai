/**
 * Tweet Enhancer for Yoshido AI
 * Optimizes short messages for engagement and tone on X (formerly Twitter)
 */

import { enhanceText } from '../ai-engine/prompt_system.js';

// Примеры сырых твитов
const rawTweets = [
  "new product soon",
  "market is crazy today",
  "starting a new thread on growth",
  "launching something fun tomorrow"
];

console.log("🚀 Enhancing Tweets:\n");

rawTweets.forEach((raw) => {
  const enhanced = enhanceText(raw, 'x');
  console.log(`Original: ${raw}`);
  console.log(`Enhanced: ${enhanced}\n`);
});
