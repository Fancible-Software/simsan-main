"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { colors } from "@/lib/colors";
import React, { useState, useEffect } from "react";

// Fallback reviews in case API fails or is not configured
const fallbackReviews = [
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

interface Review {
  text: string;
  author: string;
  rating?: number;
  link?: string;
  date?: string;
  thumbnail?: string;
}

export default function CustomerReviews() {
  const [reviews, setReviews] = useState<Review[]>(fallbackReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch Google Reviews on component mount
  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        const response = await fetch('/api/serp-google-review');
        const data = await response.json();

        if (data.reviews && data.reviews.length > 0) {
          // Transform Google reviews to match our format
          const formattedReviews = data.reviews.map((review: any) => ({
            text: review.text,
            author: review.author,
            rating: review.rating,
            link: review.link,
            date: review.date,
            thumbnail: review.thumbnail,
          }));
          setReviews(formattedReviews);
        } else {
          // If no reviews from API, use fallback
          console.log('No reviews from API, using fallback reviews');
          setReviews(fallbackReviews);
        }
      } catch (error) {
        console.error('Error fetching Google Reviews:', error);
        // Use fallback reviews on error
        setReviews(fallbackReviews);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

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

      {/* External Review Links */}
      {/* <Box className="flex flex-wrap gap-4 justify-center mb-6">
        <a
          href="https://www.google.com/maps/place/Simsan+Fraser+Maintenance+Ltd/@49.2864298,-123.7207669,9z/data=!3m1!4b1!4m6!3m5!1s0x8d64a713f8717419:0x4cb8cdfc07e644a8!8m2!3d49.2883054!4d-123.0614468!16s%2Fg%2F11sqq338yq?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-md flex items-center gap-2"
          style={{ 
            background: colors.primary,
            color: 'white',
            textDecoration: 'none'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          View Google Reviews
        </a>
        <a
          href="https://www.yelp.com/biz/YOUR_BUSINESS_NAME"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-md flex items-center gap-2"
          style={{ 
            background: '#d32323',
            color: 'white',
            textDecoration: 'none'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.5 9.5c0-1.5-1.2-2.7-2.7-2.7h-1.8v-1.8c0-1.5-1.2-2.7-2.7-2.7H9.7c-1.5 0-2.7 1.2-2.7 2.7v1.8H5.2c-1.5 0-2.7 1.2-2.7 2.7v9.1c0 1.5 1.2 2.7 2.7 2.7h15.6c1.5 0 2.7-1.2 2.7-2.7v-9.1zm-2.7-1.2c.7 0 1.2.5 1.2 1.2v9.1c0 .7-.5 1.2-1.2 1.2H5.2c-.7 0-1.2-.5-1.2-1.2v-9.1c0-.7.5-1.2 1.2-1.2h1.8v1.8c0 1.5 1.2 2.7 2.7 2.7h4.6c1.5 0 2.7-1.2 2.7-2.7V8.3h1.8z"/>
          </svg>
          View Yelp Reviews
        </a>
        <a
          href="https://www.facebook.com/YOUR_BUSINESS_PAGE/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-md flex items-center gap-2"
          style={{ 
            background: '#1877f2',
            color: 'white',
            textDecoration: 'none'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          View Facebook Reviews
        </a>
      </Box> */}

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
              <path d="M15 18l-6-6 6-6" />
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
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}

        <Box
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {reviews.map((rev, idx) => {
            const CardContent = (
              <Box
                className="p-6 md:p-8 rounded-2xl border shadow-sm flex flex-col items-start relative border-[1.8px] h-full transition-all duration-200"
                style={{
                  borderColor: colors.primary,
                  minHeight: 280,
                  background: colors.reviewCard,
                }}
                sx={{
                  '&:hover': rev.link ? {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  } : {},
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
                {/* Star rating */}
                {rev.rating && (
                  <Box className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={i < rev.rating! ? colors.primary : '#e5e7eb'}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </Box>
                )}
                {/* Review text */}
                {(() => {
                  const maxChars = 300;
                  const isTruncated = rev.text.length > maxChars;
                  const displayText = isTruncated
                    ? rev.text.substring(0, maxChars).trim() + '...'
                    : rev.text;
                  return (
                    <>
                      <Typography
                        variant="body1"
                        component="p"
                        className="italic mb-4 mt-4"
                        style={{ fontSize: '1.08rem', color: colors.text.primary, fontStyle: 'italic', lineHeight: 1.65 }}
                      >
                        {`"${displayText}"`}
                      </Typography>
                      {isTruncated && rev.link && (
                        <Typography
                          variant="caption"
                          component="span"
                          className="mb-4"
                          style={{ color: colors.primary, fontWeight: 500 }}
                        >
                          Read full review →
                        </Typography>
                      )}
                    </>
                  );
                })()}
                {/* Author Name + Link indicator */}
                <Box className="mt-auto flex items-center justify-between w-full">
                  <Typography
                    variant="subtitle1"
                    component="span"
                    className="font-bold text-[18px]"
                    style={{ color: colors.primary }}
                  >
                    {rev.author}
                  </Typography>
                  {rev.link && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={colors.primary}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  )}
                </Box>
              </Box>
            );

            return (
              <Box
                key={`review-${idx}-${rev.author}`}
                className="flex-shrink-0 px-2"
                sx={{
                  width: {
                    xs: '100%',
                    md: '50%',
                    lg: '33.333%',
                  },
                }}
              >
                {rev.link ? (
                  <a
                    href={rev.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', display: 'block', height: '100%' }}
                  >
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </Box>
            );
          })}
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
