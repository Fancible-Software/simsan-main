"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import { colors } from "@/lib/colors";
import { CONTACT_INFO, SOCIAL_MEDIA } from "@/constants";

const companyLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact Us", path: "/contact" },
];

const services = [
  { name: "Roof & Gutter Cleaning", slug: "roof-gutter-cleaning" },
  { name: "Window Cleaning", slug: "window-cleaning" },
  { name: "Pressure Washing", slug: "pressure-washing" },
  { name: "Christmas Light & Decoration", slug: "christmas-lighting-decoration" },
];

export default function Footer() {
  return (
    <Box component="footer" className="w-full relative">
      {/* Top CTA Bar - Orange Pill */}
      <Box
        className="w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-7 md:py-8 lg:py-10 mx-auto max-w-7xl"
        style={{
          background: colors.primary,
          borderRadius: '50px',
          top: '65px',
          position: 'relative',
          zIndex: 10,
        }}
        sx={{
          '@media (min-width: 1024px)': {
            borderRadius: '100px',
          },
        }}
      >
        <Box className="flex-1 mb-4 md:mb-6 lg:mb-0 lg:mr-8 w-full lg:w-auto">
          <Typography
            variant="h4"
            className="text-white font-extrabold mb-2 text-center md:text-center lg:text-left"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 800 }}
          >
            Call for a FREE Estimate
          </Typography>
          <Typography
            variant="body1"
            className="text-white text-center md:text-center lg:text-left"
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
          >
            Not sure where to start? Get in touch with one of our pros today for a no-obligation estimate.
          </Typography>
        </Box>
        <Box className="flex flex-col md:flex-row gap-3 w-full lg:w-auto justify-center md:justify-center lg:justify-start">
          <a
            href="tel:+17782227988"
            className="px-6 py-3 rounded-full bg-white text-center cursor-pointer hover:bg-gray-100 transition-colors no-underline"
            style={{ minWidth: '200px' }}
          >
            <Typography
              variant="body1"
              className="font-semibold"
              style={{ color: colors.text.primary }}
            >
              +1-778-222-7988
            </Typography>
          </a>
          <a
            href="tel:+16048804476"
            className="px-6 py-3 rounded-full bg-white text-center cursor-pointer hover:bg-gray-100 transition-colors no-underline"
            style={{ minWidth: '200px' }}
          >
            <Typography
              variant="body1"
              className="font-semibold"
              style={{ color: colors.text.primary }}
            >
              +1-604-880-4476
            </Typography>
          </a>
        </Box>
      </Box>

      {/* Main Footer Content - Dark Background */}
      <Box
        className="w-full px-6 lg:px-12 xl:px-16 py-12 lg:py-16"
        style={{ background: '#0a0a0a', borderTopLeftRadius: '50px', borderTopRightRadius: '50px' }}
      >
        <Box className="max-w-7xl mx-auto">
          <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pt-6">
            {/* Column 1: Logo & Company Info */}
            <Box className="flex flex-col sm:items-start items-center">
              <Link href="/" className="no-underline">
                <Image
                  src="/icons/logo.svg"
                  alt="Simsan Fraser Maintenance Ltd."
                  width={300}
                  height={100}
                  className="mb-4 hover:opacity-80 transition-opacity cursor-pointer"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </Link>
              {/* Social Media Icons */}
              <Box className="flex gap-3 mt-2">
                {/* WhatsApp */}
                <a
                  href={SOCIAL_MEDIA.WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: colors.primary }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={SOCIAL_MEDIA.FACEBOOK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: colors.primary }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={SOCIAL_MEDIA.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: colors.primary }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </Box>
            </Box>

            {/* Column 2: Company Links */}
            <Box className="flex flex-col text-center sm:text-left items-center sm:items-start">
              <Typography
                variant="h6"
                className="text-white font-bold mb-4"
                style={{ fontSize: '1.125rem' }}
              >
                Company
              </Typography>
              <Box className="flex flex-col gap-3">
                {companyLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="text-white hover:text-gray-300 transition-colors no-underline"
                    style={{ fontSize: '0.9375rem' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>

            {/* Column 3: Services */}
            <Box className="flex flex-col text-center sm:text-left items-center sm:items-start">
              <Typography
                variant="h6"
                className="text-white font-bold mb-4"
                style={{ fontSize: '1.125rem' }}
              >
                Services
              </Typography>
              <Box className="flex flex-col gap-3">
                {services.map((service) => {
                  const href = service.slug 
                    ? `/services/${service.slug}` 
                    : "/our-services";
                  return (
                    <Link
                      key={service.name}
                      href={href}
                      className="text-white hover:text-gray-300 transition-colors no-underline"
                      style={{ fontSize: '0.9375rem' }}
                    >
                      {service.name}
                    </Link>
                  );
                })}
              </Box>
            </Box>

            {/* Column 4: Contact Information */}
            <Box className="flex flex-col text-center sm:text-left items-center sm:items-start">
              <Typography
                variant="h6"
                className="text-white font-bold mb-4"
                style={{ fontSize: '1.125rem' }}
              >
                Contact Information
              </Typography>
              <Box className="flex flex-col gap-4">
                {/* Location */}
                {/* <Box className="flex items-start gap-3 justify-center sm:justify-start">
                  <Box
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: colors.primary }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 0C3.24 0 1 2.24 1 5C1 8.5 6 12 6 12C6 12 11 8.5 11 5C11 2.24 8.76 0 6 0ZM6 6.5C5.17 6.5 4.5 5.83 4.5 5C4.5 4.17 5.17 3.5 6 3.5C6.83 3.5 7.5 4.17 7.5 5C7.5 5.83 6.83 6.5 6 6.5Z" fill="white"/>
                    </svg>
                  </Box>
                  <Typography className="text-white" style={{ fontSize: '0.9375rem' }}>
                    Lower Mainland & Fraser Valley, BC, Canada
                  </Typography>
                </Box> */}

                {/* Phone 1 */}
                <Box className="flex items-start gap-3 justify-center sm:justify-start">
                  <Box
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: colors.primary }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 0.5C2.22 0.5 2 0.72 2 1V11C2 11.28 2.22 11.5 2.5 11.5H9.5C9.78 11.5 10 11.28 10 11V1C10 0.72 9.78 0.5 9.5 0.5H2.5ZM3 2H9V10H3V2Z" fill="white"/>
                    </svg>
                  </Box>
                  <a
                    href="tel:+17782227988"
                    className="text-white hover:text-gray-300 transition-colors no-underline"
                    style={{ fontSize: '0.9375rem' }}
                  >
                    +1-778-222-7988
                  </a>
                </Box>

                {/* Phone 2 */}
                <Box className="flex items-start gap-3 justify-center sm:justify-start">
                  <Box
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: colors.primary }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 0.5C2.22 0.5 2 0.72 2 1V11C2 11.28 2.22 11.5 2.5 11.5H9.5C9.78 11.5 10 11.28 10 11V1C10 0.72 9.78 0.5 9.5 0.5H2.5ZM3 2H9V10H3V2Z" fill="white"/>
                    </svg>
                  </Box>
                  <a
                    href="tel:+16048804476"
                    className="text-white hover:text-gray-300 transition-colors no-underline"
                    style={{ fontSize: '0.9375rem' }}
                  >
                    +1-604-880-4476
                  </a>
                </Box>

                {/* Email */}
                <Box className="flex items-start gap-3 justify-center sm:justify-start">
                  <Box
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: colors.primary }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 2L6 6.5L11 2V10H1V2ZM1 0H11C11.55 0 12 0.45 12 1V11C12 11.55 11.55 12 11 12H1C0.45 12 0 11.55 0 11V1C0 0.45 0.45 0 1 0Z" fill="white"/>
                    </svg>
                  </Box>
                  <a
                    href={`mailto:${CONTACT_INFO.EMAIL}`}
                    className="text-white hover:text-gray-300 transition-colors no-underline"
                    style={{ fontSize: '0.9375rem' }}
                  >
                    {CONTACT_INFO.EMAIL}
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Copyright Section */}
      <Box
        className="w-full px-6 lg:px-12 xl:px-16 py-6"
        style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}
      >
        <Box className="max-w-7xl mx-auto">
          <Typography
            variant="body2"
            className="text-white text-center"
            style={{ fontSize: '0.875rem' }}
          >
            © Copyright 2025 Simsan Fraser Maintenance Ltd. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
