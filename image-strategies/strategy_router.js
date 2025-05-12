export function selectImagePreset(type) {
  if (type === 'ad') {
    return require('./ad_preset.json');
  } else if (type === 'lifestyle') {
    return require('./lifestyle_preset.json');
  } else {
    return {}; // fallback or default
  }
}
