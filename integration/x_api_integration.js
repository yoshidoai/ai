/**
 * X (formerly Twitter) API Integration for Yoshido AI
 * Handles tweet publishing, media upload, and error reporting
 */

import fetch from 'node-fetch';

/**
 * Upload media to Twitter (X) and get media_id
 * NOTE: Twitter API v1.1 is used for media upload
 * @param {Buffer} mediaBuffer - Binary image/video data
 * @param {string} mimeType - MIME type (e.g., 'image/png')
 * @param {string} bearerToken - OAuth 2.0 Bearer Token
 * @returns {string|null} media_id_string
 */
export async function uploadMedia(mediaBuffer, mimeType, bearerToken) {
  const base64Media = mediaBuffer.toString('base64');

  try {
    const response = await fetch('https://upload.twitter.com/1.1/media/upload.json', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        media_data: base64Media,
        media_type: mimeType
      })
    });

    const json = await response.json();
    return json.media_id_string || null;
  } catch (error) {
    console.error('Media upload failed:', error.message);
    return null;
  }
}

/**
 * Post a tweet (with optional media)
 * @param {string} tweetText - Text content of the tweet
 * @param {string} bearerToken - OAuth 2.0 Bearer Token
 * @param {string|null} mediaId - Optional media_id_string
 */
export async function postTweet(tweetText, bearerToken, mediaId = null) {
  const payload = {
    text: tweetText
  };

  if (mediaId) {
    payload.media = {
      media_ids: [mediaId]
    };
  }

  try {
    const response = await fetch('https://api.twitter.com/2/tweets', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Tweet posting failed:', error.message);
    return null;
  }
}
