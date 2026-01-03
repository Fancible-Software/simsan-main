"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { colors } from "@/lib/colors";
import Link from "next/link";

// Service areas organized for display
const serviceAreas = [
  "Abbotsford",
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
];

export default function AreasWeServeIn() {
  // Split cities into 3 columns
  const column1 = serviceAreas.slice(0, Math.ceil(serviceAreas.length / 3));
  const column2 = serviceAreas.slice(
    Math.ceil(serviceAreas.length / 3),
    Math.ceil((serviceAreas.length * 2) / 3)
  );
  const column3 = serviceAreas.slice(Math.ceil((serviceAreas.length * 2) / 3));

  return (
    <Box className="w-full bg-white">
      <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0 py-12 lg:py-16">
        <Box className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Left Section - Text Content */}
          <Box className="w-full lg:w-1/2 flex flex-col">
            {/* Main Heading */}
            <Typography
              variant="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: colors.text.primary }}
            >
              Areas We Serve in Fraser Valley
            </Typography>

            {/* Introductory Paragraph */}
            <Typography
              variant="body1"
              className="text-gray-700 leading-relaxed mb-8"
              style={{ fontSize: "1rem" }}
            >
              Simsan Fraser Maintenance proudly provides exterior cleaning services to homes and businesses in{" "}
              <Link
                href="/contact"
                style={{ color: colors.primary, textDecoration: "none", fontWeight: 600 }}
              >
                Vancouver, BC
              </Link>
              ,{" "}
              <Link
                href="/contact"
                style={{ color: colors.primary, textDecoration: "none", fontWeight: 600 }}
              >
                Surrey, BC
              </Link>
              , and surrounding communities. If you don't see your area listed, please{" "}
              <Link
                href="/contact"
                style={{ color: colors.primary, textDecoration: "none", fontWeight: 600 }}
              >
                contact us
              </Link>
              —we're always expanding our service area and may already be nearby.
            </Typography>

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

            {/* City List - Three Columns */}
            <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {/* Column 1 */}
              <Box className="flex flex-col gap-3">
                {column1.map((city, index) => (
                  <Box key={index} className="flex items-center gap-2">
                    <Box
                      className="flex-shrink-0"
                      style={{ color: colors.primary }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{ color: colors.primary }}
                      >
                        <path
                          d="M4.5 1.5L9 6L4.5 10.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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

              {/* Column 2 */}
              <Box className="flex flex-col gap-3">
                {column2.map((city, index) => (
                  <Box key={index} className="flex items-center gap-2">
                    <Box
                      className="flex-shrink-0"
                      style={{ color: colors.primary }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{ color: colors.primary }}
                      >
                        <path
                          d="M4.5 1.5L9 6L4.5 10.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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

              {/* Column 3 */}
              <Box className="flex flex-col gap-3">
                {column3.map((city, index) => (
                  <Box key={index} className="flex items-center gap-2">
                    <Box
                      className="flex-shrink-0"
                      style={{ color: colors.primary }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        style={{ color: colors.primary }}
                      >
                        <path
                          d="M4.5 1.5L9 6L4.5 10.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
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
            </Box>
          </Box>

          {/* Right Section - Map Images */}
          <Box className="w-full lg:w-1/2 flex flex-col gap-6 relative">
            {/* Top Map - Portland Area */}
            <Box className="relative rounded-lg overflow-hidden shadow-lg" style={{ zIndex: 2 }}>
              <Image
                src="/portland-map.png"
                alt="Portland Area Service Map"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
                style={{ opacity: 0.85 }}
              />
              {/* Service Area Border Overlay */}
              <Box
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: `3px solid ${colors.primary}`,
                  borderRadius: "8px",
                  opacity: 0.8,
                }}
              />
            </Box>

            {/* Bottom Map - Seattle Area */}
            <Box
              className="relative rounded-lg overflow-hidden shadow-lg"
              style={{ zIndex: 1, marginTop: "-40px", marginLeft: "40px" }}
            >
              <Image
                src="/seattle-map.png"
                alt="Seattle Area Service Map"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
                style={{ opacity: 0.85 }}
              />
              {/* Service Area Border Overlay */}
              <Box
                className="absolute inset-0 pointer-events-none"
                style={{
                  border: `3px solid ${colors.primary}`,
                  borderRadius: "8px",
                  opacity: 0.8,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

