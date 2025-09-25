/**
 * Ensures that image URLs use HTTPS protocol
 * @param url - The image URL to process
 * @returns The URL with HTTPS protocol
 */
export const ensureHttps = (url: string) => {
  // Return local paths as-is
  if (!/^https?:\/\//i.test(url)) return url;
  
  try {
    const u = new URL(url);
    // Convert to HTTPS if it's not already
    if (u.protocol !== 'https:') u.protocol = 'https:';
    return u.toString();
  } catch (error) {
    console.warn('Invalid image URL:', url, error);
    return url; // Return original if URL parsing fails
  }
}
