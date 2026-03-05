"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { colors } from "@/lib/colors";
import FraserValleyMap from "@/components/FraserValleyMap";

// Service areas organized for display
const serviceAreas = [
  {
    title: "LOWER MAINLAND AND FRASER VALLEY",
    cities: [
      "Anmore",
      "Belcarra",
      "Bowen Island",
      "Burnaby",
      "Chilliwack",
      "Coquitlam",
      "Delta",
      "Hope",
      "Langley",
      "Lions Bay",
      "Maple Ridge",
      "Mission",
      "New Westminster",
      "North Vancouver",
      "Pitt Meadows",
      "Port Coquitlam",
      "Port Moody",
      "Richmond",
      "Surrey",
      "Vancouver",
      "West Vancouver",
      "White Rock",
    ],
  },
  {
    title: "VANCOUVER ISLAND",
    cities: [
      "Victoria",
      "Nanaimo",
      "Campbell River",
      "Courtenay",
      "Port Alberni",
      "Parksville",
      "Qualicum Beach",
      "Duncan",
      "Ladysmith",
    ],
  },
];

const ChevronIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M4.5 1.5L9 6L4.5 10.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AreasWeServeIn() {
  return (
    <Box className="w-full bg-white">
      <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0 py-12 lg:py-16">
        <Box className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Section - Text Content */}
          <Box className="w-full lg:w-1/2 flex flex-col">

            {/* Sub-heading */}
            <Box className="flex items-center gap-3 mb-6">
              <Typography
                variant="h6"
                className="font-bold uppercase"
                style={{ fontSize: "1.125rem", color: colors.text.primary }}
              >
                SERVICE AREAS
              </Typography>
              <Box
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.primary }}
              >
                <Box
                  className="w-3 h-0.5"
                  style={{ backgroundColor: "white" }}
                />
              </Box>
            </Box>

            {/* Two groups, each with a title and cities in columns */}
            <Box className="flex flex-col gap-8">
              {serviceAreas.map((group) => {
                const colSize = Math.ceil(group.cities.length / 3);
                const col1 = group.cities.slice(0, colSize);
                const col2 = group.cities.slice(colSize, colSize * 2);
                const col3 = group.cities.slice(colSize * 2);

                return (
                  <Box key={group.title}>
                    {/* Group Title */}
                    <Typography
                      variant="body2"
                      className="font-bold mb-5"
                      style={{ color: colors.text.primary, fontSize: "0.9375rem", marginBottom: "10px", fontWeight: 700 }}
                    >
                      {group.title}
                    </Typography>

                    {/* Cities in 3 columns */}
                    <Box className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
                      {[col1, col2, col3].map((col, colIndex) => (
                        <Box key={colIndex} className="flex flex-col gap-2">
                          {col.map((city, index) => (
                            <Box key={index} className="flex items-center gap-2" style={{ color: colors.primary }}>
                              <Box className="flex-shrink-0">
                                <ChevronIcon />
                              </Box>
                              <Typography
                                variant="body2"
                                style={{ color: colors.text.primary, fontSize: "0.9375rem" }}
                              >
                                {city}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>

          {/* Right Section - Fraser Valley Map */}
          <Box className="w-full lg:w-1/2 flex flex-col gap-6 relative">
            <FraserValleyMap />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

