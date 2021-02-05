/**
 * Convert text to a URL-safe string
 *
 * @param {String} text Text to convert
 * @return {String}
 */
export function toSlug (text: String): String {
  return text
    .toLowerCase()
    .replace(/ |-{2,}/g, '-')
    .replace(/[^\w-]+/g, '');
}
