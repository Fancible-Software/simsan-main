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

export default function EpoxyFlooringServiceDetail({ breadcrumbs }: ServiceDetailProps) {
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
                            Epoxy Flooring Installation
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
                                Expert Epoxy Flooring Installation & Maintenance
                            </h2>
                            <p
                                className="text-lg md:text-xl mb-6"
                                style={{ color: colors.secondary }}
                            >
                                Durable, Seamless Floors in the Lower Mainland & Fraser Valley
                            </p>

                            <Box className="space-y-4 mb-8" style={{ color: "#212121" }}>
                                <p className="text-base md:text-lg leading-relaxed">
                                    Our epoxy flooring solutions provide a durable, attractive and long-lasting finish for both residential and commercial spaces. Epoxy is a high-performance coating applied over concrete, creating a seamless, non-porous surface that resists stains, chemicals, moisture and heavy wear.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed">
                                    Epoxy flooring is ideal for garages, basements, warehouses, workshops, retail spaces and industrial areas. With proper surface preparation and professional installation, epoxy floors not only enhance appearance but also protect concrete from cracking, dusting and deterioration.
                                </p>

                                {/* Applications List */}
                                <Box>
                                    <h3
                                        className="text-xl md:text-2xl font-bold mb-4"
                                        style={{ color: colors.secondary }}
                                    >
                                        Epoxy flooring applications include:
                                    </h3>
                                    <ul className="space-y-3" style={{ color: colors.secondary }}>
                                        {[
                                            "Garage floors",
                                            "Basements and utility rooms",
                                            "Commercial and industrial floors",
                                            "Workshops and warehouses",
                                            "Retail and showroom spaces"
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
                                        Benefits of professional epoxy flooring:
                                    </h3>
                                    <ul className="space-y-3" style={{ color: colors.secondary }}>
                                        {[
                                            "Resistant to chemicals, oil, stains and moisture",
                                            "Easy to clean and maintain",
                                            "Slip-resistant options available",
                                            "Enhances appearance and property value"
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
                                    Our epoxy flooring systems are designed to perform well in the Lower Mainland and Fraser Valley climate, providing a clean, professional finish that stands up to daily use.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed">
                                    At Simsan Fraser Maintenance Ltd, we provide professional epoxy flooring installation services across Lower Mainland and Fraser Valley area, using high-quality materials and proven installation methods for reliable results.
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
                                        alt="Epoxy Flooring Installation - Image 1"
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src={galleryImages[1]}
                                        alt="Epoxy Flooring Installation - Image 2"
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 col-span-2 rounded-lg overflow-hidden">
                                    <Image
                                        src={galleryImages[2]}
                                        alt="Epoxy Flooring Installation - Image 3"
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
                title="Frequently Asked Questions – Epoxy Flooring"
                items={[
                    {
                        question: "What is epoxy flooring?",
                        answer: "Epoxy flooring is a protective coating made by combining resin and hardener, which chemically bond to create a strong, seamless surface over concrete."
                    },
                    {
                        question: "Is epoxy flooring suitable for garages?",
                        answer: "Yes. Epoxy is one of the best options for garages because it resists oil, chemicals, tire marks and moisture while providing a clean, durable finish."
                    },
                    {
                        question: "How long does epoxy flooring last?",
                        answer: "With proper preparation and professional installation, epoxy flooring can last 10–20 years, depending on usage and maintenance."
                    },
                    {
                        question: "Is epoxy flooring slippery?",
                        answer: "Epoxy can be slippery when wet, but we offer non-slip additives to improve traction and safety."
                    },
                    {
                        question: "How long does installation take?",
                        answer: "Most epoxy flooring projects take 1–3 days, including surface preparation and curing time."
                    },
                    {
                        question: "Can epoxy be applied over old or damaged concrete?",
                        answer: "Yes, as long as the concrete is structurally sound. We repair minor cracks and surface issues before applying epoxy to ensure proper adhesion."
                    },
                    {
                        question: "Is epoxy flooring easy to maintain?",
                        answer: "Yes. Epoxy floors are low-maintenance and easy to clean with regular sweeping and occasional mopping."
                    },
                    {
                        question: "Can I customize the look of my epoxy floor?",
                        answer: "Absolutely. We offer solid colors, decorative flakes and high-gloss finishes to match your style and space."
                    },
                    {
                        question: "Is epoxy flooring suitable for commercial spaces?",
                        answer: "Yes. Epoxy is widely used in commercial and industrial environments due to its strength, durability, and professional appearance."
                    }
                ]}
            />

            {/* Contact Us Section */}
            <ContactUs />
        </>
    );
}

