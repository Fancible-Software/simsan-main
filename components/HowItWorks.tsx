"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { colors } from "@/lib/colors";

export default function HowItWorks() {
  return (
    <Box className="w-full" style={{ backgroundColor: "#f5f5f5" }}>
      <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0 py-12 lg:py-16">
        <Box className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Section - Image */}
          <Box className="w-full lg:w-1/2 flex-shrink-0">
            <Box className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/homepage1.png"
                alt="Professional roof cleaning service"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                style={{ borderRadius: "16px" }}
              />
            </Box>
          </Box>

          {/* Right Section - Content */}
          <Box className="w-full lg:w-1/2 flex flex-col">
            {/* Main Heading */}
            <Typography
              variant="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
              style={{ color: colors.primary }}
            >
              How It Works?
            </Typography>

            {/* Step 1 */}
            <Box className="mb-8">
              <Box className="flex items-start gap-4 mb-3">
                <Box
                  className="flex-shrink-0 w-14 h-14 rounded-md flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: colors.primary }}
                >
                  <Typography variant="h6" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                    1
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  className="font-bold"
                  style={{ color: colors.primary, fontSize: "1.5rem", lineHeight: "1.2" }}
                >
                  Get Your Free Estimate
                </Typography>
              </Box>
              <Typography
                variant="body1"
                className="text-gray-700 leading-relaxed"
                style={{ fontSize: "1rem", marginLeft: "72px" }}
              >
                Call us at{" "}
                <a href="tel:+16048804476" style={{ color: colors.primary, fontWeight: 600, textDecoration: 'none' }}>+1-604-880-4476</a>{" "}
                <a href="tel:+17782227988" style={{ color: colors.primary, fontWeight: 600, textDecoration: 'none' }}>+1-778-222-7988</a>{" "}
                or fill out a form and we will provide a free estimate.
              </Typography>
            </Box>

            {/* Step 2 */}
            <Box className="mb-8">
              <Box className="flex items-start gap-4 mb-3">
                <Box
                  className="flex-shrink-0 w-14 h-14 rounded-md flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: colors.primary }}
                >
                  <Typography variant="h6" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                    2
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  className="font-bold"
                  style={{ color: colors.primary, fontSize: "1.5rem", lineHeight: "1.2" }}
                >
                  Book Your Service
                </Typography>
              </Box>
              <Typography
                variant="body1"
                className="text-gray-700 leading-relaxed"
                style={{ fontSize: "1rem", marginLeft: "72px" }}
              >
                Our technicians live in the neighborhoods throughout the service area and often times we can complete your services with in a few hours or days of your call.
              </Typography>
            </Box>

            {/* Step 3 */}
            <Box>
              <Box className="flex items-start gap-4 mb-3">
                <Box
                  className="flex-shrink-0 w-14 h-14 rounded-md flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: colors.primary }}
                >
                  <Typography variant="h6" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                    3
                  </Typography>
                </Box>
                <Typography
                  variant="h5"
                  className="font-bold"
                  style={{ color: colors.primary, fontSize: "1.5rem", lineHeight: "1.2" }}
                >
                  Relax
                </Typography>
              </Box>
              <Typography
                variant="body1"
                className="text-gray-700 leading-relaxed"
                style={{ fontSize: "1rem", marginLeft: "72px" }}
              >
                Our trained technicians will come to your home driving a company vehicle and accomplish the work you requested.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

