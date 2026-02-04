"use client";

import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { colors } from "@/lib/colors";
import { useState, useEffect, useRef } from "react";
import { SERVICES } from "@/constants/services";

const DESCRIPTION_MAX_LENGTH = 120;

export default function OurServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const services = SERVICES;
  const maxIndex = Math.max(0, services.length - cardsToShow);

  // Responsive: how many cards visible (match MUI breakpoints: xl 1536, lg 1200, md 900)
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1536) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 1200) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 900) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Measure card width for accurate transform
  useEffect(() => {
    const updateCardWidth = () => {
      if (cardRef.current && containerRef.current) {
        const card = cardRef.current;
        const computedStyle = window.getComputedStyle(card);
        const width = card.offsetWidth;
        const marginLeft = parseFloat(computedStyle.marginLeft) || 0;
        const marginRight = parseFloat(computedStyle.marginRight) || 0;
        const gap = parseFloat(window.getComputedStyle(containerRef.current).gap) || 0;
        setCardWidth(width + marginLeft + marginRight + gap);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, [cardsToShow]);

  // Auto-scroll
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const truncateDescription = (text: string) => {
    if (text.length <= DESCRIPTION_MAX_LENGTH) return text;
    return text.substring(0, DESCRIPTION_MAX_LENGTH).trim() + "...";
  };

  return (
    <Box className="w-full bg-highlight sm:pt-16 sm:pb-8 py-10">
      <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
        {/* Header */}
        <Box className="text-center mb-12 lg:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
            style={{ color: colors.primary }}
          >
            Our Services
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto"
            style={{ color: colors.text.primary }}
          >
            We provide complete home cleaning and enhancement solutions, including roof &amp; gutter cleaning, window washing and high-quality pressure cleaning to restore your property&apos;s shine. Along with this, we also offer beautiful and safe Christmas lighting &amp; decoration services to make your home look festive and welcoming.
          </p>
        </Box>

        {/* Carousel */}
        <Box
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {maxIndex > 0 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                style={{ background: colors.primary, color: "white" }}
                aria-label="Previous service"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                style={{ background: colors.primary, color: "white" }}
                aria-label="Next service"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          <Box
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            sx={{
              gap: { xs: 0, md: "16px" },
            }}
            style={{
              transform: cardWidth > 0 
                ? `translateX(-${currentIndex * cardWidth}px)`
                : `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {services.map((service, index) => (
              <Box
                key={service.slug}
                ref={index === 0 ? cardRef : null}
                className="flex-shrink-0"
                sx={{
                  width: {
                    xs: "100%",
                    md: `calc((100% - ${cardsToShow > 1 ? (cardsToShow - 1) * 16 : 0}px) / ${cardsToShow})`,
                    lg: `calc((100% - ${cardsToShow > 1 ? (cardsToShow - 1) * 16 : 0}px) / ${cardsToShow})`,
                    xl: `calc((100% - ${cardsToShow > 1 ? (cardsToShow - 1) * 16 : 0}px) / ${cardsToShow})`,
                  },
                }}
              >
                <Box className="overflow-visible rounded-t-[32px] flex flex-col h-full">
                  <Box className="relative overflow-visible">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      width={700}
                      height={510}
                      className="w-full h-[260px] object-cover rounded-t-[32px] rounded-b-none"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                  </Box>
                  <Box
                    className="bg-white px-8 pt-6 pb-8 flex flex-col flex-1 home-service-card"
                    style={{
                      borderRadius: "32px",
                      width: "95%",
                      bottom: "25px",
                      position: "relative",
                    }}
                  >
                    <h3
                      className="text-2xl font-extrabold mb-3 leading-snug"
                      style={{ color: colors.primary }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-gray-600 md:text-lg mb-5 flex-1"
                      style={{ color: colors.text.primary }}
                    >
                      {truncateDescription(service.description)}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="font-bold text-lg block w-full pt-3 pb-1 mt-auto no-underline"
                      style={{ color: colors.primary, background: "none" }}
                    >
                      LEARN MORE{" "}
                      <span className="inline-block align-middle">
                        <svg className="w-5 h-5 inline ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Slider Dots */}
        {maxIndex > 0 && (
          <Box className="flex gap-2 mt-8 justify-center">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer border-none outline-none"
                style={{
                  background: index === currentIndex ? colors.primary : "#e5e7eb",
                  transform: index === currentIndex ? "scale(1.2)" : "scale(1)",
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}
