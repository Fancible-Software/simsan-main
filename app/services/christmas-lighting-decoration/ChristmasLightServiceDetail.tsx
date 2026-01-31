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

export default function ChristmasLightServiceDetail({ breadcrumbs }: ServiceDetailProps) {
    const heroImage = "/christmas_light_setup/simsan_fraser_christmas_light_setup_1.webp";
    const galleryImages = [
        "/christmas_light_setup/simsan_fraser_christmas_light_setup_1.webp",
        "/christmas_light_setup/simsan_fraser_christmas_light_setup_2.webp",
        "/christmas_light_setup/simsan_fraser_christmas_light_setup_3.webp"
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
                {/* Dark Overlay */}
                <Box
                    className="absolute top-0 left-0 w-full h-full z-0"
                    style={{
                        background: "rgba(0, 0, 0, 0.6)",
                    }}
                />

                <Box className="relative z-10 px-6 lg:px-16 py-16 flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full">
                    <Box className="mb-6">
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white">
                            Christmas Light Installation
                        </h1>
                    </Box>

                    {/* Breadcrumbs */}
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

                    {/* CTA Buttons */}
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
                                Expert Christmas Light Installation & Maintenance
                            </h2>
                            <p
                                className="text-lg md:text-xl mb-6"
                                style={{ color: colors.secondary }}
                            >
                                Serving the Lower Mainland & Fraser Valley
                            </p>

                            <Box className="space-y-4 mb-8" style={{ color: "#212121" }}>
                                <p className="text-base md:text-lg leading-relaxed">
                                    Make your home shine this holiday season with professional Christmas light installation from Simsan Fraser Maintenance Ltd. Our team handles everything from design and setup to takedown, creating a festive display that will impress family, friends and neighbors—without the stress or risk of doing it yourself.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed">
                                    We safely install LED string lights, icicle lights, roofline lights, trees, shrubs and more, ensuring your decorations are secure, evenly spaced and fully functional. Using professional equipment and techniques, we prevent damage to your roof, gutters and landscaping while creating a bright, festive atmosphere.
                                </p>

                                {/* Services List */}
                                <Box>
                                    <h3
                                        className="text-xl md:text-2xl font-bold mb-4"
                                        style={{ color: colors.secondary }}
                                    >
                                        Our Christmas light services include:
                                    </h3>
                                    <ul className="space-y-3" style={{ color: colors.secondary }}>
                                        {[
                                            "Custom light design for homes and businesses",
                                            "Professional installation on rooflines, eaves, trees and shrubs",
                                            "Safe setup using ladders, poles, and harnesses as needed",
                                            "Removal and storage after the holiday season (optional)",
                                            "Energy-efficient LED lights for long-lasting sparkle"
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

                                <p className="text-base md:text-lg leading-relaxed">
                                    Whether you want a classic, elegant or fully themed display, we bring your vision to life and make your home the highlight of the neighborhood. Our team serves Lower Mainland and Fraser Valley area, ensuring your holidays are bright, stress-free and magical.
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
                                {/* Top Left Image */}
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src={galleryImages[0]}
                                        alt="Christmas Light Installation - Image 1"
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                                {/* Top Right Image */}
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
                                    <Image
                                        src={galleryImages[1]}
                                        alt="Christmas Light Installation - Image 2"
                                        fill
                                        className="object-cover"
                                    />
                                </Box>
                                {/* Bottom Full Width Image */}
                                <Box className="relative w-full h-48 md:h-64 lg:h-80 col-span-2 rounded-lg overflow-hidden">
                                    <Image
                                        src={galleryImages[2]}
                                        alt="Christmas Light Installation - Image 3"
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
                title="Frequently Asked Questions – Christmas Light Installation"
                items={[
                    {
                        question: "What does your Christmas light installation service include?",
                        answer: "Our service includes design, professional installation, and optional takedown of your holiday lights. We install lights on roofs, eaves, gutters, trees, shrubs, and other exterior areas while ensuring safety and even placement."
                    },
                    {
                        question: "Do you provide the Christmas lights, or do I need to supply them?",
                        answer: "We can work with your lights or provide high-quality, energy-efficient LED lights for your display. We also offer options for custom colors and themes to match your vision."
                    },
                    {
                        question: "Is professional installation safe for my roof and gutters?",
                        answer: "Yes. Our trained technicians use proper tools, ladders, and safety equipment to prevent damage to your roof, siding, gutters, and landscaping."
                    },
                    {
                        question: "Can you install lights on multi-story homes?",
                        answer: "Absolutely. We safely install lights on multi-story homes, large trees, and hard-to-reach areas using specialized poles and safety equipment."
                    },
                    {
                        question: "Do you remove the lights after the holidays?",
                        answer: "Yes. We offer takedown and optional storage services to make the process easy and stress-free."
                    },
                    {
                        question: "How early should I book my Christmas light installation?",
                        answer: "We recommend booking early in the season (October–November) to ensure availability and allow time for design planning, especially for larger homes or commercial displays."
                    },
                    {
                        question: "Can you create a custom light display?",
                        answer: "Yes. We can design classic, elegant, themed, or fully custom displays to make your home or business stand out during the holidays."
                    },
                    {
                        question: "Are the lights energy-efficient?",
                        answer: "Yes. We use LED lights that are long-lasting, bright, and energy-efficient, helping reduce electricity costs while keeping your display stunning."
                    },
                    {
                        question: "Do you offer commercial Christmas light installation?",
                        answer: "Yes. We provide professional installation for residential homes, businesses, office buildings, and commercial properties throughout the Lower Mainland & Fraser Valley."
                    }
                ]}
            />

            {/* Contact Us Section */}
            <ContactUs />
        </>
    );
}

