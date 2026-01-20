import Box from "@mui/material/Box";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { colors } from "@/lib/colors";
import ZipCodeCta from "@/components/ZipCodeCta";
import Image from "next/image";
import Link from "next/link";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactUs from "@/components/ContactUs";
import CustomerReviews from "@/components/CustomerReviews";
import OurWorkCarousel from "@/components/OurWorkCarousel";
import HowItWorks from "@/components/HowItWorks";
import AreasWeServeIn from "@/components/AreasWeServeIn";

export default function Home() {
  return (
    <Box className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section with overlay gradient */}
      <Box
        className="relative w-full min-h-[520px] lg:min-h-[660px] flex flex-col justify-center rounded-bl-[5%] rounded-br-[5%]"
        style={{ background: `url('/mask-group.png') right center/cover no-repeat`, position: 'relative' }}
      >
        {/* Gradient Overlay (left black to transparent right) */}
        <Box
          className="absolute top-0 left-0 w-full h-full z-0 rounded-bl-[15%] rounded-br-[5%]"
          style={{
            background:
              'linear-gradient(90deg, rgba(20,20,20,0.98) 0%, rgba(20,20,20,0.9) 34%, rgba(20,20,20,0.7) 48%, rgba(20,20,20,0.3) 70%, rgba(0,0,0,0.0) 100%)'
          }}
        />
        <Box className="relative z-10 px-6 lg:px-16 py-16 flex-1 flex flex-col justify-center items-center sm:items-start max-w-3xl">
          <h1 className="text-center sm:text-left text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Your <span style={{ color: colors.primary }}>Trusted</span> Home Care Team
          </h1>
          <p className="text-center sm:text-left text-white text-base md:text-lg mb-4 leading-relaxed">
            <span className="font-bold">Simsan Fraser Maintenance</span> Ltd provides reliable exterior cleaning and property maintenance for homeowners who value quality and care. 
          </p>
          <p className="text-center sm:text-left text-white text-base md:text-lg mb-4 leading-relaxed">
            We specialize in <span className="font-bold">roof cleaning by hand, gutter cleaning, moss removal, Anti moss treatment, Window Washing, Soft washing of the house, pressure washing of concrete surfaces, Christmas Lights Installation, Interior Exterior Painting and Epoxy Flooring</span> using safe methods that protect your home while delivering visible results.
          </p>
          <p className="text-center sm:text-left text-white text-base md:text-lg mb-4 leading-relaxed">
            As a fully insured local company, we focus on honest pricing, clear communication and dependable service - every job, every time.
          </p>
          <p className="text-center sm:text-left text-white text-base md:text-lg mb-4 leading-relaxed font-bold">
            Proudly serving Abbotsford, Anmore, Belcarra,Bowen Island, Burnaby, Chilliwack, Coquitlam, Delta, Hope, Langley, Lions Bay, Maple Ridge, Mission,New Westminster, North Vancouver, Pitt Meadows, Port Coquitlam, Port Moody, Richmond, Su rrey, Vancouver, West Vancouver, White Rock
            </p>

          <a
            href="/estimate"
            className="sm:mb-0 mb-10 text-white font-semibold px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-md md:rounded-lg w-fit flex items-center gap-2 transition-colors duration-200 uppercase tracking-wide text-xs md:text-sm lg:text-base no-underline"
            style={{ background: colors.primary }}
          >
            Get a free, no-obligation quote today
            <svg className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </Box>
      </Box>

      {/* Place the CTA with negative margin to overlap hero and white bg below */}
      {/* <Box className="w-full flex justify-center" style={{ marginTop: '-32px', position: 'relative', zIndex: 20 }}>
        <ZipCodeCta />
      </Box> */}

      {/* About Section */}
      <Box className="flex-1 bg-white">
        <Box className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8 xl:px-0 sm:py-20 py-10 lg:py-24 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left Content */}
          <Box className="flex-1 max-w-xl px-6 sm:px-0 items-center sm:items-start flex flex-col">
            <p className="text-center sm:text-left text-sm md:text-3xl font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: colors.primary }}>
              About Us
            </p>
            <h2 className="text-center sm:text-left text-xl md:text-xl lg:text-xl font-extrabold leading-snug mb-4" style={{ color: colors.secondary }}>
              Professional Roof Cleaning, Gutter Cleaning, & Window Washing
            </h2>
            <p className="text-center sm:text-left text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              <span className="font-bold">Simsan Fraser Maintenance</span> Ltd is a locally owned and operated exterior cleaning and property maintenance company dedicated to protecting and enhancing homes across the Lower Mainland and Fraser Valley.
            </p>
            <p className="text-center sm:text-left text-gray-600 text-base md:text-lg leading-relaxed mb-4">
              We specialize in <span className="font-bold">roof cleaning by hand, gutter cleaning, moss removal, Anti moss treatment, Window Washing, soft washing of the house, pressure washing of concrete surfaces, Christmas Lights Installation, Interior Exterior Painting and Epoxy Flooring</span> using proven, surface-safe techniques designed to extend the life of your property. Our focus is not just on making homes look clean - but on maintaining them properly and responsibly.
            </p>
           
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm md:text-base font-semibold text-white shadow-lg transition-colors duration-200 no-underline"
              style={{ backgroundColor: colors.primary }}
            >
              LEARN MORE
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Box>

          {/* Right Images - Full width on mobile, side by side on desktop */}
          <Box className="w-full lg:flex-1 flex flex-col sm:flex-row gap-6 justify-center items-center sm:items-start px-6 sm:px-0">
            <Box className="w-full sm:flex-1">
              <Image
                src="/home-about-img1.png"
                alt="Roof cleaning service"
                width={320}
                height={400}
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />
            </Box>
            <Box className="w-full sm:flex-1 max-w-none sm:max-w-[280px] lg:max-w-[320px] mt-0 sm:mt-12 lg:mt-[120px]">
              <Image
                src="/home-about-imp2.png"
                alt="Gutter cleaning service"
                width={320}
                height={400}
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Our Services Section */}
      <OurServices />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Our Work Carousel Section */}
      <OurWorkCarousel />

      {/* Contact Us Section */}
      <ContactUs />

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Areas We Serve Section */}
      <AreasWeServeIn />

      <Footer />
    </Box>
  );
}
