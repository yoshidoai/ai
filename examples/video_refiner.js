/**
 * Yoshido AI Video Refiner
 * Applies AI-powered enhancements to raw video content
 */

import { refineVideo } from '../ai-engine/ai_video_editor_core.js';

// Параметры для улучшения видео
const videoInputPath = 'assets/raw_clip.mp4';
const options = {
  stabilize: true,
  autoSubtitles: true,
  mood: 'motivational',  // варианты: 'cinematic', 'calm', 'energetic', etc.
  resolution: '1080p',
};

console.log(`🎬 Processing: ${videoInputPath}`);
console.log(`🔧 Options:`, options);

refineVideo(videoInputPath, options).then((outputPath) => {
  console.log(`✅ Refined video saved to: ${outputPath}`);
}).catch((err) => {
  console.error(`❌ Video enhancement failed: ${err.message}`);
});
