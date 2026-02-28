"use client";

import { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import HeroBanner, { BreadcrumbItem } from "@/components/HeroBanner";
import { colors } from "@/lib/colors";
import { SERVICES } from "@/constants/services";
import type { GalleryImage } from "@/lib/gallery-types";

interface GallerySectionProps {
  breadcrumbs: BreadcrumbItem[];
  galleryImages: GalleryImage[];
}

export default function GallerySection({ breadcrumbs, galleryImages }: GallerySectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("roof-gutter-cleaning");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [displayedCount, setDisplayedCount] = useState<number>(9);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  // Only show the 7 services from Footer
  const footerServices = [
    "roof-gutter-cleaning",
    "window-washing",
    "soft-washing",
    "christmas-lighting-decoration",
    "pressure-washing-concrete-floors",
    "interior-exterior-painting",
    "epoxy-flooring-installation",
  ];
  
  // Map gallery categories to service slugs
  // This allows us to show images from related categories under the correct service
  const categoryToServiceMap: Record<string, string> = {
    // Roof & Gutter Cleaning - includes all roof cleaning types
    "roof-gutter-cleaning": "roof-gutter-cleaning",
    // "asphalt-shingle-roof-cleaning": "roof-gutter-cleaning",
    // "cedar-roof-cleaning": "roof-gutter-cleaning",
    // "concrete-tile-roof-cleaning": "roof-gutter-cleaning",
    // "flat-roof-cleaning": "roof-gutter-cleaning",
    // "spanish-tile-roof-cleaning": "roof-gutter-cleaning",
    // "roof-blow-and-debris-cleaning": "roof-gutter-cleaning",
    // Other services
    "window-washing": "window-washing",
    "window-cleaning": "window-washing",
    "soft-washing": "soft-washing",
    "vinyl-siding-soft-washing": "soft-washing",
    "stucco-exterior-wall-soft-washing": "soft-washing",
    "christmas-lighting-decoration": "christmas-lighting-decoration",
    "pressure-washing-concrete-floors": "pressure-washing-concrete-floors",
    "pressure-washing-floors": "pressure-washing-concrete-floors",
    // Painting services
    "interior-exterior-painting": "interior-exterior-painting",
    "interior-painting": "interior-exterior-painting",
    "exterior-painting": "interior-exterior-painting",
    "painting": "interior-exterior-painting",
    // Epoxy flooring
    "epoxy-flooring-installation": "epoxy-flooring-installation",
    "epoxy-flooring": "epoxy-flooring-installation",
  };
  
  const filterOptions = [
    { id: "all", label: "All", slug: "all" },
    ...SERVICES.filter((service) => footerServices.includes(service.slug)).map((service) => ({
      id: service.slug,
      label: service.title,
      slug: service.slug,
    })),
  ];

  // Map gallery images to services and filter to only show the 7 services
  const mappedGalleryImages = galleryImages
    .map(img => {
      const serviceSlug = categoryToServiceMap[img.category];
      if (!serviceSlug || !footerServices.includes(serviceSlug)) {
        return null;
      }
      return {
        ...img,
        category: serviceSlug, // Map to service slug
      };
    })
    .filter((img): img is GalleryImage => img !== null);
  
  const filteredImages = activeFilter === "all" 
    ? mappedGalleryImages 
    : mappedGalleryImages.filter(img => img.category === activeFilter);

  // Reset displayed count when filter changes
  useEffect(() => {
    setDisplayedCount(9);
  }, [activeFilter]);

  // Get images to display (limited by displayedCount)
  const imagesToDisplay = filteredImages.slice(0, displayedCount);
  const hasMoreImages = filteredImages.length > displayedCount;

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    if (direction === "prev") {
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[prevIndex]);
    } else {
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredImages[nextIndex]);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
        setSelectedImage(filteredImages[prevIndex]);
      } else if (e.key === "ArrowRight") {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
        setSelectedImage(filteredImages[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage, filteredImages]);

  // Ref for the sentinel element
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Infinite scroll: Load more images when user scrolls to bottom
  useEffect(() => {
    if (!hasMoreImages) return;

    const loadMoreImages = () => {
      if (isLoadingMore) return;
      
      setIsLoadingMore(true);
      // Simulate a small delay for smooth loading
      setTimeout(() => {
        setDisplayedCount((prev) => Math.min(prev + 9, filteredImages.length));
        setIsLoadingMore(false);
      }, 300);
    };

    // Use Intersection Observer for better performance
    const observerOptions = {
      root: null,
      rootMargin: "200px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasMoreImages && !isLoadingMore) {
          loadMoreImages();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sentinel = sentinelRef.current;
    
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel);
      }
      observer.disconnect();
    };
  }, [hasMoreImages, isLoadingMore, filteredImages.length]);

  return (
    <>
      {/* Hero Section */}
      <HeroBanner
        title="Our Work Gallery"
        breadcrumbs={breadcrumbs}
        backgroundImage="/home-about-imp2.png"
        minHeight="260px"
      />

      {/* Filter Buttons Section */}
      <Box className="bg-white py-8 md:py-12">
        <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
          <Box className="flex flex-wrap justify-center gap-3 md:gap-4">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.slug)}
                className={`px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-sm md:text-base lg:text-lg transition-all duration-200 ${
                  activeFilter === filter.slug
                    ? "text-white"
                    : "bg-transparent border-2 text-gray-600 hover:border-gray-400"
                }`}
                style={{
                  backgroundColor: activeFilter === filter.slug ? colors.primary : "transparent",
                  borderColor: activeFilter === filter.slug ? colors.primary : "#e5e7eb",
                }}
              >
                {filter.label}
              </button>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Image Gallery Grid */}
      <Box className="bg-white py-8 md:py-12 lg:py-16">
        <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
          {filteredImages.length === 0 ? (
            <Box className="flex flex-col items-center justify-center py-16 md:py-24">
              <Box
                className="w-24 h-24 md:w-32 md:h-32 mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: colors.primary + "20" }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.primary}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-16 md:h-16"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </Box>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                No Images Found
              </h3>
              <p className="text-gray-600 text-center max-w-md">
                There are no images available for this category at the moment.
              </p>
            </Box>
          ) : (
            <>
              <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {imagesToDisplay.map((image) => (
                <Box
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100"
                  onClick={() => handleImageClick(image)}
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "75%", // 4:3 aspect ratio
                    height: 0,
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      unoptimized
                    />
                  </Box>
                  
                  {/* Hover Overlay with Zoom Icon */}
                  <Box
                    className="absolute inset-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center z-10"
                  >
                    <Box
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: colors.primary }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="md:w-8 md:h-8"
                      >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                    </Box>
                  </Box>
                </Box>
                ))}
              </Box>

              {/* Loading indicator and sentinel for infinite scroll */}
              {hasMoreImages && (
                <Box
                  ref={sentinelRef}
                  className="flex flex-col items-center justify-center py-8 mt-4"
                >
                  {isLoadingMore ? (
                    <Box className="flex items-center gap-3">
                      <Box
                        className="w-8 h-8 border-4 rounded-full animate-spin"
                        style={{
                          borderColor: colors.primary + "30",
                          borderTopColor: colors.primary,
                        }}
                      />
                      <span className="text-gray-600 font-medium">Loading more images...</span>
                    </Box>
                  ) : (
                    <Box className="text-center">
                      <p className="text-gray-600 text-sm">
                        Scroll down to load more images ({filteredImages.length - displayedCount} remaining)
                      </p>
                    </Box>
                  )}
                </Box>
              )}

              {/* Show message when all images are loaded */}
              {!hasMoreImages && filteredImages.length > 9 && (
                <Box className="flex items-center justify-center py-8 mt-4">
                  <p className="text-gray-600 text-sm font-medium">
                    All {filteredImages.length} images displayed
                  </p>
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Box
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:opacity-70 transition-opacity z-10"
            aria-label="Close"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Navigation Buttons */}
          {filteredImages.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 md:left-8 text-white hover:opacity-70 transition-opacity z-10"
                aria-label="Previous image"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 md:right-8 text-white hover:opacity-70 transition-opacity z-10"
                aria-label="Next image"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          {/* Image */}
          <Box
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              priority
            />
          </Box>
        </Box>
      )}
    </>
  );
}

