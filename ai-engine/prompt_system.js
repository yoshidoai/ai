export function enhanceText(text, platform) {
  if (platform === 'x') {
    return `🚀 ${text} — stay tuned! #update`;
  }
  return text;
}

export function optimizeCaption(caption, platform) {
  return `✨ ${caption} #goodvibes #${platform}`;
}
