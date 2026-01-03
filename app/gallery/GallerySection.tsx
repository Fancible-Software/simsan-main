"use client";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import HeroBanner, { BreadcrumbItem } from "@/components/HeroBanner";
import { colors } from "@/lib/colors";
import { SERVICES } from "@/constants/services";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

// Sample gallery images - in production, these would come from a CMS or API
const galleryImages: GalleryImage[] = [
  // Asphalt Shingle Roof Cleaning
  { id: "1", src: "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_1.jpeg", alt: "Asphalt Shingle Roof Cleaning", category: "asphalt-shingle-roof-cleaning" },
  { id: "2", src: "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_2.jpeg", alt: "Asphalt Shingle Roof Cleaning", category: "asphalt-shingle-roof-cleaning" },
  { id: "3", src: "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_3.jpeg", alt: "Asphalt Shingle Roof Cleaning", category: "asphalt-shingle-roof-cleaning" },
  { id: "4", src: "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_4.jpeg", alt: "Asphalt Shingle Roof Cleaning", category: "asphalt-shingle-roof-cleaning" },
  { id: "5", src: "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_5.jpeg", alt: "Asphalt Shingle Roof Cleaning", category: "asphalt-shingle-roof-cleaning" },
  { id: "6", src: "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_6.jpeg", alt: "Asphalt Shingle Roof Cleaning", category: "asphalt-shingle-roof-cleaning" },
  { id: "7", src: "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_7.jpeg", alt: "Asphalt Shingle Roof Cleaning", category: "asphalt-shingle-roof-cleaning" },
  { id: "8", src: "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_8.jpeg", alt: "Asphalt Shingle Roof Cleaning", category: "asphalt-shingle-roof-cleaning" },
  { id: "9", src: "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_9.jpeg", alt: "Asphalt Shingle Roof Cleaning", category: "asphalt-shingle-roof-cleaning" },

  // Cedar Roof Cleaning
  { id: "10", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_1.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "11", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_2.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "12", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_3.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "13", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_4.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "14", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_5.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "15", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_6.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "16", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_7.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "17", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_8.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "18", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_9.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "19", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_10.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "20", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_11.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "21", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_12.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "22", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_13.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "23", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_14.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "24", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_15.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "25", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_16.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "26", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_17.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "27", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_18.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },
  { id: "28", src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_19.jpeg", alt: "Cedar Roof Cleaning", category: "cedar-roof-cleaning" },

  // Christmas & Lighting Decoration
  { id: "29", src: "/christmas_light_setup/simsan_fraser_christmas_light_setup_1.jpeg", alt: "Christmas & Lighting Decoration", category: "christmas-lighting-decoration" },
  { id: "30", src: "/christmas_light_setup/simsan_fraser_christmas_light_setup_2.jpeg", alt: "Christmas & Lighting Decoration", category: "christmas-lighting-decoration" },
  { id: "31", src: "/christmas_light_setup/simsan_fraser_christmas_light_setup_3.jpeg", alt: "Christmas & Lighting Decoration", category: "christmas-lighting-decoration" },

  // Concrete Tile Roof Cleaning
  { id: "32", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_1.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "33", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_2.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "34", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_3.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "35", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_4.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "36", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_5.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "37", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_6.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "38", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_7.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "39", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_8.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "40", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_9.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "41", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_10.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "42", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_11.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "43", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_12.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "44", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_13.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "45", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_14.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "46", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_15.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "47", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_16.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "48", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_17.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "49", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_18.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "50", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_19.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "51", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_20.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "52", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_21.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "53", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_22.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "54", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_23.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "55", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_24.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "56", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_25.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },  
  { id: "57", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_26.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "58", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_27.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "59", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_28.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "60", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_29.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },
  { id: "61", src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_30.jpeg", alt: "Concrete Tile Roof Cleaning", category: "concrete-tile-roof-cleaning" },

  // Flat Roof Cleaning
  { id: "62", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_1.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "63", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_2.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "64", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_3.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "65", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_4.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "66", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_5.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "67", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_6.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "68", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_7.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "69", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_8.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "70", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_9.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "71", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_10.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "72", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_11.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "73", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_12.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "74", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_13.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "75", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_14.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "76", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_15.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "77", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_16.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "78", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_17.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "79", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_18.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "80", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_19.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "81", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_20.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "82", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_21.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "83", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_22.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "84", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_23.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "85", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_24.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },
  { id: "86", src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_25.jpeg", alt: "Flat Roof Cleaning", category: "flat-roof-cleaning" },

  // Gutter Cleaning
  { id: "87", src: "/gutter_cleaning/simsan_fraser_gutter_cleaning_1.jpeg", alt: "Roof Gutter Cleaning", category: "roof-gutter-cleaning" },
  { id: "88", src: "/gutter_cleaning/simsan_fraser_gutter_cleaning_2.jpeg", alt: "Roof Gutter Cleaning", category: "roof-gutter-cleaning" },
  { id: "89", src: "/gutter_cleaning/simsan_fraser_gutter_cleaning_3.jpeg", alt: "Roof Gutter Cleaning", category: "roof-gutter-cleaning" },
  { id: "90", src: "/gutter_cleaning/simsan_fraser_gutter_cleaning_4.jpeg", alt: "Roof Gutter Cleaning", category: "roof-gutter-cleaning" },
  { id: "91", src: "/gutter_cleaning/simsan_fraser_gutter_cleaning_5.jpeg", alt: "Roof Gutter Cleaning", category: "roof-gutter-cleaning" },
  { id: "92", src: "/gutter_cleaning/simsan_fraser_gutter_cleaning_6.jpeg", alt: "Roof Gutter Cleaning", category: "roof-gutter-cleaning" },
  

  //Pressue Washing Concrete Floors
  { id: "94", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_1.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "95", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_2.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "96", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_3.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "97", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_4.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "98", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_5.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "99", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_6.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "100", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_7.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "101", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_8.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "102", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_9.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "103", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_10.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "104", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_11.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "105", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_12.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "106", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_13.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "107", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_14.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "108", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_15.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "109", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_16.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "110", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_17.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },
  { id: "111", src: "/pressure_washing_concrete_floors/simsan_fraser_pressure_washing_concrete_floors_18.jpeg", alt: "Pressure Washing Concrete Floors", category: "pressure-washing-concrete-floors" },

  //Pressre Washing Floor
  { id: "112", src: "/pressure_washing_floor/simsan_fraser_pressure_washing_floor_1.jpeg", alt: "Pressure Washing Floors", category: "pressure-washing-floors" },
  { id: "113", src: "/pressure_washing_floor/simsan_fraser_pressure_washing_floor_2.jpeg", alt: "Pressure Washing Floors", category: "pressure-washing-floors" },
  { id: "114", src: "/pressure_washing_floor/simsan_fraser_pressure_washing_floor_3.jpeg", alt: "Pressure Washing Floors", category: "pressure-washing-floors" },
  
  // Roof Blow & Debris Cleaning
  { id: "115", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_1.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "116", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_2.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "117", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_3.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "118", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_4.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "119", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_5.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "120", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_6.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "121", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_7.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "122", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_8.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "123", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_9.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "124", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_10.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "125", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_11.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "126", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_12.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "127", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_13.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "128", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_14.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "129", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_15.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "130", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_16.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "131", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_17.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "132", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_18.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "133", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_19.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "134", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_20.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "135", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_21.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "136", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_22.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "137", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_23.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "138", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_24.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "139", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_25.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "140", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_26.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },
  { id: "141", src: "/roof_blow_and_debris_cleaning/simsan_fraser_roof_blow_and_debris_cleaning_27.jpeg", alt: "Roof Blow & Debris Cleaning", category: "roof-blow-and-debris-cleaning" },

  //Spanish Tile Roof
  { id: "142", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_1.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "143", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_2.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "144", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_3.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "145", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_4.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "146", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_5.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "147", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_6.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "148", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_7.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "149", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_8.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "150", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_9.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "151", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_10.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "152", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_11.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "153", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_12.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "154", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_13.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "155", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_14.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "156", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_15.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "157", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_16.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "158", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_17.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "159", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_18.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "160", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_19.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "161", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_20.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
  { id: "162", src: "/spanish_tile_roof/simsan_fraser_maintaince_spanish_tile_roof_cleaning_21.jpeg", alt: "Spanish Tile Roof Cleaning", category: "spanish-tile-roof-cleaning" },
 

];

const filterOptions = [
  { id: "all", label: "All", slug: "all" },
  ...SERVICES.map(service => ({ id: service.slug, label: service.title, slug: service.slug }))
];

export default function GallerySection({ breadcrumbs }: { breadcrumbs: BreadcrumbItem[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("roof-gutter-cleaning");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = activeFilter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (direction === "prev") {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[prevIndex]);
    } else {
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
        setSelectedImage(filteredImages[prevIndex]);
      } else if (e.key === "ArrowRight") {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
        setSelectedImage(filteredImages[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, filteredImages]);

  return (
    <>
      {/* Hero Section */}
      <HeroBanner
        title="Our Work Gallery"
        breadcrumbs={breadcrumbs}
        backgroundImage="/home-about-imp2.png"
        minHeight="260px"
      />

      {/* Filter Buttons Section */}
      <Box className="bg-white py-8 md:py-12">
        <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
          <Box className="flex flex-wrap justify-center gap-3 md:gap-4">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.slug)}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base lg:text-lg transition-all duration-200 ${
                  activeFilter === filter.slug
                    ? "text-white"
                    : "bg-transparent border-2 text-gray-600 hover:border-gray-400"
                }`}
                style={{
                  backgroundColor: activeFilter === filter.slug ? colors.primary : "transparent",
                  borderColor: activeFilter === filter.slug ? colors.primary : "#e5e7eb",
                }}
              >
                {filter.label}
              </button>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Image Gallery Grid */}
      <Box className="bg-white py-8 md:py-12 lg:py-16">
        <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
          <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredImages.map((image) => (
              <Box
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                onClick={() => handleImageClick(image)}
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "75%", // 4:3 aspect ratio
                  height: 0,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    unoptimized
                  />
                </Box>
                
                {/* Hover Overlay with Zoom Icon */}
                <Box
                  className="absolute inset-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center z-10"
                >
                  <Box
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="md:w-8 md:h-8"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.35-4.35" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Box
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:opacity-70 transition-opacity z-10"
            aria-label="Close"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          {filteredImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 md:left-8 text-white hover:opacity-70 transition-opacity z-10"
                aria-label="Previous image"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 md:right-8 text-white hover:opacity-70 transition-opacity z-10"
                aria-label="Next image"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <Box
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              priority
            />
          </Box>
        </Box>
      )}
    </>
  );
}

