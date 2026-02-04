"use client";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { colors } from "@/lib/colors";
import { CONTACT_INFO } from "@/constants";

export default function WhyChooseUs() {
  return (
    <Box className="w-full bg-highlight sm:pb-16 pb-10">
      <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
        <Box className="flex flex-col lg:flex-row ">
          {/* Left Section - Image */}
          <Box className="flex-1 relative">
            <Box className="relative rounded-l-[32px] overflow-hidden sm:mb-0 mb-8">
              <Image
                src="/painting_services/painting_services.jpg"
                alt="Professional cleaning service"
                width={500}
                height={950}
                className="w-full object-cover why-hoose-img"
              />
              {/* 100% Satisfaction Badge */}
              <Box
                className="absolute bottom-4 right-4 w-36 h-36 rounded-full flex flex-col items-center justify-center shadow-2xl z-10"
                style={{ backgroundColor: colors.primary }}
              >
                <span className="text-white text-3xl font-extrabold leading-none mb-1">100%</span>
                <span className="text-white text-[10px] font-bold uppercase text-center px-2 leading-tight">
                  SATISFACTION<br />GUARANTEED
                </span>
              </Box>
            </Box>
          </Box>

          {/* Right Section - Content */}
          <Box className="flex-1 bg-white py-10 px-10 rounded-b-[32px] rounded-t-[32px] sm-rounded-r-[32px]">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight text-center sm:text-left"
              style={{ color: colors.primary }}
            >
              Why Homeowners Choose Simsan Fraser Maintenance
            </h2>

            {/* Bullet Points */}
            <Box className="space-y-4 mb-6">
              {/* Point 1 - Wrench & Screwdriver */}
              <Box className="flex items-start gap-4">
                <Box
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${colors.primary}15` }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 1 0 1.4l-1.6 1.6a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 1 0 1.4l-1.6 1.6a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 1 0 1.4l-1.6 1.6a1 1 0 0 0-.7.3H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10.3a1 1 0 0 0 .7.3z" />
                    <path d="M8 6h6M8 12h6M8 18h6" />
                  </svg>
                </Box>
                <p className="text-sm md:text-base font-semibold">
                  Surface-safe cleaning methods
                </p>
              </Box>

              {/* Point 2 - Thumbs Up */}
              <Box className="flex items-start gap-3">
                <Box
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${colors.primary}15` }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 13V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5M7 13l-3 3v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2l-3-3M7 13h10" />
                    <path d="M9 9V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3" />
                  </svg>
                </Box>
                <p className="text-sm md:text-base font-semibold">
                  Honest pricing with clear scope of work
                </p>
              </Box>

              {/* Point 3 */}
              <Box className="flex items-start gap-3">
                <Box
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${colors.primary}15` }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </Box>
                <p className="text-sm md:text-base font-semibold">
                  Fully insured and professional team
                </p>
              </Box>

              {/* Point 4 */}
              <Box className="flex items-start gap-3">
                <Box
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${colors.primary}15` }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </Box>
                <p className="text-sm md:text-base font-semibold">
                  Reliable service with visible results
                </p>
              </Box>

            </Box>

            {/* Descriptive Paragraph */}
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: colors.text.primary }}>
              Whether you need routine maintenance or a full exterior refresh, Simsan Fraser Maintenance Ltd delivers dependable service you can trust.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-6 font-bold" style={{ color: colors.text.primary }}>
Serving homeowners across the Lower Mainland and Fraser Valley.            </p>

            {/* CTA Buttons */}
            <Box className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+17782227988"
                className="px-6 py-3 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2 transition-colors duration-200 uppercase tracking-wide no-underline"
                style={{ backgroundColor: colors.primary }}
              >
                CALL US NOW
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <Link
                href="/estimate"
                className="px-6 py-3 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2 transition-colors duration-200 uppercase tracking-wide no-underline"
                style={{ backgroundColor: colors.primary }}
              >
                GET QUOTE
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

