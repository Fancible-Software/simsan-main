"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { colors } from "@/lib/colors";
import React, { useState, useEffect } from "react";

const reviews = [
  {
    text:
      "I would highly recommend these gentlemen. Sandeep door knocked at the right time as we needed work done. The price was really reasonable and they cleaned the gutters, hand brushed the siding and windows.",
    author: "Wilson Rodrigues",
  },
  {
    text:
      "Excellent service! The team was professional, punctual, and did an amazing job cleaning our roof and gutters. Our home looks brand new. Highly recommend their services!",
    author: "Sarah Johnson",
  },
  {
    text:
      "Outstanding work! They cleaned our windows and pressure washed our driveway. The results exceeded our expectations. Will definitely use them again for future maintenance.",
    author: "Michael Chen",
  },
  {
    text:
      "Great experience from start to finish. The team was courteous, efficient, and left our property spotless. Very satisfied with the quality of work!",
    author: "David Martinez",
  },
  {
    text:
      "Professional and reliable service. They completed the job on time and the results were excellent. Would definitely hire them again!",
    author: "Emily Thompson",
  },
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Determine how many cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3); // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2); // Tablet: 2 cards
      } else {
        setCardsToShow(1); // Mobile: 1 card
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Calculate max index based on cards to show
  const maxIndex = Math.max(0, reviews.length - cardsToShow);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= maxIndex) {
          return 0; // Loop back to start
        }
        return prevIndex + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= maxIndex) {
        return 0; // Loop back to start
      }
      return prevIndex + 1;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return maxIndex; // Loop to end
      }
      return prevIndex - 1;
    });
  };

  return (
    <Box
      className="w-full py-12 lg:py-16 flex flex-col items-center justify-center"
      style={{ background: colors.background.white }}
    >
      <p
        className="text-center font-bold mb-4"
        style={{ color: colors.primary, fontSize: "2rem" }}
      >
        Customer Reviews
      </p>
      <p
        
        className="text-center mb-8"
        style={{ fontSize: '1.1rem', color: colors.text.primary }}
      >
        See What Our Customers Say About Working With Us
      </p>
      
      {/* Carousel Container */}
      <Box 
        className="relative max-w-7xl w-full px-4 md:px-6 lg:px-8 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Previous Button */}
        {maxIndex > 0 && (
          <button
            onClick={goToPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
            style={{ 
              background: colors.primary,
              color: 'white'
            }}
            aria-label="Previous review"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        )}

        {/* Next Button */}
        {maxIndex > 0 && (
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
            style={{ 
              background: colors.primary,
              color: 'white'
            }}
            aria-label="Next review"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        )}

        <Box
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {reviews.map((rev, idx) => (
            <Box
              key={idx}
              className="flex-shrink-0 px-2"
              sx={{
                width: {
                  xs: '100%',      // Mobile: 1 card (100%)
                  md: '50%',        // Tablet: 2 cards (50% each)
                  lg: '33.333%',    // Desktop: 3 cards (33.333% each)
                },
              }}
            >
              <Box
                className="p-6 md:p-8 rounded-2xl border shadow-sm flex flex-col items-start relative border-[1.8px] h-full"
                style={{
                  borderColor: colors.primary,
                  minHeight: 280,
                  background: colors.reviewCard,
                }}
              >
                {/* Quote icon - top right */}
                <Box
                  className="absolute top-4 right-4 text-[42px] md:text-[50px]"
                  style={{ color: colors.primary }}
                >
                  <svg viewBox="0 0 48 48" width="1em" height="1em">
                    <g fill="currentColor">
                      <path d="M19.5,18c0,3.3-2.7,6-6,6c-0.8,0-1.5-0.7-1.5-1.5v-3c0-0.8,0.7-1.5,1.5-1.5h2v-3c0-2.5,2-4.5,4.5-4.5S25,13.5,25,16v18c0,0.8-0.7,1.5-1.5,1.5h-3A1.5,1.5,0,0,1,19,34.5V18z"></path>
                    </g>
                  </svg>
                </Box>
                {/* Review text */}
                <Typography
                  variant="body1"
                  component="p"
                  className="italic mb-8 mt-8"
                  style={{ fontSize: '1.08rem', color: colors.text.primary, fontStyle: 'italic', lineHeight: 1.65 }}
                >
                  {`"${rev.text}"`}
                </Typography>
                {/* Author Name */}
                <Typography
                  variant="subtitle1"
                  component="span"
                  className="font-bold mt-auto text-[18px]"
                  style={{ color: colors.primary }}
                >
                  {rev.author}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Slider Dots */}
      <Box className="flex gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="w-3 h-3 rounded-full transition-all duration-300 cursor-pointer border-none outline-none"
            style={{
              background: index === currentIndex ? colors.primary : '#e5e7eb',
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </Box>
    </Box>
  );
}
