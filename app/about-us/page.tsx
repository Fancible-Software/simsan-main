"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { colors } from "@/lib/colors";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <Box className="w-full min-h-screen bg-[#fbfbfb] flex flex-col">
          <Header />
      {/* Hero Banner */}
      <Box
        className="w-full relative h-[190px] md:h-[220px] lg:h-[240px] flex justify-center items-center"
        style={{ overflow: 'hidden', borderBottomLeftRadius: 44, borderBottomRightRadius: 44 }}
      >
        {/* Bg img and overlay */}
        <img
          src="/homepage1.png"
          alt="Gutter Hero"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
          style={{ opacity: 0.55, filter: 'brightness(0.4)' }}
        />
        {/* Overlay content */}
        <Box className="relative z-10 w-full flex flex-col items-start px-8 lg:px-16 xl:px-32">
          <Typography
            variant="h2"
            className="text-white font-extrabold mb-2 mt-6 text-[2.6rem] md:text-[3.1rem]"
            sx={{ textShadow: "0 8px 20px rgba(30,30,30,0.19)" }}
          >
            About Us
          </Typography>
          <Box className="flex gap-2 text-base font-medium">
            <Link href="/" className="text-[1.02rem]" style={{ color: colors.primary }}>Home</Link>
            <span className="text-white">-</span>
            <span className="text-white" style={{ opacity: 0.88 }}>About Us</span>
          </Box>
        </Box>
      </Box>

      {/* Main content card */}
      <Box className="w-full flex justify-center items-start">
        <Box className="flex flex-col lg:flex-row max-w-6xl bg-white rounded-[32px] mt-4 mb-16 px-4 md:px-10 py-12 shadow-xl gap-8" style={{ zIndex: 20, position: 'relative' }}>
          {/* Left Column: Text */}
          <Box className="flex-1 min-w-[260px] max-w-xl flex flex-col justify-center pr-0 lg:pr-8">
            <Typography
              variant="h4"
              className="font-extrabold mb-2 text-[2.05rem]"
              style={{ color: colors.primary }}
            >
              About Us
            </Typography>
            <Typography
              className="font-bold mb-3 text-[1.22rem] mt-2 leading-tight"
              style={{ color: '#fcb53f' }}
            >
              Simsan Fraser Maintenance | Fraser Valley<br/>Roof & Exterior Cleaning Experts
            </Typography>
            <Typography className="mb-6 mt-4 text-[1.01rem]" style={{ color: colors.text.primary, lineHeight: 1.64 }}>
              Simsan Fraser Maintenance is a trusted home-maintenance and exterior cleaning company proudly serving the Fraser Valley, including Vancouver, Burnaby, Langley, Tri Cities, Abbotsford, Chilliwack, Mission, Langley, and surrounding areas. We specialize in roof moss removal, gutter cleaning,<br/>
              soft washing, pressure washing, window washing, painting, and surface protection services designed to keep your home clean, safe, and looking its best year-round.<br/>
              <br/>
              Built on quality workmanship, fair pricing, and friendly customer care, we’ve become a go-to choice for homeowners and property managers searching for reliable roof and exterior maintenance in the Fraser Valley.
            </Typography>
            <Box className="flex gap-4 mt-4">
              <Link href="tel:+1-778-222-7988">
                <button
                  className="px-8 py-3 rounded-full text-white font-bold text-[1rem] shadow transition-colors duration-200"
                  style={{ background: colors.primary }}
                >
                  CALL US NOW
                </button>
              </Link>
              <Link href="/contact">
                <button
                  className="px-8 py-3 rounded-full font-bold text-[1rem] shadow transition-colors duration-200"
                  style={{ background: colors.secondary, color: colors.text.white }}
                >
                  GET FREE QUOTE &rarr;
                </button>
              </Link>
            </Box>
          </Box>

          {/* Right Column: Photo comparison */}
          <Box className="flex-1 flex flex-col justify-center items-center max-w-xl">
            <Box className="w-full flex flex-row rounded-[22px] overflow-hidden border border-gray-200 shadow-md">
              <img src="/home-about-img1.png" alt="before cleaning" className="object-cover w-1/2 h-[325px]" style={{ borderRight: '2px solid #fff' }} />
              <img src="/home-about-imp2.png" alt="after cleaning" className="object-cover w-1/2 h-[325px]" />
            </Box>
          </Box>
        </Box>
      </Box>
          <Footer />
    </Box>
  );
}
