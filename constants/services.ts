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
}

export const SERVICES: Service[] = [
  {
    slug: "roof-gutter-cleaning",
    title: "Roof & Gutter Cleaning",
    shortTitle: "Roof &",
    description: "Clogged gutters can cause water to back up into your roof, walls, and foundation. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    longDescription: "Tired of climbing ladders and risking your safety to clean your roof and gutters? AA Window, Roof & Gutter Cleaning is here to help. For over 40 years, we've been the trusted name in the Pacific Northwest for reliable, professional roof and gutter cleaning services. Our trained technicians don't just clean — they inspect, protect, and extend the life of your roof and gutter system. We remove moss, leaves, and debris, ensure proper water flow, and handle minor repairs on the spot. And once we're done, we leave your property spotless.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Experienced professionals with 40+ years of expertise",
      "Complete roof & gutter care — cleaning, inspection, moss removal, and minor repairs",
      "No-mess guarantee — we leave your home clean and tidy",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/gutter_cleaning/simsan_fraser_gutter_cleaning_1.webp",
    galleryImages: [
      "/gutter_cleaning/simsan_fraser_gutter_cleaning_1.webp",
      "/gutter_cleaning/simsan_fraser_gutter_cleaning_2.webp",
      "/gutter_cleaning/simsan_fraser_gutter_cleaning_3.webp",
      "/gutter_cleaning/simsan_fraser_gutter_cleaning_4.webp",
      "/gutter_cleaning/simsan_fraser_gutter_cleaning_5.webp",
      "/gutter_cleaning/simsan_fraser_gutter_cleaning_6.webp"
    ],
    area: "Greater Seattle & Portland Area"
  },
  // {
  //   slug: "window-washing",
  //   title: "Window Washing",
  //   shortTitle: "Window",
  //   description: "Crystal clear windows enhance your property's appearance and let in more natural light. Our professional window cleaning service removes dirt, grime, and streaks for spotless results every time.",
  //   longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective window washing services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. We don't use any chemicals or soaps to clean windows, ensuring a streak-free, crystal-clear finish that enhances your property's appearance.",
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
  //   slug: "pressure-cleaning",
  //   title: "Pressure Cleaning",
  //   shortTitle: "Pressure",
  //   description: "Restore your property's exterior surfaces to like-new condition. Our pressure cleaning service effectively removes mold, mildew, dirt, and stains from driveways, walkways, decks, and siding.",
  //   longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective pressure cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our pressure washing service restores surfaces to their original beauty, removing dirt, grime, and stains with precision and care.",
  //   subheading: "Serving the Greater Seattle & Portland Area",
  //   benefits: [
  //     "Restores surfaces to like-new condition",
  //     "Removes mold, mildew, dirt, and stains",
  //     "Safe for driveways, walkways, decks, and siding",
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
    title: "Christmas & Lighting Decoration",
    shortTitle: "Christmas & Lighting",
    description: "Transform your property into a winter wonderland with our professional holiday lighting installation. We handle design, installation, maintenance, and removal for a hassle-free festive season.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective Christmas lighting and decoration services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Nothing we love more than helping a family with a Christmas tree or a holiday look that will be cherished for years to come.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Complete design, installation, and removal service",
      "Beautiful, safe, and eye-catching displays",
      "Professional installation and maintenance",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/christmas_light_setup/simsan_fraser_christmas_light_setup_1.webp",
    galleryImages: [
      "/christmas_light_setup/simsan_fraser_christmas_light_setup_1.webp",
      "/christmas_light_setup/simsan_fraser_christmas_light_setup_2.webp",
      "/christmas_light_setup/simsan_fraser_christmas_light_setup_3.webp"
    ],
    area: "Greater Seattle & Portland Area"
  },
  {
    slug: "asphalt-shingle-roof-cleaning",
    title: "Asphalt Shingle Roof Cleaning",
    shortTitle: "Asphalt Shingle",
    description: "Clogged gutters can cause water to back up into your roof, walls, and foundation. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective asphalt shingle roof cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Professional cleaning removes leaves, needles, and debris",
      "Prevents water backup and structural damage",
      "Extends the life of your roof",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_1.webp",
    galleryImages: [
      "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_1.webp",
      "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_2.webp",
      "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_3.webp",
      "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_4.webp",
      "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_5.webp",
      "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_6.webp",
      "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_7.webp",
      "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_8.webp",
      "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_9.webp"
    ],
    area: "Greater Seattle & Portland Area"
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    shortTitle: "Window",
    description: "Crystal clear windows enhance your property's appearance and let in more natural light. Our professional window cleaning service removes dirt, grime, and streaks for spotless results every time.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective window cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. We don't use any chemicals or soaps to clean windows, ensuring a streak-free, crystal-clear finish that enhances your property's appearance.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Streak-free, crystal-clear results every time",
      "Chemical-free cleaning methods for safety",
      "Professional equipment and techniques",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/home-about-img1.png",
    galleryImages: [
      "/home-about-img1.png",
      "/home-about-imp2.png",
      "/homepage1.png"
    ],
    area: "Greater Seattle & Portland Area"
  },
  {
    slug: "concrete-tile-roof-cleaning",
    title: "Concrete Tile Roof Cleaning",
    shortTitle: "Concrete Tile",
    description: "Clogged gutters can cause water to back up into your roof, walls, and foundation. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective concrete tile roof cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Professional cleaning removes leaves, needles, and debris",
      "Prevents water backup and structural damage",
      "Extends the life of your concrete tile roof",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_1.webp",
    galleryImages: [
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_1.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_2.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_3.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_4.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_5.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_6.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_7.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_8.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_9.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_10.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_11.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_12.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_13.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_14.webp",
      "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_15.webp"
    ],
    area: "Greater Seattle & Portland Area"
  },
  {
    slug: "flat-roof-cleaning",
    title: "Flat Roof Cleaning",
    shortTitle: "Flat Roof",
    description: "Clogged gutters can cause water to back up into your roof, walls, and foundation. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective flat roof cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Professional cleaning removes leaves, needles, and debris",
      "Prevents water backup and structural damage",
      "Extends the life of your flat roof",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_1.webp",
    galleryImages: [
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_1.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_2.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_3.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_4.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_5.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_6.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_7.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_8.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_9.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_10.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_11.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_12.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_13.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_14.webp",
      "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_15.webp"
    ],
    area: "Greater Seattle & Portland Area"
  },
  {
    slug: "pressure-washing-concrete-floors",
    title: "Pressure Washing Concrete Floors",
    shortTitle: "Pressure Washing",
    description: "Clogged gutters can cause water to back up into your roof, walls, and foundation. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective pressure washing concrete floors services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Professional cleaning removes leaves, needles, and debris",
      "Prevents water backup and structural damage",
      "Restores concrete floors to like-new condition",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_1.webp",
    galleryImages: [
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_1.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_2.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_3.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_4.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_5.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_6.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_7.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_8.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_9.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_10.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_11.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_12.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_13.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_14.webp",
      "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_15.webp"
    ],
    area: "Greater Seattle & Portland Area"
  },
  {
    slug: "roof-blow-and-debris-cleaning",
    title: "Roof Blow & Debris Cleaning",
    shortTitle: "Roof Blow & Debris",
    description: "Clogged gutters can cause water to back up into your roof, walls, and foundation. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective roof blow and debris cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Professional cleaning removes leaves, needles, and debris",
      "Prevents water backup and structural damage",
      "Extends the life of your roof",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_1.webp",
    galleryImages: [
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_1.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_2.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_3.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_4.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_5.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_6.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_7.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_8.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_9.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_10.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_11.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_12.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_13.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_14.webp",
      "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_15.webp"
    ],
    area: "Greater Seattle & Portland Area"
  },
  {
    slug: "spanish-tile-roof-cleaning",
    title: "Spanish Tile Roof Cleaning",
    shortTitle: "Spanish Tile",
    description: "Clogged gutters can cause water to back up into your roof, walls, and foundation. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective Spanish tile roof cleaning services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our professional cleaning removes leaves, needles, and debris to keep your drainage system flowing properly and prevent structural damage.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Professional cleaning removes leaves, needles, and debris",
      "Prevents water backup and structural damage",
      "Extends the life of your Spanish tile roof",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_1.webp",
    galleryImages: [
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_1.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_2.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_3.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_4.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_5.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_6.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_7.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_8.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_9.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_10.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_11.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_12.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_13.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_14.webp",
      "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_15.webp"
    ],
    area: "Greater Seattle & Portland Area"
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    shortTitle: "Pressure",
    description: "Restore your property's exterior surfaces to like-new condition. Our pressure washing service effectively removes mold, mildew, dirt, and stains from driveways, walkways, decks, and siding.",
    longDescription: "Since 1985, Simsan Fraser Maintenance Cleaning has been committed to providing the best, most effective pressure washing services in the Pacific Northwest. With 40+ years of expertise, our team arrives promptly and gets the job done right the first time—backed by a 100% satisfaction guarantee. Our pressure washing service restores surfaces to their original beauty, removing dirt, grime, and stains with precision and care.",
    subheading: "Serving the Greater Seattle & Portland Area",
    benefits: [
      "Restores surfaces to like-new condition",
      "Removes mold, mildew, dirt, and stains",
      "Safe for driveways, walkways, decks, and siding",
      "Flexible scheduling to fit your routine"
    ],
    heroImage: "/home-about-imp2.png",
    galleryImages: [
      "/home-about-img1.png",
      "/home-about-imp2.png",
      "/homepage1.png"
    ],
    area: "Greater Seattle & Portland Area"
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(service => service.slug === slug);
}

