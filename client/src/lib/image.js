/**
 * Builds a sized, cropped Unsplash URL for a photo id.
 * Keeps image requests small and consistent across the site.
 */
export function img(id, width = 1600) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}
