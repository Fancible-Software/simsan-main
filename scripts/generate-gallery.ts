import fs from "fs";
import path from "path";
import type { GalleryImage } from "../lib/gallery-types";
import { getCategoryDisplayName } from "../lib/gallery-types";

// Map folder names to category slugs
const folderToCategoryMap: Record<string, string> = {
  asphalt_shingle_roof_cleaning: "asphalt-shingle-roof-cleaning",
  cedar_roof_cleaning: "cedar-roof-cleaning",
  christmas_light_setup: "christmas-lighting-decoration",
  concrete_tile_roof_cleaning: "concrete-tile-roof-cleaning",
  flat_roof_cleaning: "flat-roof-cleaning",
  gutter_cleaning: "roof-gutter-cleaning",
  // pressure_washing_concrete_floors: "pressure-washing-concrete-floors",
  pressure_washing: "pressure-washing-concrete-floors",
  soft_washing: "soft-washing",
  // pressure_washing_floor: "pressure-washing-floors",
  roof_blow_and_debris_cleaning: "roof-blow-and-debris-cleaning",
  spanish_tile_roof: "spanish-tile-roof-cleaning",
  painting_services: "interior-exterior-painting",
  epoxy_flooring: "epoxy-flooring-installation",
  window_washing: "window-washing",
};

/**
 * Reads images from public folder directories and returns them organized by category
 * This script runs at build time to generate a static JSON file
 */
function getGalleryImages(): GalleryImage[] {
  const publicDir = path.join(process.cwd(), "public");
  const images: GalleryImage[] = [];
  let imageId = 1;

  // Get all directories in public folder
  const entries = fs.readdirSync(publicDir, { withFileTypes: true });
  
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    
    const folderName = entry.name;
    const category = folderToCategoryMap[folderName];
    
    // Skip folders that don't have a category mapping (like icons, etc.)
    if (!category) continue;
    
    const folderPath = path.join(publicDir, folderName);
    const files = fs.readdirSync(folderPath);
    
    // Filter for image files only
    const imageFiles = files.filter(
      (file) =>
        file.toLowerCase().endsWith(".jpeg") ||
        file.toLowerCase().endsWith(".jpg") ||
        file.toLowerCase().endsWith(".png") ||
        file.toLowerCase().endsWith(".webp")
    );
    
    // Sort files naturally
    imageFiles.sort((a, b) => {
      const aNum = parseInt(a.match(/\d+/)?.[0] || "0");
      const bNum = parseInt(b.match(/\d+/)?.[0] || "0");
      return aNum - bNum;
    });
    
    // Create image objects
    for (const imageFile of imageFiles) {
      const displayName = getCategoryDisplayName(category);
      images.push({
        id: String(imageId++),
        src: `/${folderName}/${imageFile}`,
        alt: displayName,
        category: category,
      });
    }
  }

  return images;
}

// Generate the gallery JSON file in lib/data so it can be imported directly
const images = getGalleryImages();
const outputDir = path.join(process.cwd(), "lib", "data");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
const outputPath = path.join(outputDir, "gallery.json");
fs.writeFileSync(outputPath, JSON.stringify(images, null, 2));
console.log(`Generated gallery.json with ${images.length} images`);

