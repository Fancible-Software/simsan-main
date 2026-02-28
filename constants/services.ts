export interface Service {
  slug: string;
  title: string;
  shortTitle: string; // For hero section split title
  description: string;
  longDescription: string;
  subheading: string;
  benefits: string[];
  heroImage: string;
  galleryImages: string[];
  area: string;
  typesOfService: string[];
  typeOfServiceTitle: string;
}

export const SERVICES: Service[] = [
  {
    slug: "roof-gutter-cleaning",
    title: "Roof & Gutter Cleaning",
    shortTitle: "Roof &",
    description: "Clogged gutters can cause water to back up into your roof, walls and foundation. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
    longDescription: "Tired of climbing ladders and risking your safety to clean your roof and gutters? Simsan Fraser Maintenance Roof & Gutter Cleaning is here to help. For over 4 years, we've been the trusted name in the lower mainland and fraser valley for reliable, professional roof and gutter cleaning services. Our trained technicians don't just clean — they inspect, protect and extend the life of your roof and gutter system. We remove moss, leaves and debris, ensure proper water flow and handle minor repairs on the spot. And once we're done, we leave your property spotless.",
    subheading: "Serving the Lower Mainland and Fraser Valley Area",
    typeOfServiceTitle: "BELOW ARE THE TYPE OF ROOFS CLEANED BY US",
    typesOfService: [
      "Asphalt Shingle Roof",
      "Concrete Tile Roof",
      "Spanish Tile Roof",
      "Flat Roof",
      "Rubber Roof",
      "Cedar Roof"
    ],
    benefits: [
      "Experienced professionals with 4+ years of expertise",
      "Complete roof & gutter care — cleaning, inspection, moss removal and minor repairs",
      "No-mess guarantee — we leave your home clean and tidy",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/new/roof_cleaning/roof_cleaning_1.webp",
    galleryImages: [
      "/new/roof_cleaning/roof_cleaning_1.webp",
      "/new/roof_cleaning/roof_cleaning_2.webp",
      "/new/roof_cleaning/roof_cleaning_3.webp",
      "/new/roof_cleaning/roof_cleaning_4.jpg"
    ],
    area: "Lower Mainland and Fraser Valley Area"
  },
  {
    slug: "window-washing",
    title: "Window Washing",
    shortTitle: "Water-Fed Pole",
    description: "Our water-fed pole window washing service delivers a safer, more effective and environmentally friendly way to keep your windows crystal clear. Using extendable carbon-fiber poles and 100% purified, spot-free water, we clean your windows thoroughly—without ladders, harsh chemicals or streaks.",
    longDescription: "Our water-fed pole window washing service delivers a safer, more effective and environmentally friendly way to keep your windows crystal clear. Using extendable carbon-fiber poles and 100% purified, spot-free water, we clean your windows thoroughly—without ladders, harsh chemicals or streaks. This advanced system allows us to safely wash windows up to several stories high while working from the ground. Soft-bristled brushes gently loosen dirt, pollen and grime, while purified water rinses the glass clean and dries naturally without leaving residue. Water-fed pole cleaning is especially effective for regular maintenance, helping your windows stay cleaner for longer while protecting frames, seals and surrounding surfaces. At Simsan Fraser Maintenance Ltd, we combine professional equipment with trained technicians to ensure every window is cleaned with care and precision—leaving your home or business brighter, cleaner and more inviting.",
    subheading: "Serving the Lower Mainland and Fraser Valley Area",
    typeOfServiceTitle: "Why choose water-fed pole window cleaning?",
    typesOfService: [
      "Spot-free, streak-free results using purified water",
      "Safe for high and hard-to-reach windows",
      "No ladders or damage to siding, landscaping or frames",
      "Eco-friendly — no soaps or chemicals",
      "Ideal for residential and commercial properties"
    ],
    benefits: [
      "Spot-free, streak-free results using purified water",
      "Safe for high and hard-to-reach windows",
      "No ladders or damage to siding, landscaping or frames",
      "Eco-friendly — no soaps or chemicals",
      "Ideal for residential and commercial properties"
    ],
    heroImage: "/window-washing/window-washing-1.jpg",
    galleryImages: [
      "/home-about-img1.png",
      "/home-about-imp2.png",
      "/homepage1.png"
    ],
    area: "Lower Mainland and Fraser Valley Area"
  },
  {
    slug: "soft-washing",
    title: "Soft Washing",
    shortTitle: "Vinyl Siding",
    description: "Our vinyl siding soft washing service uses a water-fed pole brush system to safely and effectively clean your home's exterior without the risk of damage caused by high pressure. This method combines low-pressure water, soft-bristle brushes and professional-grade cleaning solutions to gently remove dirt, algae, mildew, pollen and environmental buildup from vinyl siding.",
    longDescription: "Our vinyl siding soft washing service uses a water-fed pole brush system to safely and effectively clean your home's exterior without the risk of damage caused by high pressure. This method combines low-pressure water, soft-bristle brushes and professional-grade cleaning solutions to gently remove dirt, algae, mildew, pollen and environmental buildup from vinyl siding. Using a water-fed pole allows our technicians to clean upper-level siding safely from the ground, reducing the need for ladders while ensuring consistent, thorough coverage. The soft-bristle brush agitates grime without scratching, while the low-pressure rinse leaves your siding clean, bright and refreshed. This method is especially effective in the Lower Mainland and Fraser Valley climate, where moisture promotes algae and mildew growth. Regular soft washing helps protect vinyl siding from long-term staining and deterioration while keeping your home looking its best year-round. At Simsan Fraser Maintenance Ltd, we provide professional vinyl siding soft washing services across Lower Mainland and Fraser Valley. Our experienced team uses industry-approved equipment and techniques to ensure safe, reliable and long-lasting results for your home.",
    subheading: "Serving the Lower Mainland & Fraser Valley",
    typeOfServiceTitle: "Why choose water-fed pole soft washing for vinyl siding?",
    typesOfService: [
      "Safe, low-pressure cleaning designed specifically for vinyl siding",
      "Soft-bristle brushes prevent scratching or surface damage",
      "Effectively removes algae, mildew and organic staining",
      "Ideal for multi-story homes and hard-to-reach areas",
      "Helps restore curb appeal and extend siding lifespan"
    ],
    benefits: [
      "Safe, low-pressure cleaning designed specifically for vinyl siding",
      "Soft-bristle brushes prevent scratching or surface damage",
      "Effectively removes algae, mildew and organic staining",
      "Ideal for multi-story homes and hard-to-reach areas",
      "Helps restore curb appeal and extend siding lifespan"
    ],
    heroImage: "/new/soft_washing/soft_washing_1.webp",
    galleryImages: [
      "/home-about-img1.png",
      "/home-about-imp2.png",
      "/homepage1.png"
    ],
    area: "Lower Mainland and Fraser Valley Area"
  },
  // {
  //   slug: "stucco-exterior-wall-soft-washing",
  //   title: "Stucco & Exterior Wall Soft Washing",
  //   shortTitle: "Stucco & Exterior",
  //   description: "Our stucco and exterior wall soft washing service is designed to safely clean delicate and textured surfaces using a pressure washer set to low pressure, combined with professional-grade, biodegradable cleaning solutions. This method effectively removes dirt, algae, mildew, moss and environmental staining without damaging the surface.",
  //   longDescription: "Our stucco and exterior wall soft washing service is designed to safely clean delicate and textured surfaces using a pressure washer set to low pressure, combined with professional-grade, biodegradable cleaning solutions. This method effectively removes dirt, algae, mildew, moss and environmental staining without damaging the surface. Stucco, masonry, painted walls and other textured exteriors require a controlled approach. High pressure can cause erosion, cracks or water intrusion. Our soft washing process allows the cleaning solution to break down organic growth, while the low-pressure rinse gently washes it away—restoring the appearance of your walls while protecting their integrity. Soft washing is especially important in the wet climate of the Lower Mainland and Fraser Valley, where organic growth can quickly discolor stucco and exterior walls. Routine soft washing helps maintain your property's appearance and extends the life of your exterior surfaces. At Simsan Fraser Maintenance Ltd, we provide professional stucco and wall soft washing services across Lower Mainland and Fraser Valley area. Our trained technicians use proper pressure control and proven techniques to deliver safe, consistent and high-quality results.",
  //   subheading: "Serving the Lower Mainland & Fraser Valley",
  //   typeOfServiceTitle: "Surfaces we soft wash:",
  //   typesOfService: [
  //     "Stucco",
  //     "Painted exterior walls",
  //     "Concrete and masonry walls",
  //     "EIFS (synthetic stucco)",
  //     "Brick and block walls"
  //   ],
  //   benefits: [
  //     "Low-pressure cleaning safe for delicate and textured surfaces",
  //     "Effectively removes algae, mold, mildew and grime",
  //     "Longer-lasting results than high-pressure washing",
  //     "Reduces risk of surface damage and water penetration",
  //     "Improves curb appeal and protects exterior finishes"
  //   ],
  //   heroImage: "/home-about-img1.png",
  //   galleryImages: [
  //     "/home-about-img1.png",
  //     "/home-about-imp2.png",
  //     "/homepage1.png"
  //   ],
  //   area: "Lower Mainland and Fraser Valley Area"
  // },
  // {
  //   slug: "pressure-cleaning",
  //   title: "Pressure Cleaning",
  //   shortTitle: "Pressure",
  //   description: "Restore your property's exterior surfaces to like-new condition. Our pressure cleaning service effectively removes mold, mildew, dirt and stains from driveways, walkways, decks and siding.",
  //   longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective pressure cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our pressure washing service restores surfaces to their original beauty, removing dirt, grime and stains with precision and care.",
  //   subheading: "Serving the Greater Seattle & Portland Area",
  //   benefits: [
  //     "Restores surfaces to like-new condition",
  //     "Removes mold, mildew, dirt and stains",
  //     "Safe for driveways, walkways, decks and siding",
  //     "Flexible scheduling to fit your routine"
  //   ],
  //   heroImage: "/home-about-imp2.png",
  //   galleryImages: [
  //     "/home-about-img1.png",
  //     "/home-about-imp2.png",
  //     "/homepage1.png"
  //   ],
  //   area: "Greater Seattle & Portland Area"
  // },
  {
    slug: "christmas-lighting-decoration",
    title: "Christmas Light Installation",
    shortTitle: "Christmas Light",
    description: "Make your home shine this holiday season with professional Christmas light installation from Simsan Fraser Maintenance Ltd. Our team handles everything from design and setup to takedown, creating a festive display that will impress family, friends and neighbors—without the stress or risk of doing it yourself.",
    longDescription: "Make your home shine this holiday season with professional Christmas light installation from Simsan Fraser Maintenance Ltd. Our team handles everything from design and setup to takedown, creating a festive display that will impress family, friends and neighbors—without the stress or risk of doing it yourself. We safely install LED string lights, icicle lights, roofline lights, trees, shrubs and more, ensuring your decorations are secure, evenly spaced and fully functional. Using professional equipment and techniques, we prevent damage to your roof, gutters and landscaping while creating a bright, festive atmosphere. Whether you want a classic, elegant or fully themed display, we bring your vision to life and make your home the highlight of the neighborhood. Our team serves Lower Mainland and Fraser Valley area, ensuring your holidays are bright, stress-free and magical.",
    subheading: "Serving the Lower Mainland & Fraser Valley",
    typeOfServiceTitle: "Our Christmas light services include:",
    typesOfService: [
      "Custom light design for homes and businesses",
      "Professional installation on rooflines, eaves, trees and shrubs",
      "Safe setup using ladders, poles and harnesses as needed",
      "Removal and storage after the holiday season (optional)",
      "Energy-efficient LED lights for long-lasting sparkle"
    ],
    benefits: [
      "Custom light design for homes and businesses",
      "Professional installation on rooflines, eaves, trees and shrubs",
      "Safe setup using ladders, poles and harnesses as needed",
      "Removal and storage after the holiday season (optional)",
      "Energy-efficient LED lights for long-lasting sparkle"
    ],
    heroImage: "/christmas_light_setup/simsan_fraser_christmas_light_setup_1.webp",
    galleryImages: [
      "/christmas_light_setup/simsan_fraser_christmas_light_setup_1.webp",
      "/christmas_light_setup/simsan_fraser_christmas_light_setup_2.webp",
      "/christmas_light_setup/simsan_fraser_christmas_light_setup_3.webp"
    ],
    area: "Lower Mainland and Fraser Valley Area"
  },
  // {
  //   slug: "asphalt-shingle-roof-cleaning",
  //   title: "Asphalt Shingle Roof Cleaning",
  //   shortTitle: "Asphalt Shingle",
  //   description: "Clogged gutters can cause water to back up into your roof, walls and foundation. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective asphalt shingle roof cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   subheading: "Serving the Greater Seattle & Portland Area",
  //   benefits: [
  //     "Professional cleaning removes leaves, needles and debris",
  //     "Prevents water backup and structural damage",
  //     "Extends the life of your roof",
  //     "Flexible scheduling to fit your routine"
  //   ],
  //   heroImage: "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_1.webp",
  //   galleryImages: [
  //     "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_1.jpeg",
  //     "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_2.jpeg",
  //     "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_3.jpeg",
  //     "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_4.jpeg",
  //     "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_5.jpeg",
  //     "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_6.jpeg",
  //     "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_7.jpeg",
  //     "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_8.jpeg",
  //     "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_9.jpeg"
  //   ],
  //   area: "Greater Seattle & Portland Area",
  //   typesOfService: [],
  //   typeOfServiceTitle: ""
  // },
  // {
  //   slug: "cedar-roof-cleaning",
  //   title: "Cedar Roof Cleaning",
  //   shortTitle: "Cedar Roof",
  //   description: "Clogged gutters can cause water to back up into your roof, walls and foundation. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective cedar roof cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   subheading: "Serving the Greater Seattle & Portland Area",
  //   benefits: [
  //     "Professional cleaning removes leaves, needles and debris",
  //     "Prevents water backup and structural damage",
  //     "Extends the life of your cedar roof",
  //     "Flexible scheduling to fit your routine"
  //   ],
  //   heroImage: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_1.jpeg",
  //   galleryImages: [
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_1.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_2.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_3.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_4.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_5.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_6.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_7.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_8.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_9.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_10.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_11.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_12.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_13.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_14.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_15.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_16.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_17.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_18.jpeg",
  //     "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_19.jpeg"
  //   ],
  //   area: "Greater Seattle & Portland Area",
  //   typesOfService: [],
  //   typeOfServiceTitle: ""
  // },
  // {
  //   slug: "window-cleaning",
  //   title: "Window Cleaning",
  //   shortTitle: "Window",
  //   description: "Crystal clear windows enhance your property's appearance and let in more natural light. Our professional window cleaning service removes dirt, grime and streaks for spotless results every time.",
  //   longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective window cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. We don't use any chemicals or soaps to clean windows, ensuring a streak-free, crystal-clear finish that enhances your property's appearance.",
  //   subheading: "Serving the Greater Seattle & Portland Area",
  //   benefits: [
  //     "Streak-free, crystal-clear results every time",
  //     "Chemical-free cleaning methods for safety",
  //     "Professional equipment and techniques",
  //     "Flexible scheduling to fit your routine"
  //   ],
  //   heroImage: "/home-about-img1.png",
  //   galleryImages: [
  //     "/home-about-img1.png",
  //     "/home-about-imp2.png",
  //     "/homepage1.png"
  //   ],
  //   area: "Greater Seattle & Portland Area"
  // },
  // {
  //   slug: "concrete-tile-roof-cleaning",
  //   title: "Concrete Tile Roof Cleaning",
  //   shortTitle: "Concrete Tile",
  //   description: "Clogged gutters can cause water to back up into your roof, walls and foundation. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective concrete tile roof cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   subheading: "Serving the Greater Seattle & Portland Area",
  //   benefits: [
  //     "Professional cleaning removes leaves, needles and debris",
  //     "Prevents water backup and structural damage",
  //     "Extends the life of your concrete tile roof",
  //     "Flexible scheduling to fit your routine"
  //   ],
  //   heroImage: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_1.webp",
  //   galleryImages: [
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_1.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_2.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_3.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_4.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_5.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_6.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_7.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_8.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_9.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_10.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_11.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_12.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_13.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_14.webp",
  //     "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_15.webp"
  //   ],
  //   area: "Greater Seattle & Portland Area",
  //   typesOfService: [],
  //   typeOfServiceTitle: ""
  // },
  // {
  //   slug: "flat-roof-cleaning",
  //   title: "Flat Roof Cleaning",
  //   shortTitle: "Flat Roof",
  //   description: "Clogged gutters can cause water to back up into your roof, walls and foundation. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective flat roof cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   subheading: "Serving the Greater Seattle & Portland Area",
  //   benefits: [
  //     "Professional cleaning removes leaves, needles and debris",
  //     "Prevents water backup and structural damage",
  //     "Extends the life of your flat roof",
  //     "Flexible scheduling to fit your routine"
  //   ],
  //   heroImage: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_1.webp",
  //   galleryImages: [
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_1.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_2.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_3.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_4.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_5.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_6.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_7.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_8.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_9.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_10.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_11.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_12.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_13.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_14.webp",
  //     "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_15.webp"
  //   ],
  //   area: "Greater Seattle & Portland Area",
  //   typesOfService: [],
  //   typeOfServiceTitle: ""
  // },
  {
    slug: "pressure-washing-concrete-floors",
    title: "Pressure Washing for Concrete & Wooden Surfaces",
    shortTitle: "Pressure Washing",
    description: "Our pressure washing services for concrete and wooden surfaces are designed to safely restore the appearance of your outdoor areas while protecting the integrity of the surface. We use professional-grade pressure washing equipment with carefully controlled pressure levels to remove dirt, algae, moss, mildew, grease and buildup without causing damage.",
    longDescription: "Our pressure washing services for concrete and wooden surfaces are designed to safely restore the appearance of your outdoor areas while protecting the integrity of the surface. We use professional-grade pressure washing equipment with carefully controlled pressure levels to remove dirt, algae, moss, mildew, grease and buildup without causing damage. Concrete surfaces such as driveways, sidewalks, patios, garage floors and walkways benefit from pressure washing to remove stains and improve safety by reducing slippery algae and moss. For wooden surfaces like decks, fences and pergolas, we use lower pressure and proper techniques to clean effectively without splintering or etching the wood. Regular pressure washing is especially important in the Lower Mainland and Fraser Valley climate, where moisture promotes algae and organic growth. Routine cleaning helps protect your investment and keeps your property looking clean and well-maintained year-round. At Simsan Fraser Maintenance Ltd, we provide professional concrete and wood pressure washing services across Lower Mainland and Fraser Valley area, delivering consistent, high-quality results you can trust.",
    subheading: "Serving the Lower Mainland & Fraser Valley",
    typeOfServiceTitle: "Surfaces we pressure wash:",
    typesOfService: [
      "Concrete driveways, patios, sidewalks and slabs",
      "Garage floors and parking areas",
      "Wooden decks, fences, railings and stairs",
      "Pool decks and outdoor living spaces"
    ],
    benefits: [
      "Restores curb appeal and brightens outdoor spaces",
      "Removes slippery algae, moss and mildew",
      "Prepares surfaces for sealing or staining",
      "Extends the life of concrete and wood",
      "Improves safety and overall appearance"
    ],
    heroImage: "/pressure_washing_floor/simsan_fraser_pressure_washing_floor_1.webp",
    galleryImages: [
      "/pressure_washing_floor/simsan_fraser_pressure_washing_floor_1.webp",
      "/pressure_washing_floor/simsan_fraser_pressure_washing_floor_2.webp",
      "/pressure_washing_floor/simsan_fraser_pressure_washing_floor_3.webp"
    ],
    area: "Lower Mainland and Fraser Valley Area"
  },
  {
    slug: "interior-exterior-painting",
    title: "Interior & Exterior Painting Services",
    shortTitle: "Painting Services",
    description: "Our interior and exterior painting services are designed to refresh, protect and enhance your property with clean, professional results that last. Whether you're updating a single room or repainting the entire exterior of your home or business, we combine skilled craftsmanship, quality materials and attention to detail to deliver a flawless finish.",
    longDescription: "Our interior and exterior painting services are designed to refresh, protect and enhance your property with clean, professional results that last. Whether you're updating a single room or repainting the entire exterior of your home or business, we combine skilled craftsmanship, quality materials and attention to detail to deliver a flawless finish. For interior painting, we focus on proper preparation, clean lines and minimal disruption to your space. From walls and ceilings to trim, doors and cabinets, we use premium paints and proven techniques to create smooth, long-lasting results that transform your interior. For exterior painting, we protect your property from the elements while improving curb appeal. Our process includes thorough surface preparation—such as washing, scraping, sanding and priming—to ensure the paint adheres properly and withstands the Lower Mainland and Fraser Valley climate. At Simsan Fraser Maintenance Ltd, we proudly provide interior and exterior painting services across Lower Mainland and Fraser Valley area. Our experienced painters deliver reliable, high-quality workmanship with respect for your home or business.",
    subheading: "Serving the Lower Mainland & Fraser Valley",
    typeOfServiceTitle: "Our painting services include:",
    typesOfService: [
      "Interior walls, ceilings, trim, doors and stairwells",
      "Exterior siding, stucco, wood, brick and masonry",
      "Residential and commercial painting",
      "Surface preparation, patching and minor repairs",
      "High-quality, durable paint products"
    ],
    benefits: [
      "Enhances appearance and property value",
      "Protects surfaces from moisture, wear and weather",
      "Clean, consistent and long-lasting results",
      "Saves time and avoids costly mistakes"
    ],
    heroImage: "/painting_services/simsan_paiting_services_1.jpg",
    galleryImages: [
      "/painting_services/simsan_paiting_services_1.jpg",
      "/painting_services/simsan_paiting_services_2.jpg",
      "/painting_services/simsan_paiting_services_3.jpg"
    ],
    area: "Lower Mainland and Fraser Valley Area"
  },
  {
    slug: "epoxy-flooring-installation",
    title: "Epoxy Flooring Installation",
    shortTitle: "Epoxy Flooring",
    description: "Our epoxy flooring solutions provide a durable, attractive and long-lasting finish for both residential and commercial spaces. Epoxy is a high-performance coating applied over concrete, creating a seamless, non-porous surface that resists stains, chemicals, moisture and heavy wear.",
    longDescription: "Our epoxy flooring solutions provide a durable, attractive and long-lasting finish for both residential and commercial spaces. Epoxy is a high-performance coating applied over concrete, creating a seamless, non-porous surface that resists stains, chemicals, moisture and heavy wear. Epoxy flooring is ideal for garages, basements, warehouses, workshops, retail spaces and industrial areas. With proper surface preparation and professional installation, epoxy floors not only enhance appearance but also protect concrete from cracking, dusting and deterioration. Our epoxy flooring systems are designed to perform well in the Lower Mainland and Fraser Valley climate, providing a clean, professional finish that stands up to daily use. At Simsan Fraser Maintenance Ltd, we provide professional epoxy flooring installation services across Lower Mainland and Fraser Valley area, using high-quality materials and proven installation methods for reliable results.",
    subheading: "Durable, Seamless Floors in the Lower Mainland & Fraser Valley",
    typeOfServiceTitle: "Epoxy flooring applications include:",
    typesOfService: [
      "Garage floors",
      "Basements and utility rooms",
      "Commercial and industrial floors",
      "Workshops and warehouses",
      "Retail and showroom spaces"
    ],
    benefits: [
      "Extremely durable and long-lasting",
      "Resistant to chemicals, oil, stains and moisture",
      "Easy to clean and maintain",
      "Slip-resistant options available",
      "Enhances appearance and property value"
    ],
    heroImage: "/new/epoxy_flooring/epoxy_flooring_2.webp",
    galleryImages: [
      "/home-about-img1.png",
      "/home-about-imp2.png",
      "/homepage1.png"
    ],
    area: "Lower Mainland and Fraser Valley Area"
  },
  // {
  //   slug: "pressure-washing-floors",
  //   title: "Pressure Washing Floors",
  //   shortTitle: "Pressure Washing",
  //   description: "Clogged gutters can cause water to back up into your roof, walls and foundation. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective pressure washing floors services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   subheading: "Serving the Greater Seattle & Portland Area",
  //   benefits: [
  //     "Professional cleaning removes leaves, needles and debris",
  //     "Prevents water backup and structural damage",
  //     "Restores floors to like-new condition",
  //     "Flexible scheduling to fit your routine"
  //   ],
  //   heroImage: "/pressure_washing_floor/simsan_fraser_pressure_washing_floor_1.webp",
  //   galleryImages: [
  //     "/pressure_washing_floor/simsan_fraser_pressure_washing_floor_1.webp",
  //     "/pressure_washing_floor/simsan_fraser_pressure_washing_floor_2.webp",
  //     "/pressure_washing_floor/simsan_fraser_pressure_washing_floor_3.webp"
  //   ],
  //   area: "Greater Seattle & Portland Area",
  //   typesOfService: [],
  //   typeOfServiceTitle: ""
  // },
  // {
  //   slug: "roof-blow-and-debris-cleaning",
  //   title: "Roof Blow & Debris Cleaning",
  //   shortTitle: "Roof Blow & Debris",
  //   description: "Clogged gutters can cause water to back up into your roof, walls and foundation. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective roof blow and debris cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   subheading: "Serving the Greater Seattle & Portland Area",
  //   benefits: [
  //     "Professional cleaning removes leaves, needles and debris",
  //     "Prevents water backup and structural damage",
  //     "Extends the life of your roof",
  //     "Flexible scheduling to fit your routine"
  //   ],
  //   heroImage: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_1.webp",
  //   galleryImages: [
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_1.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_2.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_3.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_4.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_5.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_6.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_7.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_8.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_9.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_10.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_11.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_12.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_13.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_14.webp",
  //     "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_15.webp"
  //   ],
  //   area: "Greater Seattle & Portland Area",
  //   typesOfService: [],
  //   typeOfServiceTitle: ""
  // },
  // {
  //   slug: "spanish-tile-roof-cleaning",
  //   title: "Spanish Tile Roof Cleaning",
  //   shortTitle: "Spanish Tile",
  //   description: "Clogged gutters can cause water to back up into your roof, walls and foundation. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective Spanish tile roof cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles and debris to keep your drainage system flowing properly and prevent structural damage.",
  //   subheading: "Serving the Greater Seattle & Portland Area",
  //   benefits: [
  //     "Professional cleaning removes leaves, needles and debris",
  //     "Prevents water backup and structural damage",
  //     "Extends the life of your Spanish tile roof",
  //     "Flexible scheduling to fit your routine"
  //   ],
  //   heroImage: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_1.webp",
  //   galleryImages: [
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_1.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_2.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_3.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_4.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_5.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_6.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_7.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_8.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_9.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_10.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_11.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_12.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_13.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_14.webp",
  //     "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_15.webp"
  //   ],
  //   area: "Greater Seattle & Portland Area",
  //   typesOfService: [],
  //   typeOfServiceTitle: ""
  // },
  // {
  //   slug: "pressure-washing",
  //   title: "Pressure Washing",
  //   shortTitle: "Pressure",
  //   description: "Restore your property's exterior surfaces to like-new condition. Our pressure washing service effectively removes mold, mildew, dirt and stains from driveways, walkways, decks and siding.",
  //   longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective pressure washing services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our pressure washing service restores surfaces to their original beauty, removing dirt, grime and stains with precision and care.",
  //   subheading: "Serving the Greater Seattle & Portland Area",
  //   benefits: [
  //     "Restores surfaces to like-new condition",
  //     "Removes mold, mildew, dirt and stains",
  //     "Safe for driveways, walkways, decks and siding",
  //     "Flexible scheduling to fit your routine"
  //   ],
  //   heroImage: "/home-about-imp2.png",
  //   galleryImages: [
  //     "/home-about-img1.png",
  //     "/home-about-imp2.png",
  //     "/homepage1.png"
  //   ],
  //   area: "Greater Seattle & Portland Area"
  // },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(service => service.slug === slug);
}

