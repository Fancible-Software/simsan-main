"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { colors } from "@/lib/colors";
import React, { useState } from "react";

const images = [
  {
    src: "/asphalt_shingle_roof_cleaning/simsan_fraser_asphalt_shingle_roof_cleaning_1.webp",
    alt: "Asphalt Shingle Roof Cleaning"
  },
  {
    src: "/cedar_roof_cleaning/simsan_fraser_main_cedar_roof_cleaning_1.webp",
    alt: "Cedar Roof Cleaning"
  },
  {
    src: "/concrete_tile_roof_cleaning/simsan_fraser_concrete_tile_roof_cleaning_1.webp",
    alt: "Concrete Tile Roof Cleaning"
  },
  {
    src: "/flat_roof_cleaning/simsan_fraser_flat_roof_cleaning_1.webp",
    alt: "Flat Roof Cleaning"
  },
  {
    src: "/gutter_cleaning/simsan_fraser_gutter_cleaning_1.webp",
    alt: "Gutter Cleaning"
  }
];

export default function OurWorkCarousel() {
  const [idx, setIdx] = useState(0);

  return (
    <Box className="w-full flex flex-col items-center justify-center py-10 md:py-16 px-4 md:px-2 select-none">
      <p
       
        className="font-extrabold text-center mb-10 text-xl md:text-2xl lg:text-[2rem] font-semibold mb-4"
        style={{ color: colors.primary }}
      >
        Our Work
      </p>
      <Box className="flex items-center justify-center w-full max-w-4xl mx-auto relative px-4 md:px-0">
        {/* Left Arrow - Overlay on mobile, outside on desktop */}
        <IconButton
          onClick={() => setIdx(v => (v - 1 + images.length) % images.length)}
          aria-label="Previous"
          sx={{
            background: colors.reviewCard,
            color: colors.primary,
            width: { xs: 48, md: 64 },
            height: { xs: 48, md: 64 },
            position: 'absolute',
            left: { xs: 8, md: -56 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 4,
            '&:hover': { background: colors.primary, color: 'white' },
            boxShadow: { xs: '0 2px 8px rgba(0,0,0,0.15)', md: 'none' }
          }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="md:w-[34px] md:h-[34px]"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </IconButton>
        {/* Photo Box */}
        <Box className="relative flex-1 flex justify-center items-center w-full max-w-2xl rounded-t-lg overflow-hidden">
          <img
            key={images[idx].src}
            src={images[idx].src}
            alt={images[idx].alt}
            className="block rounded-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[355px] lg:h-[400px]"
            style={{ boxShadow: "0 4px 32px 0 rgba(20,20,20,0.08)" }}
            draggable={false}
          />
        </Box>
        {/* Right Arrow - Overlay on mobile, outside on desktop */}
        <IconButton
          onClick={() => setIdx(v => (v + 1) % images.length)}
          aria-label="Next"
          sx={{
            background: colors.reviewCard,
            color: colors.primary,
            width: { xs: 48, md: 64 },
            height: { xs: 48, md: 64 },
            position: 'absolute',
            right: { xs: 8, md: -56 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 4,
            '&:hover': { background: colors.primary, color: 'white' },
            boxShadow: { xs: '0 2px 8px rgba(0,0,0,0.15)', md: 'none' }
          }}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="md:w-[34px] md:h-[34px]"
          >
            <polyline points="9 6 15 12 9 18"></polyline>
          </svg>
        </IconButton>
      </Box>
    </Box>
  );
}
