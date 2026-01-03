import type { GalleryImage } from "./gallery-types";

// Import the generated gallery data directly
// This file is generated at build time by scripts/generate-gallery.ts
// Using a try-catch import to handle cases where the file doesn't exist yet
let galleryData: GalleryImage[] | null = null;

/**
 * Reads gallery images from the static JSON file generated at build time
 * This avoids bundling fs module into the serverless function
 */
export function getGalleryImages(): GalleryImage[] {
  // Lazy load the gallery data
  if (galleryData === null) {
    try {
      // Import the JSON file directly - this is bundled at build time
      // @ts-ignore - Dynamic import of JSON file
      galleryData = require("./data/gallery.json") as GalleryImage[];
    } catch (error) {
      // Fallback: return empty array if file doesn't exist
      // This can happen during development before running generate:gallery
      console.warn("gallery.json not found. Run 'npm run generate:gallery' to generate it.");
      galleryData = [];
    }
  }
  
  return galleryData;
}

