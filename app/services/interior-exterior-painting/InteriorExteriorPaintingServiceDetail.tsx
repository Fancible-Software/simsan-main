"use client";

import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { colors } from "@/lib/colors";
import FAQ from "@/components/FAQ";
import ContactUs from "@/components/ContactUs";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface ServiceDetailProps {
    breadcrumbs: BreadcrumbItem[];
}

export default function InteriorExteriorPaintingServiceDetail({ breadcrumbs }: ServiceDetailProps) {
    const heroImage = "/home-about-img1.png";
    const galleryImages = [
        "/home-about-img1.png",
        "/home-about-imp2.png",
        "/homepage1.png"
    ];

    return (
        <>
            {/* Hero Section */}
            <Box
                className="relative w-full min-h-[520px] lg:min-h-[660px] flex flex-col justify-center"
                style={{
                    background: `url('${heroImage}') center center/cover no-repeat`,
                    position: 'relative',
                    borderBottomLeftRadius: '44px',
                    borderBottomRightRadius: '44px',
                    overflow: 'hidden'
                }}
            >
                <Box
                    className="absolute top-0 left-0 w-full h-full z-0"
                    style={{
                        background: "rgba(0, 0, 0, 0.6)",
                    }}
                />

                <Box className="relative z-10 px-6 lg:px-16 py-16 flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full">
                    <Box className="mb-6">
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white">
                            Interior & Exterior Painting Services
                        </h1>
                    </Box>

                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center space-x-2 text-sm sm:text-base">
                            {breadcrumbs.map((item, index) => (
                                <li key={item.label} className="flex items-center">
                                    {index > 0 && <span className="mx-2" style={{ color: colors.primary, opacity: 0.8 }}>-</span>}
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="hover:underline font-medium"
                                            style={{ color: colors.primary }}
                                        >
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span style={{ color: colors.primary }}>{item.label}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>

                    <Box className="flex flex-col sm:flex-row gap-4 mt-4">
                        <a
                            href="tel:+17782227988"
                            className="text-white font-semibold px-8 py-4 rounded-lg w-fit flex items-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base no-underline"
                            style={{ background: colors.primary }}
                        >
                            CALL US NOW
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                        <Link
                            href="/estimate"
                            className="text-white font-semibold px-8 py-4 rounded-lg w-fit flex items-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base no-underline"
                            style={{ background: colors.primary }}
                        >
                            GET QUOTE
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </Box>
                </Box>
            </Box>

            {/* Main Content Section */}
            <Box className="bg-white py-12 md:py-16 lg:py-20">
                <Box className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-0">
                    <Box className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* Left Column - Content */}
                        <Box className="flex-1">
                            <h2
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
                                style={{ color: colors.primary }}
                            >
                                Expert Interior & Exterior Painting Services & Maintenance
                            </h2>
                            <p
                                className="text-lg md:text-xl mb-6"
                                style={{ color: colors.secondary }}
                            >
                                Serving the Lower Mainland & Fraser Valley
                            </p>

                            <Box className="space-y-4 mb-8" style={{ color: "#212121" }}>
                                <p className="text-base md:text-lg leading-relaxed">
                                    Our interior and exterior painting services are designed to refresh, protect and enhance your property with clean, professional results that last. Whether you're updating a single room or repainting the entire exterior of your home or business, we combine skilled craftsmanship, quality materials and attention to detail to deliver a flawless finish.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed">
                                    For interior painting, we focus on proper preparation, clean lines and minimal disruption to your space. From walls and ceilings to trim, doors and cabinets, we use premium paints and proven techniques to create smooth, long-lasting results that transform your interior.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed">
                                    For exterior painting, we protect your property from the elements while improving curb appeal. Our process includes thorough surface preparation—such as washing, scraping, sanding and priming—to ensure the paint adheres properly and withstands the Lower Mainland and Fraser Valley climate.
                                </p>

                                {/* Services List */}
                                <Box>
                                    <h3
                                        className="text-xl md:text-2xl font-bold mb-4"
                                        style={{ color: colors.secondary }}
                                    >
                                        Our painting services include:
                                    </h3>
                                    <ul className="space-y-3" style={{ color: colors.secondary }}>
                                        {[
                                            "Interior walls, ceilings, trim, doors and stairwells",
                                            "Exterior siding, stucco, wood, brick and masonry",
                                            "Residential and commercial painting",
                                            "Surface preparation, patching and minor repairs",
                                            "High-quality, durable paint products"
                                        ].map((type, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span
                                                    className="text-xl font-bold mt-1"
                                                    style={{ color: colors.secondary }}
                                                >
                                                    •
                                                </span>
                                                <span className="text-base md:text-lg leading-relaxed" style={{ color: "#212121" }}>
                                                    {type}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </Box>

                                {/* Benefits List */}
                                <Box>
                                    <h3
                                        className="text-xl md:text-2xl font-bold mb-4"
                                        style={{ color: colors.secondary }}
                                    >
                                        Benefits of professional painting:
                                    </h3>
                                    <ul className="space-y-3" style={{ color: colors.secondary }}>
                                        {[
                                            "Enhances appearance and property value",
                                            "Protects surfaces from moisture, wear and weather",
                                            "Clean, consistent and long-lasting results",
                                            "Saves time and avoids costly mistakes"
                                        ].map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <span
                                                    className="text-xl font-bold mt-1"
                                                    style={{ color: colors.secondary }}
                                                >
                                                    •
                                                </span>
                                                <span className="text-base md:text-lg leading-relaxed" style={{ color: "#212121" }}>
                                                    {benefit}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </Box>

                                <p className="text-base md:text-lg leading-relaxed">
                                    At Simsan Fraser Maintenance Ltd, we proudly provide interior and exterior painting services across Lower Mainland and Fraser Valley area. Our experienced painters deliver reliable, high-quality workmanship with respect for your home or business.
                                </p>
                            </Box>

                            {/* CTA Button */}
                            <a
                                href="tel:+17782227988"
                                className="text-white font-semibold px-8 py-4 rounded-lg w-fit flex items-center gap-2 transition-colors duration-200 uppercase tracking-wide text-sm lg:text-base no-underline"
                                style={{ background: colors.primary }}
                            >
                                CALL EXPERTS NOW
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </Box>

                        {/* Right Column - Image Gallery */}
                        <Box className="flex-1">
                            <Box className="grid grid-cols-2 gap-4">
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src={galleryImages[0]}
                                        alt="Interior & Exterior Painting - Image 1"
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src={galleryImages[1]}
                                        alt="Interior & Exterior Painting - Image 2"
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 col-span-2 rounded-lg overflow-hidden">
                                    <Image
                                        src={galleryImages[2]}
                                        alt="Interior & Exterior Painting - Image 3"
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* FAQ Section */}
            <FAQ
                title="Frequently Asked Questions – Interior & Exterior Painting"
                items={[
                    {
                        question: "How do I prepare my home for painting?",
                        answer: "We take care of most preparation, including covering floors, protecting furniture, patching small holes, sanding and priming. We simply ask that small personal items be moved beforehand."
                    },
                    {
                        question: "What type of paint do you use?",
                        answer: "We use high-quality, professional-grade paints suited for each surface and environment. We can also work with specific brands or finishes upon request."
                    },
                    {
                        question: "How long does interior painting take?",
                        answer: "Most interior painting projects take 1–5 days, depending on the size of the space, number of rooms and preparation required."
                    },
                    {
                        question: "How long does exterior paint last?",
                        answer: "With proper preparation and quality paint, exterior paint typically lasts 7–10 years, depending on exposure, surface type and maintenance."
                    },
                    {
                        question: "Do you help with color selection?",
                        answer: "Yes. We can provide color consultation and recommendations to help you choose shades that complement your space and lighting."
                    },
                    {
                        question: "Is exterior painting weather-dependent?",
                        answer: "Yes. Exterior painting requires dry conditions and suitable temperatures. We schedule work carefully to ensure proper curing and long-lasting results."
                    },
                    {
                        question: "Do you paint over damaged surfaces?",
                        answer: "No. We address surface issues first. Minor repairs, sanding and priming are completed before painting to ensure a smooth and durable finish."
                    },
                    {
                        question: "Are your painters insured?",
                        answer: "Yes. Our team is fully insured and trained to work safely and professionally on both interior and exterior projects."
                    },
                    {
                        question: "Do you offer commercial painting services?",
                        answer: "Yes. We provide painting services for offices, retail spaces, strata buildings and commercial properties."
                    }
                ]}
            />

            {/* Contact Us Section */}
            <ContactUs />
        </>
    );
}

