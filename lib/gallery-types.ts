export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

// Map category slugs to display names
const categoryDisplayNames: Record<string, string> = {
  "asphalt-shingle-roof-cleaning": "Asphalt Shingle Roof Cleaning",
  "cedar-roof-cleaning": "Cedar Roof Cleaning",
  "christmas-lighting-decoration": "Christmas & Lighting Decoration",
  "concrete-tile-roof-cleaning": "Concrete Tile Roof Cleaning",
  "flat-roof-cleaning": "Flat Roof Cleaning",
  "roof-gutter-cleaning": "Roof Gutter Cleaning",
  "pressure-washing-concrete-floors": "Pressure Washing Concrete Floors",
  "pressure-washing-floors": "Pressure Washing Floors",
  "roof-blow-and-debris-cleaning": "Roof Blow & Debris Cleaning",
  "spanish-tile-roof-cleaning": "Spanish Tile Roof Cleaning",
};

export function getCategoryDisplayName(category: string): string {
  return categoryDisplayNames[category] || category;
}

